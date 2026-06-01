"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Iphone, MenuScreen } from "@/components/ui/iphone";

// Hero phones: an upright row with a center-out size gradient (the original's
// gentle arc), each showing a different Cardápio Express screen. No rotation.
const phones = [
  { w: "w-[118px] sm:w-[170px]", z: 10, screen: 3 },
  { w: "w-[138px] sm:w-[196px]", z: 20, screen: 1 },
  { w: "w-[156px] sm:w-[228px]", z: 30, screen: 0 },
  { w: "w-[138px] sm:w-[196px]", z: 20, screen: 2 },
  { w: "w-[118px] sm:w-[170px]", z: 10, screen: 4 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-0">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(232,70,54,0.10),transparent)]" />

      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.a
          href="#recursos"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm font-medium text-muted-foreground"
        >
          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-white">
            Novo
          </span>
          Conheça o Cardápio Express →
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Cardápio digital com pedidos em tempo real.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground"
        >
          Seus clientes pedem pela mesa via QR Code e a cozinha recebe na hora.
          Menos espera, mais giro de mesa — sem instalar nenhum app.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#precos"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Criar cardápio grátis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#demo"
            className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Ver demonstração
          </a>
        </motion.div>
      </div>

      {/* Phone mockups: upright row, center largest (gentle arc) */}
      <div className="mx-auto mt-16 flex max-w-5xl items-center justify-center gap-2 px-4 sm:gap-3">
        {phones.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ zIndex: p.z }}
            className={`shrink-0 ${p.w}`}
          >
            <Iphone className="w-full">
              <MenuScreen variant={p.screen} />
            </Iphone>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
