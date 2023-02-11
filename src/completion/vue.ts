import * as vscode from "vscode";
import { findDependency } from "../utils";
import { vueSnippet } from "../snippets/vue";
import { JS_TS_LANG_SCOPES } from "./tsjs";
import { buildCompletionItems, getAlternativeText } from "./utils";

const VUE_LANG_SCOPES = [...JS_TS_LANG_SCOPES, "vue"];

export const insertVueCompletionItems = (context: vscode.ExtensionContext) => {
    findDependency("vue").then(() => {
        const vueSnippetCompletionItems = buildCompletionItems(vueSnippet, ".ts", "typescript");

        const vueSnippetsProviderDisposables = VUE_LANG_SCOPES.map(i =>
            vscode.languages.registerCompletionItemProvider(i, {
                provideCompletionItems: () => vueSnippetCompletionItems
            })
        );
        context.subscriptions.push(...vueSnippetsProviderDisposables);

        const vueCompletionProvider: vscode.CompletionItemProvider = {
            provideCompletionItems(document, position) {
                const { alternativeText, alternativeTextRange } = getAlternativeText(document, position);
                const items: vscode.CompletionItem[] = [
                    {
                        label: "ref",
                        kind: vscode.CompletionItemKind.File,
                        insertText: new vscode.SnippetString(`const \${1:count} = ref(${alternativeText});\n$0`),
                        additionalTextEdits: [{ range: alternativeTextRange, newText: "" }],
                        detail: ".vue",
                        documentation: new vscode.MarkdownString(`\`\`\`typescript\nconst count = ref(${alternativeText});\n\`\`\``)
                    }
                ];

                return items;
            }
        };

        const vueCompletionProviderDisposables = VUE_LANG_SCOPES.map(i => vscode.languages.registerCompletionItemProvider(i, vueCompletionProvider, "."));
        context.subscriptions.push(...vueCompletionProviderDisposables);
    });
};
