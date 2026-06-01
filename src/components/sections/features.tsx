"use client";

import { motion } from "framer-motion";
import {
  QrCode,
  Zap,
  ChefHat,
  Bell,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: QrCode,
    title: "Cardápio por QR Code",
    desc: "Cada mesa tem o seu QR. O cliente abre o cardápio no navegador, sem instalar nada.",
  },
  {
    icon: Zap,
    title: "Pedidos em tempo real",
    desc: "Do celular do cliente direto pra cozinha, no mesmo instante em que ele confirma.",
  },
  {
    icon: ChefHat,
    title: "Painel da cozinha (KDS)",
    desc: "Kanban por status, timer por pedido e alerta visual quando algo passa do tempo.",
  },
  {
    icon: Bell,
    title: "Chamar o garçom",
    desc: "Conta, bebida, utensílio ou dúvida — tipado e em um toque, sem levantar a mão.",
  },
  {
    icon: Wallet,
    title: "Pagamento via PIX",
    desc: "O cliente fecha a conta pela mesa e você tira a fila do caixa no horário de pico.",
  },
  {
    icon: TrendingUp,
    title: "Relatórios de venda",
    desc: "Faturamento do dia, ticket médio e ranking dos itens mais pedidos.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <SectionHeading
        eyebrow="Recursos"
        title="Recursos poderosos"
        subtitle="Tudo o que o seu restaurante precisa para atender pela mesa — sem papel, sem ruído e sem app."
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.desc}
            </p>
            <a
              href="#precos"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100"
            >
              Saiba mais →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
