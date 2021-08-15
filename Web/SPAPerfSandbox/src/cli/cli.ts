import { auditCommand } from './commands/auditCommand';
import {parseOptions} from './utils/parseOptions';

function main() {
  const commands = [
    auditCommand,
  ];
  const optionTypes = {
    ...auditCommand.optionTypes
  }
  const args = parseOptions(optionTypes); 
  console.log(args);

  // add default process
  if (!args._ || args.length === 0) process.exit(1);

  const executable = commands.find((command) => command.name === args._[0]);

  // should be help
  if (!executable) process.exit(1);

  executable.exec(args);
}

(() => {
  main();
})();
