import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-[#f8f8f8]">
      {/* Area Konten Utama */}
      <main className="flex flex-1 items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-6xl">
          {/* Children di sini adalah konten dari page.tsx 
            seperti form login atau register 
          */}
          {children}
        </div>
      </main>

      {/* Footer Khusus Auth */}
      <footer className="py-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm hidden md:block">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500">
            © 2026 Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}