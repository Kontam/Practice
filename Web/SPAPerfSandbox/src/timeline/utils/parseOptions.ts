import arg from 'arg';


export type TimelineOptions = {
  names: string[];
  times: number;
}

export function parseOptions() {
  const args = arg({
    '--help': Boolean,
    '--times': Number,
  });

  return {
    names: args._,
    times: args['--times'] || 1,
  }
}
