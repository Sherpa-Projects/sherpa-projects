"use client";

import Link from "next/link";
import { footer } from "@/content/footer";
import SectionWrapper from "@/components/layout/section-wrapper";

const { title, footerItems } = footer;

export default function Footer() {
  return (
    <section className="bg-primary/5 text-black/75">
      <SectionWrapper>
        <div className="container mx-auto">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {footerItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="relative space-y-1 px-0 md:px-8 first:md:pl-0 last:md:pr-0 md:not-first:border-l md:not-first:border-primary/20"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/50 text-primary">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="font-bold">{item.title}</h3>

                  <ul className="space-y-1">
                    {item.itemList.map((listItem, i) => {
                      if (typeof listItem === "string") {
                        return <li key={`${listItem}-${i}`}>{listItem}</li>;
                      }

                      return (
                        <li key={`${listItem.title}-${i}`}>
                          {listItem.href ? (
                            <Link
                              className="hover:underline"
                              href={listItem.href}
                            >
                              {listItem.title}
                            </Link>
                          ) : (
                            <span>{listItem.title}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
