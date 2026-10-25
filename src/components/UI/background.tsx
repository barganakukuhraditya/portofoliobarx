export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Cahaya lembut */}
      <div
        className="absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-52 -right-40 h-[720px] w-[720px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
      />

      {/* Garis gelombang tipis */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-fg opacity-[0.07]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M-50 200 C 250 80, 500 340, 800 220 S 1250 120, 1500 260" />
        <path d="M-50 360 C 300 240, 520 500, 840 380 S 1250 280, 1500 420" />
        <path d="M-50 560 C 280 440, 560 700, 880 580 S 1260 480, 1500 620" />
        <path d="M-50 760 C 320 640, 540 880, 900 780 S 1280 680, 1500 800" />
      </svg>
    </div>
  );
}