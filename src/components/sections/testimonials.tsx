"use client";

import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Review = { name: string; role: string; body: string };

const reviews: Review[] = [
  { name: "Marina Alves", role: "Dona de restaurante", body: "O salão gira muito mais rápido. Os clientes pedem sozinhos e a cozinha já está preparando." },
  { name: "Rafael Souza", role: "Dono de hamburgueria", body: "Acabaram os erros de comanda. O pedido chega na cozinha exatamente como o cliente montou." },
  { name: "Camila Ribeiro", role: "Gerente de salão", body: "Nos fins de semana cheios foi o que salvou o atendimento. Ninguém mais espera pra pedir." },
  { name: "Diego Fernandes", role: "Chef", body: "Vejo cada pedido na hora, com o tempo de preparo. Minha cozinha nunca foi tão organizada." },
  { name: "Patrícia Gomes", role: "Dona de cafeteria", body: "Montei o cardápio digital numa tarde. No dia seguinte já recebia pedidos pela mesa." },
  { name: "Lucas Martins", role: "Dono de pizzaria", body: "O QR na mesa reduziu a fila no balcão. A equipe foca em entregar, não em anotar." },
  { name: "Aline Costa", role: "Gerente", body: "Os relatórios do dia mostram na hora o que mais vende. Ajustei o cardápio e o ticket subiu." },
  { name: "Bruno Carvalho", role: "Dono de bar", body: "Chamar o garçom virou um toque. Menos correria e clientes bem mais satisfeitos." },
  { name: "Fernanda Lima", role: "Dona de restaurante", body: "Sem app pra instalar foi o que convenceu. O cliente abre, pede e pronto." },
  { name: "Thiago Rocha", role: "Gerente de operações", body: "Vários pedidos por mesa com status separado acabou com a confusão das rodadas." },
  { name: "Juliana Pires", role: "Proprietária", body: "A cozinha e o salão finalmente falam a mesma língua. Tudo acontece em tempo real." },
  { name: "Gustavo Nunes", role: "Dono de food truck", body: "Funciona até com internet ruim. O cardápio abre na hora e o pedido sincroniza sozinho." },
  { name: "Renata Dias", role: "Gerente", body: "O pagamento via PIX pela mesa tirou a fila do caixa no horário de pico." },
  { name: "Eduardo Ramos", role: "Chef", body: "O alerta de pedido atrasado me deixa sempre à frente. Nada passa do tempo." },
  { name: "Beatriz Moraes", role: "Dona de cafeteria", body: "Atualizo preço e foto do item em segundos, sem depender de ninguém." },
  { name: "Felipe Andrade", role: "Dono de restaurante", body: "Mais mesas atendidas com a mesma equipe. O giro do salão aumentou de verdade." },
];

const colors = ["var(--accent)", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];

function Avatar({ name, i }: { name: string; i: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
      style={{ background: colors[i % colors.length] }}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review, i }: { review: Review; i: number }) {
  return (
    <figure className="w-72 rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <Avatar name={review.name} i={i} />
        <figcaption>
          <p className="text-sm font-semibold">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </figcaption>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
        “{review.body}”
      </blockquote>
    </figure>
  );
}

export function Testimonials() {
  const cols = [
    reviews.slice(0, 4),
    reviews.slice(4, 8),
    reviews.slice(8, 12),
    reviews.slice(12, 16),
  ];

  return (
    <section id="depoimentos" className="py-24">
      <SectionHeading
        eyebrow="Depoimentos"
        title="O que dizem os restaurantes"
        subtitle="Donos, gerentes e chefs que trocaram a comanda no papel pelo Cardápio Nota 10."
      />

      <div className="relative mt-12 flex h-[560px] items-center justify-center gap-4 overflow-hidden px-4">
        {cols.map((col, c) => (
          <Marquee
            key={c}
            vertical
            reverse={c % 2 === 1}
            pauseOnHover
            className={cn(
              "[--duration:32s]",
              c === 2 && "hidden lg:flex",
              c === 3 && "hidden xl:flex",
            )}
          >
            {col.map((review, i) => (
              <ReviewCard key={i} review={review} i={c * 4 + i} />
            ))}
          </Marquee>
        ))}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
      </div>
    </section>
  );
}
