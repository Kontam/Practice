import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const yrgs = yargs(hideBin(process.argv));
yrgs.command('serve [port]', 'start the server', (yargs) => {
  return yargs.positional('port', {describe: 'port to bind on', default: 5000,});
});

const argv = yrgs.argv;

console.log(argv);

