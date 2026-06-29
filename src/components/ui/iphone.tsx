import { cn } from "@/lib/utils";

/**
 * Clean iPhone-style mockup frame (thin bezel + dynamic island).
 * Renders a Cardápio Tec app screen inside by default.
 */
export function Iphone({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[260px] shrink-0 rounded-[2.9rem] bg-zinc-900 p-[7px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {/* side buttons */}
      <div className="absolute -left-[2px] top-[18%] h-9 w-[2px] rounded-l bg-zinc-700" />
      <div className="absolute -left-[2px] top-[28%] h-9 w-[2px] rounded-l bg-zinc-700" />
      <div className="absolute -right-[2px] top-[23%] h-14 w-[2px] rounded-r bg-zinc-700" />
      {/* screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-white">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-[10px] z-30 h-[18px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        {children ?? <MenuScreen />}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-semibold text-zinc-900">
      <span>20:14</span>
      <span className="flex items-center gap-1">
        <span className="text-[8px]">●●●</span>
        <span className="h-2 w-4 rounded-[2px] border border-zinc-900/70" />
      </span>
    </div>
  );
}

const items = [
  { emoji: "🍔", name: "X-Burger Especial", desc: "Blend 180g, cheddar, bacon", price: "R$ 32,00" },
  { emoji: "🍟", name: "Batata Rústica", desc: "Alecrim e parmesão", price: "R$ 22,00" },
  { emoji: "🥤", name: "Limonada Suíça", desc: "500ml, bem gelada", price: "R$ 12,00" },
  { emoji: "🍰", name: "Petit Gâteau", desc: "Com sorvete de creme", price: "R$ 18,00" },
];

const cats = ["Burgers", "Porções", "Bebidas", "Doces"];

/** Cardápio Tec app screens. `variant` selects which screen to show. */
export function MenuScreen({ variant = 0 }: { variant?: number }) {
  const screen = variant % 5;

  return (
    <div className="absolute inset-0 flex flex-col bg-zinc-50">
      <StatusBar />

      {screen === 0 && <MenuList />}
      {screen === 1 && <CartScreen />}
      {screen === 2 && <OrderStatus />}
      {screen === 3 && <KitchenScreen />}
      {screen === 4 && <ConfirmScreen />}
    </div>
  );
}

function MenuList() {
  return (
    <>
      <div className="px-4 pt-4">
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-accent">
          Mesa 3
        </span>
        <p className="mt-1.5 text-base font-bold tracking-tight text-zinc-900">
          Cantina do Bairro
        </p>
      </div>
      <div className="mt-3 flex gap-1.5 overflow-hidden px-4">
        {cats.map((c, i) => (
          <span
            key={c}
            className={cn(
              "rounded-full px-2.5 py-1 text-[8px] font-semibold",
              i === 0 ? "bg-accent text-white" : "bg-white text-zinc-500 ring-1 ring-zinc-200",
            )}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-2 px-4">
        {items.map((it) => (
          <div
            key={it.name}
            className="flex items-center gap-2.5 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-zinc-100"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-base">
              {it.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold text-zinc-900">{it.name}</p>
              <p className="truncate text-[8px] text-zinc-400">{it.desc}</p>
              <p className="mt-0.5 text-[9px] font-bold text-zinc-900">{it.price}</p>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent text-[12px] font-bold leading-none text-white">
              +
            </span>
          </div>
        ))}
      </div>
      <div className="m-3 flex items-center justify-between rounded-2xl bg-accent px-3.5 py-2.5 text-white">
        <span className="text-[9px] font-semibold">🛒 3 itens</span>
        <span className="text-[10px] font-bold">R$ 66,00</span>
        <span className="text-[9px] font-semibold">Ver pedido →</span>
      </div>
    </>
  );
}

function CartScreen() {
  const lines = [
    { name: "X-Burger Especial", qty: 1, price: "R$ 32,00" },
    { name: "Batata Rústica", qty: 1, price: "R$ 22,00" },
    { name: "Limonada Suíça", qty: 1, price: "R$ 12,00" },
  ];
  return (
    <>
      <div className="px-4 pt-4">
        <p className="text-base font-bold tracking-tight text-zinc-900">Seu pedido</p>
        <p className="text-[9px] text-zinc-400">Mesa 3 · Cantina do Bairro</p>
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-2 px-4">
        {lines.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-2 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-zinc-100"
          >
            <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-zinc-400">−</span>
              <span className="text-[9px] font-bold text-zinc-900">{l.qty}</span>
              <span className="text-[10px] font-bold text-accent">+</span>
            </div>
            <p className="flex-1 truncate text-[10px] font-semibold text-zinc-900">{l.name}</p>
            <p className="text-[9px] font-bold text-zinc-900">{l.price}</p>
          </div>
        ))}
      </div>
      <div className="px-4">
        <div className="flex items-center justify-between border-t border-dashed border-zinc-200 pt-2.5">
          <span className="text-[10px] font-semibold text-zinc-500">Total</span>
          <span className="text-sm font-bold text-zinc-900">R$ 66,00</span>
        </div>
      </div>
      <div className="m-3 rounded-2xl bg-accent py-3 text-center text-[11px] font-bold text-white">
        Enviar pedido
      </div>
    </>
  );
}

function OrderStatus() {
  const steps = [
    { label: "Recebido", done: true },
    { label: "Preparando", active: true },
    { label: "Saindo", done: false },
    { label: "Entregue", done: false },
  ];
  return (
    <>
      <div className="px-4 pt-4">
        <p className="text-base font-bold tracking-tight text-zinc-900">Pedido #a3f9</p>
        <p className="text-[9px] text-zinc-400">Mesa 3 · há 4 min</p>
      </div>
      <div className="mt-5 flex flex-1 flex-col gap-4 px-5">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold",
                s.done
                  ? "bg-accent text-white"
                  : s.active
                    ? "bg-accent/15 text-accent ring-2 ring-accent"
                    : "bg-zinc-100 text-zinc-300",
              )}
            >
              {s.done ? "✓" : i + 1}
            </span>
            <div>
              <p
                className={cn(
                  "text-[11px] font-semibold",
                  s.done || s.active ? "text-zinc-900" : "text-zinc-300",
                )}
              >
                {s.label}
              </p>
              {s.active && (
                <p className="text-[8px] font-medium text-accent">em andamento…</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="m-3 rounded-2xl bg-zinc-100 py-2 text-center text-[8px] font-semibold text-zinc-500">
        🔄 Atualizado em tempo real
      </div>
    </>
  );
}

function KitchenScreen() {
  const tickets = [
    { mesa: "Mesa 3", time: "02:14", items: ["1× X-Burger", "1× Batata"], late: false },
    { mesa: "Mesa 7", time: "11:42", items: ["2× Pizza Marguerita"], late: true },
  ];
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-4">
        <p className="text-base font-bold tracking-tight text-zinc-900">Cozinha</p>
        <span className="rounded-full bg-accent px-2 py-0.5 text-[8px] font-bold text-white">
          4 ativos
        </span>
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-2 px-4">
        {tickets.map((t) => (
          <div
            key={t.mesa}
            className={cn(
              "rounded-2xl bg-white p-2.5 shadow-sm ring-1",
              t.late ? "ring-accent/40" : "ring-zinc-100",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-zinc-900">{t.mesa}</span>
              <span
                className={cn(
                  "text-[9px] font-bold tabular-nums",
                  t.late ? "text-accent" : "text-zinc-400",
                )}
              >
                {t.time}
              </span>
            </div>
            <div className="mt-1 flex flex-col gap-0.5">
              {t.items.map((it) => (
                <span key={it} className="text-[8px] text-zinc-500">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="m-3 rounded-2xl bg-accent py-2.5 text-center text-[10px] font-bold text-white">
        Avançar pedido
      </div>
    </>
  );
}

function ConfirmScreen() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl text-white">
        ✓
      </span>
      <p className="mt-4 text-sm font-bold text-zinc-900">Pedido enviado!</p>
      <p className="mt-1 text-[10px] leading-relaxed text-zinc-400">
        A cozinha já recebeu o seu pedido. Acompanhe o preparo em tempo real.
      </p>
      <div className="mt-5 w-full rounded-2xl bg-zinc-100 py-2 text-[9px] font-semibold text-zinc-500">
        Pedido #a3f9 · Mesa 3
      </div>
    </div>
  );
}
