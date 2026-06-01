"use client";

import { motion } from "framer-motion";
import { Iphone, MenuScreen } from "@/components/ui/iphone";
import { SectionHeading } from "@/components/ui/section-heading";

/** "Uma experiência diferente de tudo" — three centered device mockups. */
export function Showcase() {
  return (
    <section className="bg-muted/40 py-24">
      <SectionHeading
        eyebrow="Experiência"
        title="Uma experiência diferente de tudo"
        subtitle="Abre direto no navegador do celular, carrega em segundos e funciona em qualquer aparelho. Nada de baixar app pra fazer um pedido."
      />

      <div className="mx-auto mt-14 flex max-w-4xl items-center justify-center gap-4 px-4">
        {[0, 1, 2].map((screen, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={i === 1 ? "-mt-8 hidden sm:block" : ""}
          >
            <Iphone className="w-[180px] sm:w-[220px]">
              <MenuScreen variant={screen} />
            </Iphone>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
