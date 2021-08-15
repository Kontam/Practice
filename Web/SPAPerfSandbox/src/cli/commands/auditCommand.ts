import { Command } from "../../../types";
import { runAudit } from "../../timeline/puppeteer";

export const auditCommand: Command = {
  name: "audit",
  optionTypes: {
    '--scenario': String,
    '--help': Boolean,
    '--times': Number,
  },
  helpText: "run puppeteer to collect performance timeline.",
  exec: async (args) => {
    await runAudit(args);
  } 
};
