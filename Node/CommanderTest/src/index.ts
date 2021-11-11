import {Command} from 'commander';

function main() {
  const program = new Command();
  //program.option('-d, --dublle', 'output extra');
  //program.option('-t, --test', 'testing default value', 'default');

  program.version('0.0.1');

  program.command('echo <st>')
  .option('-d, --dublle', 'output extra')
  .description('say something')
  .action((st:string, options: any) => {
    console.log('ehco action', st, options);
    if (options.dublle) {
      console.log("echo dubble", options);
    }
  });

  program.parse(process.argv);
  const options = program.opts();
  console.log(options);


}

main();
