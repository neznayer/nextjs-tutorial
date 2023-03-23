import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const frontDirectory = path.join(process.cwd(), "front");

export async function getFrontMessage(locale) {
  const fileName = "index.md";

  const fullPath = path.join(frontDirectory, locale, fileName);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id: fileName.replace(/\.md$/, ""),
    contentHtml,
    ...matterResult.data,
  };
}
