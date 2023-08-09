import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documentation · Reindeer",
  description: "Browse the official documentation for Reindeer, a Discord bot for user reports.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
