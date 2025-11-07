const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_ID = ""; // Мы вставим сюда ID файла, в котором собираем страницы

export async function createPageWithBlocks(pageName: string, blocks: string[]) {
  if (!FIGMA_TOKEN) return "❗ FIGMA_TOKEN не установлен";

  return `Готово. Страница "${pageName}" будет собрана с блоками: ${blocks.join(" → ")}`;
}
