import * as vscode from "vscode";
import { findDependency } from "../utils";
import { reactSnippet } from "../snippets/react";
import { JS_TS_LANG_SCOPES } from "./tsjs";
import { buildCompletionItems } from "./utils";

const REACT_LANG_SCOPES = JS_TS_LANG_SCOPES;

export const insertReactCompletionItems = (context: vscode.ExtensionContext) => {
  findDependency("react")
    .then(() => {
      const reactSnippetCompletionItems = buildCompletionItems(reactSnippet, ".tsx", "typescriptreact");

      const reactProviderDisposables = REACT_LANG_SCOPES.map((i) =>
        vscode.languages.registerCompletionItemProvider(i, {
          provideCompletionItems: () => reactSnippetCompletionItems,
        })
      );
      context.subscriptions.push(...reactProviderDisposables);
    })
    .catch(() => {});
};
