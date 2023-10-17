function generateGetters(target: any, propertyNames?: string[]) {
    const properties = propertyNames || Object.keys(new target()) //TODO

    properties.forEach((propertyName) => {
        Object.defineProperty(
            target.prototype,
            `get${propertyName.charAt(0).toUpperCase()}${propertyName.slice(
                1
            )}`,
            {
                value: function (this: any) {
                    return this[propertyName]
                },
            }
        )
    })
}

export function getProperty(...propertyNames: string[]): ClassDecorator {
    return function (target: any) {
        generateGetters(target, propertyNames)
    }
}
