import * as vscode from "vscode";

export const findDependency = (dep: string) =>
  new Promise((res, rej) => {
    vscode.workspace
      .findFiles("package.json", "**/node_modules/**")
      .then((files) => vscode.workspace.fs.readFile(files[0]))
      .then((file) => {
        const packageJSON = JSON.parse(file.toString());
        if (packageJSON?.dependencies?.[dep]) {
          res(true);
        }
        rej("no needed dependency found");
      });
  });
