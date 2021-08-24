import { DefinitionNode, DocumentNode, FieldNode, FragmentSpreadNode, OperationDefinitionNode } from "graphql";
import { parse } from "graphql"

export function getOperationName(doc: DocumentNode): string | null {
    return (
        doc.definitions
        .filter(definition => definition.kind === 'OperationDefinition' && definition.name)
        .map((x: DefinitionNode) => {
            const node = x as OperationDefinitionNode
            return node!.name!.value
        })[0] || null
    );
}

export function getQueryNode(doc: DocumentNode): FieldNode | null {
    const definitions =
        doc.definitions
        .filter(definition => (
            definition.kind === 'OperationDefinition' && 
            definition.name &&
            definition.operation === 'query'
        ))
    if (definitions.length !== 1) {
        return null
    }
    const def = definitions[0] as OperationDefinitionNode
    if (def.selectionSet.selections.length !== 1) {
        return null
    }

    const query = def.selectionSet.selections[0] as FieldNode

    return query;
}


export function getQueryName(doc: DocumentNode): string | null {
    return getQueryNode(doc)?.name?.value ?? null
}

export function getQueryFields(query: string): string | null {
    const doc = parse(query)
    const loc = getQueryNode(doc)?.selectionSet?.loc
    if (!loc) {
        return null
    }

    const { start, end, startToken, endToken } = loc!
    
    return query.substring(start, end)
            .replace(new RegExp(`^${startToken.kind}`), ``)
            .replace(new RegExp(`${endToken.kind}$`), ``)
}

export function getFragments(query: string): string {
    const doc = parse(query)
    const fragments: Array<string> = []
    doc.definitions.forEach(def => {
        if (def.kind !== `FragmentDefinition`) {
            return
        }
        const { start, end, startToken, endToken } = def.loc!
        fragments.push(query.substring(start, end))
    })

    return fragments.join("\n\n")
}

export function hasTopLevelField(doc: DocumentNode, fieldName: string): boolean {
    const fields = getQueryNode(doc)?.selectionSet?.selections as Array<FieldNode | FragmentSpreadNode> ?? []
    for (let field of fields) {
        if (field.kind === `Field` && field.name.value === fieldName) {
            return true
        }
        if (field.kind === `FragmentSpread`) {
            const fragmentName = field.name.value
            if (fragmentHasField(doc, fragmentName, fieldName)) {
                return true
            }
        }
    }
    
    return false
}

export function fragmentHasField(doc: DocumentNode, fragmentName: string, fieldName: string): boolean {
    for (let def of doc.definitions) {
        if (def.kind === `FragmentDefinition` && def.name.value === fragmentName) {
            const fields = def.selectionSet.selections as Array<FieldNode | FragmentSpreadNode>
            for (let field of fields) {
                if (field.kind === `Field` && field.name.value === fieldName) {
                    return true
                }
                if (field.kind === `FragmentSpread`) {
                    if (fragmentHasField(doc, field.name.value, fieldName)) {
                        return true
                    }
                }
            }
        }
    }

    return false
}

export function hasPageInfoField(doc: DocumentNode): boolean {
    const fields = getQueryNode(doc)?.selectionSet?.selections as FieldNode[] ?? []
    const pageInfo = fields.find(field => {
        return field.name.value === `pageInfo`
    })
    if (!pageInfo) {
        return false
    }
    const pageFields = pageInfo.selectionSet?.selections as FieldNode[] ?? []

    return pageFields.some(field => {
        return field.name.value === `hasNextPage`
    })
}
