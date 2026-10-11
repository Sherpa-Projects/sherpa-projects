"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  cta,
  isNavigationItemDisabled,
  navigation,
} from "@/content/navigation";
import { cn } from "@/lib/utils";

const disabledClass = "pointer-events-none cursor-default opacity-40";

export default function MobileNavigation() {
  const [open, setOpen] = React.useState(false);

  function closeNavigation() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Navigation öffnen"
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      >
        <MenuIcon className="size-4" />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-semibold text-primary">
            {cta.url ? (
              <Link href={cta.url} className="flex shrink-0 items-center">
                <Button size="lg" variant="default">
                  {cta.title}
                </Button>
              </Link>
            ) : null}
          </SheetTitle>
          <SheetClose aria-label="Navigation schließen" />
        </SheetHeader>

        <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-3">
          <Accordion
            className="p-2 [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-border [&>li:not(:last-child)]:pb-1 [&>li:not(:first-child)]:pt-1"
            multiple
          >
            {navigation.map((item) => {
              if (isNavigationItemDisabled(item)) {
                return (
                  <span
                    key={item.title}
                    aria-disabled="true"
                    className={cn(
                      "block w-full border-b border-border py-4 text-base font-medium",
                      disabledClass,
                    )}
                  >
                    {item.title}
                  </span>
                );
              }

              if (item.subItems?.length) {
                return (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        {item.subItems.map((subItem) => {
                          if (!subItem.url) {
                            return null;
                          }

                          const description = subItem.description?.trim();

                          if (subItem.disabled) {
                            return (
                              <li
                                key={subItem.title}
                                className={cn(
                                  "px-3 py-3 text-sm font-medium",
                                  disabledClass,
                                )}
                              >
                                {subItem.title}
                              </li>
                            );
                          }

                          return (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.url}
                                onClick={closeNavigation}
                                className="block rounded-lg px-3 py-3 transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                              >
                                <span className="block text-sm font-medium">
                                  {subItem.title}
                                </span>
                                {description ? (
                                  <span className="mt-1 line-clamp-2 block text-sm text-muted-foreground">
                                    {description}
                                  </span>
                                ) : null}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              if (!item.url) {
                return null;
              }

              return (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={closeNavigation}
                  className="py-4 text-base font-medium transition-colors hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none border-b border-border w-full block"
                >
                  {item.title}
                </Link>
              );
            })}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
