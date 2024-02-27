import Link from "next/link";
import type { Metadata } from "next";
import "@/scss/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function NotFound() {
  return (
    <html>
      <body>
        <div>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </div>
      </body>
    </html>
  );
}