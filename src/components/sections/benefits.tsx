"use client";

import { motion } from "framer-motion";
import { Zap, Bell, Receipt, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: Zap,
    title: "Pedidos em tempo real",
    desc: "A cozinha vê cada pedido no instante em que o cliente confirma — sem recarregar a tela, sem atraso.",
    className: "lg:col-span-2",
  },
  {
    icon: Bell,
    title: "Chamar o garçom",
    desc: "Conta, bebida ou ajuda em um toque, sem levantar a mão.",
    className: "",
  },
  {
    icon: Receipt,
    title: "Vários pedidos por mesa",
    desc: "Cada rodada vira uma comanda própria, com status individual.",
    className: "",
  },
  {
    icon: TrendingUp,
    title: "Relatórios do dia",
    desc: "Faturamento, ticket médio e itens mais vendidos, sempre atualizados em tempo real.",
    className: "lg:col-span-2",
  },
];

export function Benefits() {
  return (
    <section className="bg-muted/40 py-24">
      <SectionHeading
        eyebrow="Benefícios"
        title="Ele faz muita coisa"
        subtitle="Um sistema só pra pedir, preparar e cobrar — feito para a correria do salão e da cozinha."
      />

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 px-4 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border bg-white p-7",
              it.className,
            )}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {it.desc}
            </p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/5" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
