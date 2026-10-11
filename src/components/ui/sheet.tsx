"use client";

import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

function Sheet(props: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...props} />;
}

function SheetTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Trigger>) {
  return (
    <Dialog.Trigger
      data-slot="sheet-trigger"
      className={cn("cursor-pointer", className)}
      {...props}
    />
  );
}

function SheetPortal(props: React.ComponentProps<typeof Dialog.Portal>) {
  return <Dialog.Portal {...props} />;
}

function SheetBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Backdrop>) {
  return (
    <Dialog.Backdrop
      data-slot="sheet-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Popup>) {
  return (
    <SheetPortal>
      <SheetBackdrop />
      <Dialog.Popup
        data-slot="sheet-content"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-sm flex-col bg-background shadow-2xl outline-none transition-[translate,opacity] duration-300 ease-out data-ending-style:translate-x-full data-ending-style:opacity-0 data-starting-style:translate-x-full data-starting-style:opacity-0",
          className
        )}
        {...props}
      >
        {children}
      </Dialog.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex min-h-16 items-center justify-between gap-4 px-4 border-b border-white/80 bg-background/85 backdrop-blur-lg shadow-[0_8px_30px_rgba(15,23,42,0.08)] supports-backdrop-filter:bg-white/80",
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      data-slot="sheet-title"
      className={cn("text-base font-medium", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function SheetClose({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Close>) {
  return (
    <Dialog.Close
      data-slot="sheet-close"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none border border-border h-8 w-8",
        className
      )}
      {...props}
    >
      {children ?? <X className="size-4" />}
    </Dialog.Close>
  );
}

export {
  Sheet,
  SheetBackdrop,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
