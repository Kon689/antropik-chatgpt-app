const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

// Рабочий файл, куда будут собираться страницы
const FILE_ID = "s1HkBPyRHqrktjIl6haj9e";

// Базовый URL к Figma API
const FIGMA_API = "https://api.figma.com/v1";

async function figmaRequest(endpoint: string, method = "GET", body?: any) {
  const res = await fetch(`${FIGMA_API}${endpoint}`, {
    method,
    headers: {
      "X-Figma-Token": FIGMA_TOKEN!,
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });

  return res.json();
}

export async function createPageWithBlocks(pageName: string, blocks: string[]) {
  if (!FIGMA_TOKEN) return "❗ FIGMA_TOKEN не установлен. Задай его в настройках приложения.";

  // 1) Создаём страницу
  await figmaRequest(`/files/${FILE_ID}/pages`, "POST", {
    name: pageName
  });

  // 2) Пока просто возвращаем подтверждение
  return `✅ Страница "${pageName}" готова к сборке.\nБлоки: ${blocks.join(" → ")}`;
}
