import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  try {
    const files = fs.readdirSync(postsDirectory);
    const posts = files.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data;
    });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving posts" });
  }
}
