import * as vscode from "vscode";

type Snippet = Record<
    string,
    {
        prefix: string;
        body: string | string[];
        description: string;
    }
>;

export const buildCompletionItems = (snippet: Snippet, fileSuffix: string, mdLanguage: string): vscode.CompletionItem[] =>
    Object.entries(snippet).map(([key, value]) => {
        const temp = new vscode.CompletionItem({ label: value.prefix, description: key }, vscode.CompletionItemKind.File);
        const body = Array.isArray(value.body) ? value.body.join("\n") : value.body;
        temp.detail = fileSuffix;
        temp.documentation = new vscode.MarkdownString(`\`\`\`${mdLanguage}\n${body}\n\`\`\``);
        temp.insertText = new vscode.SnippetString(body);
        return temp;
    });

export function getAlternativeText(document: vscode.TextDocument, position: vscode.Position) {
    const { text: lineText, firstNonWhitespaceCharacterIndex } = document.lineAt(position);
    const firstNonWhitespaceCharacterPosition = position.translate(0, firstNonWhitespaceCharacterIndex - position.character);
    const alternativeTextRange = new vscode.Range(firstNonWhitespaceCharacterPosition, position);
    const alternativeText = lineText.substring(firstNonWhitespaceCharacterIndex, lineText.lastIndexOf("."));
    return { alternativeText, alternativeTextRange };
}
