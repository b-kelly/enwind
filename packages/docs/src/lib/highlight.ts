import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import csharp from 'highlight.js/lib/languages/csharp';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('csharp', csharp);

export function highlight(code: string, language: string) {
	return hljs.highlight(code, { language }).value;
}
