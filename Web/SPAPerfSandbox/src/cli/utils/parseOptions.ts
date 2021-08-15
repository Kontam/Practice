import arg from 'arg';


export type TimelineOptions = {
  names: string[];
  times: number;
}

export function parseOptions<T extends arg.Spec>(optionTypes: T) {
  const args = arg(optionTypes);
  const parsed: Partial<{[K in keyof T]: any}>= {};
  Object.keys(optionTypes).forEach((key: keyof T) => {
    parsed[key] = args[key]; 
  })
  return args;
  /*
  return {
    names: args._,
    times: args['--times'] || 1,
  }
  */
}
