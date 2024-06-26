import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SearchCommand } from "@/components/search-command";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlexiNote",
  description: "A versatile productivity application combining note-taking, task management, and database functionalities.",
  icons:
  {
    icon: [
      {
        media:"(prefers-color-scheme: light)",
        url: "/logo.svg",
        href:"/logo.svg",

  },
  {
    media:"(prefers-color-scheme: dark)",
    url: "/logo-dark.svg",
    href:"/logo-dark.svg",

}
]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="flexinote-theme-2" >
          <Toaster position="bottom-center"></Toaster>
       <ModalProvider/>
       <SearchCommand/>
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}
