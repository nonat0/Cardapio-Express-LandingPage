"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Iphone, MenuScreen } from "@/components/ui/iphone";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const features = [
  {
    screen: 0,
    title: "Pedidos pela mesa",
    desc: "O cliente escaneia o QR Code da mesa, monta o pedido e confirma. Sem app pra instalar, sem fila, sem espera pelo garçom.",
  },
  {
    screen: 3,
    title: "Cozinha em tempo real",
    desc: "Cada pedido cai no painel da cozinha no instante em que é confirmado, organizado por status e tempo de preparo.",
  },
  {
    screen: 2,
    title: "Acompanhamento ao vivo",
    desc: "O cliente vê o preparo avançar em tempo real — de “recebido” a “saindo” — e sabe exatamente quando o prato chega.",
  },
];

export function AlternatingFeatures() {
  return (
    <section id="recursos" className="py-24">
      <SectionHeading eyebrow="Recursos" title="Recursos poderosos" />

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-20 px-4 sm:gap-28">
        {features.map((f, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12"
            >
              <div className={cn("flex justify-center", flip && "sm:order-2")}>
                <Iphone className="w-[210px] sm:w-[240px]">
                  <MenuScreen variant={f.screen} />
                </Iphone>
              </div>
              <div className={cn(flip && "sm:order-1")}>
                <h3 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
                <a
                  href="#precos"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                >
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
