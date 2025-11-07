import { createPageWithBlocks } from "./figma";

export async function assemble_page({ page_name, blocks }: {
  page_name: string,
  blocks: string[]
}) {
  return await createPageWithBlocks(page_name, blocks);
}
