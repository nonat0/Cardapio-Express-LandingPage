"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Iphone, MenuScreen } from "@/components/ui/iphone";

// Hero phones: all share the center mockup's size (+30%). At rest they sit in a
// staggered arc (center highest, outer phones lower); on scroll the arc flattens
// so they align into a clean horizontal row.
const PHONE_W = "w-[203px] sm:w-[296px]";
const phones = [
  { z: 10, screen: 3, rest: 100 },
  { z: 20, screen: 1, rest: 44 },
  { z: 30, screen: 0, rest: 0 },
  { z: 20, screen: 2, rest: 44 },
  { z: 10, screen: 4, rest: 100 },
];

export function Hero() {
  const rowRef = useRef<HTMLDivElement>(null);
  // Drive the flatten by the phone row's own position: the arc is full when the
  // row's center sits at the bottom of the viewport, and fully flat (aligned)
  // once the row's center reaches the center of the screen.
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["center end", "center center"],
  });
  // On scroll the staggered arc flattens: each phone eases from its rest offset to 0.
  const y0 = useTransform(scrollYProgress, [0, 1], [phones[0].rest, 0]);
  const y1 = useTransform(scrollYProgress, [0, 1], [phones[1].rest, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [phones[2].rest, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [phones[3].rest, 0]);
  const y4 = useTransform(scrollYProgress, [0, 1], [phones[4].rest, 0]);
  const ys = [y0, y1, y2, y3, y4];

  return (
    <section className="relative overflow-hidden pt-64 pb-28">
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
          Conheça o Cardápio Tec →
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

      {/* Phone mockups: staggered arc at rest, flatten to a horizontal row on scroll */}
      <div
        ref={rowRef}
        className="mx-auto mt-[213px] flex items-center justify-center gap-8 px-4 sm:gap-12"
      >
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
            className={`shrink-0 ${PHONE_W}`}
          >
            <motion.div style={{ y: ys[i] }}>
              <Iphone className="w-full">
                <MenuScreen variant={p.screen} />
              </Iphone>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
