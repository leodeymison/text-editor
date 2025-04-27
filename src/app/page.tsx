"use client";
import TextEditor from "@/components/editor";
import { useState } from "react";

export default function HomePage() {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex justify-center w-full px-10 pt-40">
      <TextEditor onChange={setText} />
    </div>
  );
}
