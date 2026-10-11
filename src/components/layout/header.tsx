"use client";

import Image from "next/image";
import Link from "next/link";
import DesktopNavigation from "@/components/layout/desktop-navigation";
import MobileNavigation from "@/components/layout/mobile-navigation";
import { Button } from "@/components/ui/button";
import { cta } from "@/content/navigation";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/90 bg-background/85 backdrop-blur-lg shadow-[0_8px_30px_rgba(15,23,42,0.08)] supports-backdrop-filter:bg-white/80">
      <div className="container mx-auto px-4 lg:px-0 flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/logo.svg" alt="Logo" width={90} height={40} priority />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <DesktopNavigation />
        </div>

        {cta.url ? (
          <Link href={cta.url} className="hidden shrink-0 items-center lg:flex">
            <Button size="lg" variant="default">{cta.title}</Button>
          </Link>
        ) : null}

        <div className="flex lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
