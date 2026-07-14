// Floating WhatsApp contact button (fixed bottom-right).
// Replace the number in WA_NUMBER with the restaurant's real WhatsApp.
const WA_NUMBER = "5511999999999";
const WA_TEXT = "Olá! Quero conhecer o Cardápio Nota 10.";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

const WHATSAPP_PATH =
  "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.13c-.25.69-1.43 1.32-1.97 1.36-.5.04-.99.22-3.37-.7-2.83-1.12-4.65-3.99-4.79-4.18-.14-.18-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.25.6.84 2.07.91 2.22.07.14.12.31.02.5-.1.18-.15.3-.3.46-.14.18-.3.39-.43.53-.14.14-.29.3-.12.58.17.28.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.3 1.43.28.14.45.12.61-.07.18-.21.71-.83.9-1.11.18-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.12.07.66-.18 1.35z";

export function WhatsAppButton() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d={WHATSAPP_PATH} />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
