import glob from 'glob';

export function getScenarios(dirname: string) {
  const files = glob.sync(`${dirname}/**/*.+(ts|js)`);
  console.log(files);
  return files;
}
