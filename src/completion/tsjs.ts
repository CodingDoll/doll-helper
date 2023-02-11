import * as vscode from "vscode";

import { getAlternativeText } from "./utils";

export const JS_TS_LANG_SCOPES = ["typescript", "javascript", "typescriptreact", "javascriptreact"] as const;

export const insertTsJsCompletionItems = (context: vscode.ExtensionContext) => {
  const tsProvider: vscode.CompletionItemProvider = {
    provideCompletionItems(document, position) {
      const { alternativeText, alternativeTextRange } = getAlternativeText(document, position);

      const items: vscode.CompletionItem[] = [
        {
          label: "const",
          kind: vscode.CompletionItemKind.File,
          insertText: new vscode.SnippetString(`const \${1:count} = ${alternativeText};\n$0`),
          additionalTextEdits: [{ range: alternativeTextRange, newText: "" }],
          detail: ".ts",
          documentation: new vscode.MarkdownString(`\`\`\`typescript\nconst count = ${alternativeText};\n\`\`\``),
        },
        {
          label: "let",
          kind: vscode.CompletionItemKind.File,
          insertText: new vscode.SnippetString(`let \${1:count} = ${alternativeText};\n$0`),
          additionalTextEdits: [{ range: alternativeTextRange, newText: "" }],
          detail: ".ts",
          documentation: new vscode.MarkdownString(`\`\`\`typescript\let count = ${alternativeText};\n\`\`\``),
        },
      ];

      return items;
    },
  };

  // ? 在vue文件的情况下这东西不出现
  const tsProviderDisposables = [...JS_TS_LANG_SCOPES, "vue"].map((i) =>
    vscode.languages.registerCompletionItemProvider(i, tsProvider, ".")
  );

  context.subscriptions.push(...tsProviderDisposables);
};
