"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

// Faint "city map": blocks + roads with a dashed red route winding through.
function MapBackdrop() {
  const blocks = [
    [60, 50, 120, 70],
    [210, 40, 90, 90],
    [330, 60, 140, 60],
    [690, 40, 110, 80],
    [840, 70, 110, 90],
    [60, 250, 110, 90],
    [220, 280, 130, 70],
    [560, 270, 120, 90],
    [720, 250, 110, 80],
    [860, 280, 90, 80],
  ] as const;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 440"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="#e9e9ec">
        {blocks.map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="10" />
        ))}
      </g>
      <g stroke="#eeeef1" strokeWidth="12" fill="none">
        <path d="M-20 200 H1020" />
        <path d="M500 -20 V460" />
        <path d="M-20 30 L1020 410" opacity="0.6" />
      </g>
      <path
        d="M120 360 C 300 320, 300 150, 470 150 S 720 250, 880 90"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1 13"
      />
    </svg>
  );
}

function Pin({ className }: { className?: string }) {
  return (
    <span className={`absolute ${className}`}>
      <MapPin
        className="h-9 w-9 drop-shadow-md"
        style={{ fill: "var(--accent)", stroke: "white" }}
        strokeWidth={1.5}
      />
    </span>
  );
}

function AvatarPin({
  className,
  initials,
  color,
}: {
  className?: string;
  initials: string;
  color: string;
}) {
  return (
    <span
      className={`absolute flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white shadow-lg ring-2 ring-white ${className}`}
      style={{ background: color }}
    >
      {initials}
    </span>
  );
}

export function CTA() {
  return (
    <section id="demo" className="px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-muted/60 to-white px-6 py-24 text-center"
      >
        <MapBackdrop />

        {/* map markers, kept toward the edges so the headline stays clear */}
        <Pin className="left-[10%] top-[26%]" />
        <Pin className="right-[14%] top-[64%]" />
        <AvatarPin className="left-[20%] top-[62%]" initials="MA" color="#0ea5e9" />
        <AvatarPin className="right-[16%] top-[24%]" initials="RS" color="#10b981" />
        <AvatarPin className="left-[44%] top-[14%]" initials="CR" color="#f59e0b" />

        {/* legibility wash behind the copy */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side_at_50%_50%,white_55%,transparent)]" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Pare de perder tempo com comanda no papel.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            Crie seu cardápio digital em minutos e comece a receber pedidos pela
            mesa hoje mesmo. Sem fidelidade, sem taxa por pedido.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#precos"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Criar cardápio grátis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#recursos"
              className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Ver demonstração
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
