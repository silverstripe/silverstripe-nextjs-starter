import { parse } from "@babel/parser"
// @ts-ignore
import traverse from "@babel/traverse"
import fs from "fs"
import {
    Identifier,
    ExportNamedDeclaration,
    VariableDeclaration, 
    VariableDeclarator
} from "@babel/types"
import { PARSER_OPTIONS } from "../babel/parser-options"
import { getQueryName, hasTopLevelField } from "../graphql/graphqlUtils"
import { parse as graphqlParse } from "graphql" 

export interface QueryData {
    query: string | null
    batchQuery: string | null
}

export const extractPageQueries = (absPath: string): QueryData => {
    let ast: any;
    try {
      const contents = fs.readFileSync(absPath, `utf8`)
      ast = parse(contents, PARSER_OPTIONS)
    } catch (e: any) {
      throw new Error(`Cound not parse file ${absPath} for page query extraction: ${e.message}`)
    }

    let query: QueryData  = {
        query: null,
        batchQuery: null,
    };

    traverse(ast, {
      // Find any import that references useStaticQuery module
      ExportNamedDeclaration({ node }: { node: ExportNamedDeclaration }) {
        if (node.declaration?.type !== `VariableDeclaration`) {
            return
        }
        const declaration = node.declaration as VariableDeclaration
        const declarator = declaration.declarations[0] as VariableDeclarator
        if (!declarator || declarator.type !== `VariableDeclarator`) {
            return
        }
        if (declarator.id.type !== `Identifier`) {
            return
        }
        const id = declarator.id as Identifier
        const varName = id.name as keyof QueryData
        if (varName === `query`) {
            const init = declarator.init
            if (!init || init.type !== `TemplateLiteral`) {
                return
            }
            const queryStr = init.quasis[0].value.raw
            if (init.expressions.length) {
                console.warn(`Page queries cannot contain expressions. Skipping query: ${queryStr}`)
                return
            }
  
            const doc = graphqlParse(queryStr)
            
            if (!hasTopLevelField(doc, `link`)) {
                console.warn(`
                    Query ${getQueryName(doc)} has no "link" field selected. This is a required
                    field for matching queries to pages.
                `)
                return
            }
    
            query[varName] = queryStr    
        } else if (varName === `batchQuery`) {
            const init = declarator.init
            if (!init || init.type !== `TemplateLiteral`) {
                return
            }
            const queryStr = init.quasis[0].value.raw
            if (init.expressions.length) {
                console.warn(`Page queries cannot contain expressions. Skipping query: ${queryStr}`)
                return
            }

            query[varName] = queryStr
        }
      }
  
    })
  
    return query
  }
  