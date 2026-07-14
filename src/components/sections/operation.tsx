"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Iphone } from "@/components/ui/iphone";
import {
  KdsScreen,
  CallsScreen,
  OrdersScreen,
  MenuAdminScreen,
  QrScreen,
} from "@/components/ui/operation-screens";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const blocks = [
  {
    screens: [KdsScreen],
    title: "A cozinha no comando",
    desc: "Cada pedido entra na fila da cozinha na hora, com timer e status. Passou de 10 minutos? O ticket acende e um alerta sonoro toca — e um toque no botão avança o pedido, sem dropdown, sem mouse.",
  },
  {
    screens: [CallsScreen, OrdersScreen],
    title: "O salão inteiro na palma da mão",
    desc: "Chamados chegam com o motivo — conta, bebida, ajuda — e o garçom vai à mesa já sabendo o que levar. Do outro lado, o gerente acompanha os pedidos ativos, o status e o valor de cada mesa, com o resumo do dia sempre à vista.",
  },
  {
    screens: [MenuAdminScreen, QrScreen],
    title: "Cardápio e mesas na sua mão",
    desc: "Item esgotou? Pausa com um toque e ele some do cardápio dos clientes na mesma hora. Crie categorias, ajuste preços e imprima o QR Code de cada mesa — sem depender de ninguém de TI.",
  },
];

/** A visão de quem opera: KDS, chamados, pedidos e admin do cardápio. */
export function Operation() {
  return (
    <section id="operacao" className="overflow-hidden py-24">
      <SectionHeading
        eyebrow="Dentro do restaurante"
        title="Do outro lado do QR Code"
        subtitle="As telas que a sua equipe usa na cozinha, no salão e na gestão — direto no celular de cada um, sem instalar nada."
      />

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-20 px-4 sm:gap-28">
        {blocks.map((b, i) => {
          const flip = i % 2 === 1;
          const fromLeft = i % 2 === 0;
          const pair = b.screens.length > 1;
          return (
            <div
              key={b.title}
              className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12"
            >
              <motion.div
                initial={{ opacity: 0, x: fromLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={cn(
                  "flex items-start justify-center",
                  pair ? "gap-3 sm:gap-4" : "",
                  flip && "sm:order-2",
                )}
              >
                {b.screens.map((Screen, j) => (
                  <Iphone
                    key={j}
                    islandClassName="h-[13.5px] w-[58.5px]"
                    className={cn(
                      pair ? "w-[150px] sm:w-[180px]" : "w-[210px] sm:w-[240px]",
                      pair && j === 1 && "mt-10",
                    )}
                  >
                    <Screen />
                  </Iphone>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className={cn(flip && "sm:order-1")}
              >
                <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {b.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
                <a
                  href="#precos"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                >
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
