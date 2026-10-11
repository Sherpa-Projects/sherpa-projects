"use client";

import * as React from "react";
import Link from "next/link";
import { isNavigationItemDisabled, navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const disabledClass = "pointer-events-none cursor-default opacity-40";

export default function DesktopNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4 xl:gap-6">
        {navigation.map((item) => {
          if (isNavigationItemDisabled(item)) {
            return (
              <NavigationMenuItem key={item.title}>
                <span
                  aria-disabled="true"
                  className={cn(navigationMenuTriggerStyle(), disabledClass)}
                >
                  {item.title}
                </span>
              </NavigationMenuItem>
            );
          }

          if (item.subItems) {
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96 p-2 [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-border [&>li:not(:last-child)]:pb-1 [&>li:not(:first-child)]:pt-1">
                    {item.subItems.map((subItem) => {
                      if (!subItem.url) {
                        return null;
                      }

                      const description = subItem.description?.trim();

                      if (subItem.disabled) {
                        return (
                          <li
                            key={subItem.title}
                            className={cn("px-2.5 py-2 text-sm font-medium", disabledClass)}
                          >
                            {subItem.title}
                          </li>
                        );
                      }

                      return (
                        <ListItem
                          key={subItem.title}
                          href={subItem.url}
                          title={subItem.title}
                        >
                          {description || null}
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (!item.url) {
            return null;
          }

          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href={item.url}>{item.title}</Link>}
              />
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              {children ? (
                <div className="line-clamp-2 text-muted-foreground">
                  {children}
                </div>
              ) : null}
            </div>
          </Link>
        }
      />
    </li>
  );
}
