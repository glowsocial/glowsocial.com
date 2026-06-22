/**
 * Simple markdown-to-HTML converter for blog post rendering.
 * Handles the subset of markdown we actually use: headings, bold, italic,
 * links, lists, simple tables, blockquotes, code blocks, paragraphs.
 *
 * For anything more complex, swap this out for remark/rehype.
 */
export function markdownToHtml(markdown) {
  if (!markdown) return "";

  let html = markdown;

  // Suppress templated answer labels while keeping the answer body in place.
  html = html.replace(/^#{1,6}\s+(?:the\s+)?direct answer[^\r\n]*(?:\r?\n)+/gim, "");

  // Code blocks (fenced)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headings
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");
  html = html
    .replace(/(^|\n)(<h[1-6]>.*?<\/h[1-6]>)(?=\n|$)/g, "\n\n$2\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, "<blockquote><p>$1</p></blockquote>");

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, text, url) => {
      if (url.endsWith('.md') && !url.startsWith('http') && !url.startsWith('https')) {
        const slug = url.replace(/\.md$/, '');
        return `<a href="/resources/questions/${slug}">${text}</a>`;
      }
      if (url.startsWith('/') || url.startsWith('#')) {
        return `<a href="${url}">${text}</a>`;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
  );

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />');

  // Simple markdown tables.
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
      if (!isMarkdownTable(lines)) return block;

      const headerCells = splitTableRow(lines[0]);
      const bodyRows = lines.slice(2).map(splitTableRow);

      return `<table>
<thead><tr>${headerCells.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
<tbody>
${bodyRows
  .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
  .join("\n")}
</tbody>
</table>`;
    })
    .join("\n\n");

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr />");

  // Lists. Handle whole blocks so paragraph wrapping does not swallow <ul>/<ol>.
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trim());
      if (lines.every((line) => /^[-*]\s+/.test(line))) {
        return `<ul>${lines
          .map((line) => `<li>${line.replace(/^[-*]\s+/, "")}</li>`)
          .join("\n")}</ul>`;
      }
      if (lines.every((line) => /^\d+\.\s+/.test(line))) {
        return `<ol>${lines
          .map((line) => `<li>${line.replace(/^\d+\.\s+/, "")}</li>`)
          .join("\n")}</ol>`;
      }
      return block;
    })
    .join("\n\n");

  // Paragraphs — wrap remaining loose text
  html = html
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      // Don't wrap blocks that are already HTML elements
      if (/^<(h[1-6]|ul|ol|li|blockquote|pre|hr|img|div|table|section)/.test(block)) {
        return block;
      }
      return `<p>${block.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isMarkdownTable(lines) {
  if (lines.length < 3) return false;
  if (!lines.every((line) => line.includes("|"))) return false;
  return isTableDivider(splitTableRow(lines[1]));
}

function isTableDivider(cells) {
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}
