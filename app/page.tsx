"use client"
import Header from "@/components/Header";
import InputBottom from "@/components/InputBottom";
import SectionCode from "@/components/SectionCode";
import { useCompletion } from "ai/react";
import Image from "next/image";

export default function Home() {
  const {
    completion,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion();

  return (
    <main className="">
      <Header/>
      <SectionCode code={completion}/>
      <InputBottom handleInputChange={handleInputChange} handleSubmit={handleSubmit}  input={input} isLoading={isLoading}  />
    </main>
  );
}
