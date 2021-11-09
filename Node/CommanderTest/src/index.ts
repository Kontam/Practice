import {Command} from 'commander';

function main() {
  const program = new Command();
  program.option('-d, --debug', 'output extra debugging');
  program.option('-t, --test', 'testing default value', 'default');

  program.parse(process.argv);
  const options = program.opts();
  console.log(options);
}

main();
