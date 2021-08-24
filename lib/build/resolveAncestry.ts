export const resolveAncestry = (
    type: string,
    ancestors: Array<string>,
    options: Array<string>
): string | null => {
    const allAncestors = [type, ...ancestors]
    for (const ancestor of allAncestors) {
        if (options.includes(ancestor)) {
            return ancestor
        }
    }

    return null
}