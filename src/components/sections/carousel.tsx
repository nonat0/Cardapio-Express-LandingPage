"use client";

import { motion } from "framer-motion";
import { Iphone, MenuScreen } from "@/components/ui/iphone";
import { SectionHeading } from "@/components/ui/section-heading";

// "O que você resolve" — three device mockups on a light panel with captions.
const outcomes = [
  {
    screen: 0,
    title: "Gire mais mesas",
    desc: "Pedidos rápidos pela mesa aceleram o atendimento e aumentam o giro no salão.",
  },
  {
    screen: 2,
    title: "Menos erros de comanda",
    desc: "O pedido vai do cliente direto pra cozinha, sem ruído nem retrabalho.",
  },
  {
    screen: 3,
    title: "Faturamento na palma da mão",
    desc: "Acompanhe vendas, ticket médio e itens mais pedidos em tempo real.",
  },
];

export function Carousel() {
  return (
    <section className="py-24">
      <SectionHeading
        eyebrow="Resultados"
        title="O que você resolve com o Cardápio Tec"
      />

      <div className="mx-auto mt-12 max-w-6xl px-4">
        <div className="rounded-[2rem] bg-muted/60 px-6 py-14 sm:px-12 sm:py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <Iphone className="w-[190px] sm:w-[210px]">
                  <MenuScreen variant={o.screen} />
                </Iphone>
                <h3 className="mt-7 text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {o.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
