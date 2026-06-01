"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "/mês",
    tagline: "Para começar e testar com o seu restaurante.",
    features: [
      "Cardápio digital com QR Code",
      "Até 30 pedidos por mês",
      "Pedidos em tempo real",
      "Painel da cozinha básico",
    ],
    cta: "Criar grátis",
    featured: false,
  },
  {
    name: "Pro",
    price: "R$ 49",
    period: "/mês",
    tagline: "Para vender mais e organizar toda a operação.",
    features: [
      "Pedidos ilimitados",
      "Painel da cozinha completo (KDS)",
      "Pagamento via PIX",
      "Relatórios e ticket médio",
      "Chamar o garçom",
      "Suporte prioritário",
    ],
    cta: "Assinar o Pro",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="precos" className="bg-muted/40 py-24">
      <SectionHeading
        eyebrow="Preços"
        title="Preços simples"
        subtitle="Comece de graça e evolua quando precisar. Sem taxa por pedido, cancele quando quiser."
      />

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "relative flex flex-col rounded-3xl border p-8",
              tier.featured
                ? "border-accent bg-primary text-white shadow-xl"
                : "border-border bg-white",
            )}
          >
            {tier.featured && (
              <span className="absolute right-8 top-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                Mais popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p
              className={cn(
                "mt-1 text-sm",
                tier.featured ? "text-white/70" : "text-muted-foreground",
              )}
            >
              {tier.tagline}
            </p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">
                {tier.price}
              </span>
              <span
                className={cn(
                  "text-sm",
                  tier.featured ? "text-white/70" : "text-muted-foreground",
                )}
              >
                {tier.period}
              </span>
            </div>

            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span
                    className={
                      tier.featured ? "text-white/90" : "text-foreground"
                    }
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={cn(
                "mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90",
                tier.featured
                  ? "bg-accent text-white"
                  : "bg-primary text-white",
              )}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
