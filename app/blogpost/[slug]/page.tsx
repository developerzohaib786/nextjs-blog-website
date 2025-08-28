import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import React from "react";
import { Eye, Heart } from "lucide-react";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'




export default async function BlogPostPage(props: { params: { slug: string } }) {
  const { slug } = await props.params;

  const filePath = `content/${slug}.md`;

  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const file = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || "Blog Post" })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await file.process(content)).toString();

  if(!fs.existsSync(filePath)) {
    notFound();   
    return null;
  }

  return (
    <section className="max-w-3xl mx-auto min-h-[calc(100vh-120px)] bg-white dark:bg-gray-900  overflow-hidden flex flex-col justify-start mb-8 pt-16">
      <div className="relative">
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 object-cover"
          />
        )}
        {data.category && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {data.category}
            </span>
          </div>
        )}
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{data.description}</p>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">
              {data.author
                ? data.author
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")
                : ""}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium">{data.author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {data.date}
            </p>
          </div>
          </div>
          <article>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className=""></div>
          </article>
          </div>
    </section>
  );
}