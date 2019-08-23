// generate function name based on dir name and filename
export const genFunctionName = (dirname: string, filename: string): string => {
  const dirName = dirname
    .split("/")
    .slice(-1)[0]
    .toLowerCase();
  const fileName = filename
    .split("/")
    .slice(-1)[0]
    .split(".")[0];

  const pascalFileName =
    fileName.substring(0, 1).toUpperCase() + fileName.substring(1);

  return `${dirName}${pascalFileName}`;
};
