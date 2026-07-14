"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Não. O cardápio abre direto no navegador do celular quando o cliente escaneia o QR Code da mesa — funciona em qualquer smartphone, sem download.",
  },
  {
    q: "Como o cliente faz o pedido?",
    a: "Ele escaneia o QR da mesa, monta o pedido no cardápio e confirma. A cozinha recebe na hora, sem garçom anotando no papel.",
  },
  {
    q: "A cozinha precisa de equipamento especial?",
    a: "Não. O painel da cozinha (KDS) abre em qualquer tablet, celular ou computador com navegador. Os pedidos chegam organizados por status e tempo.",
  },
  {
    q: "Funciona sem internet?",
    a: "O cardápio fica salvo em cache (PWA) e abre mesmo com conexão instável. Os pedidos sincronizam automaticamente assim que a conexão volta.",
  },
  {
    q: "Consigo editar o cardápio sozinho?",
    a: "Sim. Pelo painel do gerente você adiciona itens, ajusta preços e troca fotos em segundos, sem depender de ninguém.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O cliente pode pagar via PIX direto pelo celular, fechando a conta sem fila no caixa — ideal para o horário de pico.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium">{q}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Perguntas frequentes"
        subtitle="Tudo o que você precisa saber sobre o Cardápio Nota 10. Não achou a resposta? Fale com a gente."
      />
      <div className="mx-auto mt-12 max-w-2xl px-4">
        {faqs.map((f) => (
          <Item key={f.q} {...f} />
        ))}
      </div>
    </section>
  );
}
