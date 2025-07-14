'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import BlogLanding from "@/components/homepage";


export default function Home() {
  return (
    <div className="grid dark:bg-gray-900 grid-rows-[20px_1fr_20px] m-0 p-0 items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] m-0 p-0 row-start-2 items-center sm:items-start">
        <BlogLanding />
      </main>
    </div>
  );
}
