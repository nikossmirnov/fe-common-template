type Mods = Record<string, boolean | string>;

export const classNames = (
    classNames: string,
    mods: Mods,
    additional: string[]
) => {
        return [
            classNames,
            ...additional,
            ...Object.entries(mods)
                .filter(([className, value]) => Boolean(value))
                .map(([className]) => className),
        ].join(' ');
} 