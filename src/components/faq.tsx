"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@mind-studio/ui";

export type QA = { q: string; a: React.ReactNode };

export function Faq({ items }: { items: QA[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left text-base font-medium">{item.q}</AccordionTrigger>
          <AccordionContent className="pt-2 text-base text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
