type Mods = Record<string, boolean | string>;

export const classNames = (
  classNames: string,
  mods?: Mods,
  additional?: string[],
) => [
  classNames,
  // eslint-disable-next-line no-unsafe-optional-chaining
  ...additional?.filter(Boolean),
  ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
