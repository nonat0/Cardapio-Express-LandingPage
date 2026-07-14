import { cn } from "@/lib/utils";
import { StatusBar } from "@/components/ui/iphone";

/**
 * Telas de operação do Cardápio Nota 10 em formato de celular — o lado
 * que a equipe do restaurante vê: KDS da cozinha, chamados do salão,
 * pedidos ativos, admin do cardápio e QR codes das mesas.
 * Renderizadas dentro do frame `Iphone`.
 */

/* ───────────────────────── Cozinha (KDS) ───────────────────────── */

const kdsTickets = [
  {
    mesa: "Mesa 2",
    status: "Recebido",
    time: "00:41",
    items: ["1× Limonada Suíça", "1× Batata Rústica"],
    action: "Preparar →",
    late: false,
  },
  {
    mesa: "Mesa 3",
    status: "Preparando",
    time: "04:12",
    items: ["1× X-Burger Especial", "1× Batata Rústica"],
    action: "Pronto →",
    late: false,
  },
  {
    mesa: "Mesa 7",
    status: "Preparando",
    time: "11:42",
    items: ["2× Pizza Marguerita"],
    action: "Pronto →",
    late: true,
  },
];

/** `/kitchen` — fila da cozinha com timer, atraso e botão de avanço. */
export function KdsScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-zinc-50">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-3">
        <p className="text-base font-bold tracking-tight text-zinc-900">
          Cozinha — KDS
        </p>
        <span className="rounded-full bg-accent px-2 py-0.5 text-[8px] font-bold text-white">
          4 ativos
        </span>
      </div>
      <div className="mt-1 px-4">
        <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-semibold text-zinc-500 ring-1 ring-zinc-200">
          🔊 Som ligado
        </span>
      </div>

      <div className="mt-2.5 flex flex-1 flex-col gap-2 px-4">
        {kdsTickets.map((t) => (
          <div
            key={t.mesa}
            className={cn(
              "rounded-2xl bg-white p-2 shadow-sm ring-1",
              t.late ? "ring-accent/50" : "ring-zinc-100",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-zinc-900">{t.mesa}</span>
              <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 text-[6px] font-bold text-zinc-500">
                {t.status}
              </span>
              <span
                className={cn(
                  "text-[9px] font-bold tabular-nums",
                  t.late ? "text-accent" : "text-zinc-400",
                )}
              >
                {t.time}
              </span>
            </div>
            {t.late && (
              <p className="mt-0.5 text-[7px] font-bold text-accent">
                ⚠ há mais de 10 min
              </p>
            )}
            <div className="mt-0.5 flex flex-col gap-px">
              {t.items.map((it) => (
                <span key={it} className="text-[8px] text-zinc-500">
                  {it}
                </span>
              ))}
            </div>
            <div className="mt-1.5 rounded-lg bg-accent py-1 text-center text-[8px] font-bold text-white">
              {t.action}
            </div>
          </div>
        ))}
      </div>

      <div className="m-3 flex items-center gap-1.5 rounded-2xl bg-white px-2.5 py-2 ring-1 ring-zinc-100">
        <span className="text-[10px]">🙋</span>
        <span className="text-[8px] font-semibold text-zinc-700">
          Mesa 5 — 💳 pedir a conta
        </span>
        <span className="ml-auto text-[8px] font-bold text-accent">agora</span>
      </div>
    </div>
  );
}

/* ─────────────────────── Chamados do salão ─────────────────────── */

const calls = [
  { mesa: "Mesa 5", tipo: "💳 Pedir a conta", when: "agora" },
  { mesa: "Mesa 2", tipo: "🥤 Mais bebida", when: "há 1 min" },
  { mesa: "Mesa 8", tipo: "❓ Dúvida no cardápio", when: "há 3 min" },
];

/** `/admin` — chamados tipados por mesa, com um toque em "Atendido". */
export function CallsScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-zinc-50">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-3">
        <p className="text-base font-bold tracking-tight text-zinc-900">Chamados</p>
        <span className="flex items-center gap-1 text-[7px] font-semibold text-emerald-600">
          <span className="h-1 w-1 rounded-full bg-emerald-500" /> ao vivo
        </span>
      </div>

      <div className="mt-2.5 flex flex-1 flex-col gap-2 px-4">
        {calls.map((c) => (
          <div
            key={c.mesa}
            className="rounded-2xl border-l-2 border-accent bg-accent/10 px-2.5 py-2"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold text-zinc-900">{c.mesa}</p>
              <span className="text-[7px] font-semibold text-zinc-400">
                {c.when}
              </span>
            </div>
            <p className="mt-0.5 text-[8px] text-zinc-600">{c.tipo}</p>
            <span className="mt-1.5 inline-block rounded-lg bg-white px-2 py-0.5 text-[7px] font-bold text-accent ring-1 ring-accent/30">
              Atendido ✓
            </span>
          </div>
        ))}
      </div>

      <div className="m-3 rounded-2xl bg-zinc-100 py-2 text-center text-[7px] font-semibold text-zinc-500">
        O garçom já sabe o que levar à mesa
      </div>
    </div>
  );
}

/* ────────────────── Pedidos ativos + resumo do dia ─────────────── */

const activeOrders = [
  { mesa: "Mesa 3", status: "Preparando", total: "R$ 66,00" },
  { mesa: "Mesa 7", status: "Recebido", total: "R$ 84,00" },
  { mesa: "Mesa 5", status: "Saindo", total: "R$ 18,00" },
  { mesa: "Mesa 1", status: "Preparando", total: "R$ 45,00" },
  { mesa: "Mesa 8", status: "Recebido", total: "R$ 52,00" },
];

function StatusChip({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "rounded-full px-1.5 py-0.5 text-[6px] font-bold",
        status === "Recebido" && "bg-zinc-100 text-zinc-500",
        status === "Preparando" && "bg-accent/10 text-accent",
        status === "Saindo" && "bg-accent text-white",
      )}
    >
      {status}
    </span>
  );
}

/** `/admin` — pedidos ativos por mesa e o resumo do dia para o dono. */
export function OrdersScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-zinc-50">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-3">
        <p className="text-base font-bold tracking-tight text-zinc-900">Pedidos</p>
        <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-[8px] font-bold text-zinc-600">
          {activeOrders.length} ativos
        </span>
      </div>

      <div className="mt-2.5 flex flex-1 flex-col px-4">
        <div className="rounded-2xl bg-white p-1.5 ring-1 ring-zinc-100">
          {activeOrders.map((o) => (
            <div
              key={o.mesa}
              className="flex items-center justify-between gap-1 border-b border-zinc-50 py-[6px] last:border-0"
            >
              <span className="whitespace-nowrap text-[8px] font-bold text-zinc-900">
                {o.mesa}
              </span>
              <StatusChip status={o.status} />
              <span className="whitespace-nowrap text-[8px] font-bold tabular-nums text-zinc-900">
                {o.total}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="m-3 rounded-2xl bg-white p-2.5 ring-1 ring-zinc-100">
        <p className="text-[7px] font-bold uppercase tracking-wide text-zinc-400">
          Hoje
        </p>
        <div className="mt-1 flex flex-col gap-0.5">
          {[
            ["Faturamento", "R$ 2.618,00"],
            ["Pedidos", "47"],
            ["Ticket médio", "R$ 55,70"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-[8px] text-zinc-400">{label}</span>
              <span className="text-[9px] font-bold tabular-nums text-zinc-900">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Cardápio (admin) ──────────────────────── */

const adminCats = ["🍔 Burgers", "🍟 Porções", "🥤 Bebidas"];

const adminItems = [
  { emoji: "🍔", name: "X-Burger", price: "R$ 32,00", on: true },
  { emoji: "🥗", name: "X-Salada", price: "R$ 28,00", on: true },
  { emoji: "🥓", name: "X-Bacon", price: "R$ 36,00", on: false },
  { emoji: "🍟", name: "Batata Rústica", price: "R$ 22,00", on: true },
];

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={cn(
        "relative h-3 w-5 shrink-0 rounded-full",
        on ? "bg-accent" : "bg-zinc-200",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-2 w-2 rounded-full bg-white",
          on ? "right-0.5" : "left-0.5",
        )}
      />
    </span>
  );
}

/** `/admin/menu` — itens com preço e disponibilidade em um toque. */
export function MenuAdminScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-zinc-50">
      <StatusBar />
      <div className="px-4 pt-3">
        <p className="text-base font-bold tracking-tight text-zinc-900">Cardápio</p>
        <p className="text-[8px] text-zinc-400">Toque para pausar um item</p>
      </div>

      <div className="mt-2 flex gap-1.5 overflow-hidden px-4">
        {adminCats.map((c, i) => (
          <span
            key={c}
            className={cn(
              "whitespace-nowrap rounded-full px-2 py-0.5 text-[7px] font-semibold",
              i === 0
                ? "bg-accent text-white"
                : "bg-white text-zinc-500 ring-1 ring-zinc-200",
            )}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-2.5 flex flex-1 flex-col gap-2 px-4">
        {adminItems.map((it) => (
          <div
            key={it.name}
            className={cn(
              "flex items-center gap-2 rounded-2xl p-2 ring-1 ring-zinc-100",
              it.on ? "bg-white shadow-sm" : "bg-zinc-100/70",
            )}
          >
            <span className="text-sm">{it.emoji}</span>
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  "truncate text-[9px] font-semibold",
                  it.on ? "text-zinc-900" : "text-zinc-400",
                )}
              >
                {it.name}
              </p>
              {it.on ? (
                <p className="text-[8px] font-bold text-zinc-500">{it.price}</p>
              ) : (
                <p className="text-[7px] font-semibold text-zinc-400">
                  Esgotado
                </p>
              )}
            </div>
            <Toggle on={it.on} />
          </div>
        ))}
        <div className="rounded-2xl border border-dashed border-zinc-200 py-1.5 text-center text-[8px] font-semibold text-zinc-400">
          + Novo item
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── QR codes das mesas ────────────────────── */

const QR_CELLS: Array<[number, number]> = [
  [9, 1], [11, 2], [9, 4], [12, 5], [8, 6], [13, 6],
  [1, 9], [3, 10], [5, 8], [6, 11], [9, 9], [11, 10], [13, 9], [16, 11],
  [18, 9], [10, 13], [8, 15], [12, 15], [14, 14], [16, 16], [9, 17],
  [13, 18], [17, 13], [15, 18], [18, 18], [5, 13], [2, 15], [4, 17],
];

function MiniQr({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 21 21" className={cn("h-10 w-10 text-zinc-900", className)}>
      {[
        [0, 0],
        [14, 0],
        [0, 14],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" fill="currentColor" />
          <rect x={x + 1} y={y + 1} width="5" height="5" fill="white" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill="currentColor" />
        </g>
      ))}
      {QR_CELLS.map(([x, y]) => (
        <rect
          key={`${x}.${y}`}
          x={x}
          y={y}
          width="1.5"
          height="1.5"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

/** `/admin/qrcodes` — um QR por mesa, pronto para imprimir. */
export function QrScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-zinc-50">
      <StatusBar />
      <div className="px-4 pt-3">
        <p className="text-base font-bold tracking-tight text-zinc-900">
          QR das mesas
        </p>
        <p className="text-[8px] text-zinc-400">Cada mesa tem o seu código</p>
      </div>

      <div className="mt-2.5 grid flex-1 grid-cols-2 gap-2 px-4">
        {["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4"].map((m) => (
          <div
            key={m}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-white py-2 shadow-sm ring-1 ring-zinc-100"
          >
            <MiniQr />
            <span className="text-[7px] font-bold text-zinc-500">{m}</span>
          </div>
        ))}
      </div>

      <div className="m-3 rounded-2xl bg-accent py-2.5 text-center text-[9px] font-bold text-white">
        🖨 Imprimir todos
      </div>
    </div>
  );
}
