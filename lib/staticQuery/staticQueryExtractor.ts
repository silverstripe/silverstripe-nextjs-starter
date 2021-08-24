import { parse } from "@babel/parser"
// @ts-ignore
import traverse from "@babel/traverse"
import glob from "glob"
import fs from "fs"
import path from "path"
import { CallExpression, Identifier, ImportDeclaration, TemplateLiteral } from "@babel/types"
import { PARSER_OPTIONS } from "../babel/parser-options"
import { parse as graphqlParse } from "graphql"

const TARGET_LIBRARY = `${process.cwd()}/lib/staticQuery/useStaticQuery`

export const extractStaticQuery = (absPath: string): string | null => {
  let ast: any;
  try {
    const contents = fs.readFileSync(absPath, `utf8`)
    ast = parse(contents, PARSER_OPTIONS)
  } catch (e: any) {
    throw new Error(`Cound not parse file ${absPath} for static query extraction: ${e.message}`)
  }

  const dir = path.dirname(absPath)
  

  let functionName: string | null = null
  let query: string | null = null

  traverse(ast, {
    // Find any import that references useStaticQuery module
    ImportDeclaration({ node }: { node: ImportDeclaration }) {
      const libraryPath = node.source.value
      const resolvedPath = path.resolve(dir, libraryPath)

      const candidate = resolvedPath.replace(/\.[^/.]+$/, '')
      if (candidate !== TARGET_LIBRARY) {
        return
      }
      functionName = node.specifiers[0]?.local?.name        
      traverse(ast, {
        // Find any calls that use the imported useStaticQuery function
        CallExpression({ node }: { node: CallExpression }) {   
          if (node.callee.type !== `Identifier`) {
            return
          }
          const callee = node.callee as Identifier
          if (callee.name !== functionName) {
            return
          }
          const firstArg = node.arguments[0]
          // Most of the time, it's a literal right in the function call
          if (firstArg.type === `TemplateLiteral`) {
            const queryStr = firstArg.quasis[0].value.raw
            if (firstArg.expressions.length) {
              console.warn(`Static queries cannot contain expressions. Skipping query: ${queryStr}`)
              return
            }
            graphqlParse(queryStr)
            query = queryStr
            return
          }
          // But it could also be a variable. If so, track it down.
          if (firstArg.type === `Identifier`) {  
            const varExpr = firstArg as Identifier
            const varName = varExpr.name
            let found = false
            traverse(ast, {
              VariableDeclarator(varPath: any) {
                if (
                  varPath.node.id.name !== varName ||
                  varPath.node.init.type !== `TemplateLiteral`
                ) {
                  return
                }
                varPath.traverse({
                  TemplateLiteral(templatePath: any) {
                    found = true
                    const queryStr = templatePath.node.quasis[0].value.raw
                    graphqlParse(queryStr)
                    query = queryStr
                  },
                })
              },
            })
            if (!found) {
              console.warn(`Unknown query variable: ${varName} in ${absPath}`)
            }
          }
        }
      })
    }
  })

  return query
}

export const extractStaticQueries = (pattern: string) => {
  const files = glob.sync(pattern, { absolute: true });
  return files.reduce((queries: Array<string>, absPath) => {
    const query = extractStaticQuery(absPath)
    if (query) {
      return [...queries, query]
    }
    return queries
  }, [])
}
