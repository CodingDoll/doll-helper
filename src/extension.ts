import * as vscode from "vscode";
import { insertReactCompletionItems } from "./completion/react";
import { insertVueCompletionItems } from "./completion/vue";
import { insertTsJsCompletionItems } from "./completion/tsjs";

export function activate(context: vscode.ExtensionContext) {
  insertTsJsCompletionItems(context);
  insertReactCompletionItems(context);
  insertVueCompletionItems(context);
}
