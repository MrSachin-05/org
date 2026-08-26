import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Aristocraft",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
        {/* Header */}

        <main className="relative min-h-screen container mx-auto pt-40 md:pt-32 ">
          {/* glow */}

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

 {/* Purple — upper left */}
<div className="absolute -top-20 left-[10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-soft-glow" />

{/* Cyan — upper right */}
<div className="absolute -top-20 right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-soft-glow" />

{/* Blue — center below the gap */}
<div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-soft-glow" />

</div>

<div className="relative z-10 min-h-[70vh]">{children}</div>
        {/* Footer */}
        <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto">
  <div className="text-sm text-gray-400">
    Made with ❤️ by Mr. Sachin-05
  </div>
</footer>
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
