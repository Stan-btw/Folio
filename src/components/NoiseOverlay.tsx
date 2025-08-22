export default function NoiseOverlay() {
  return (
    <div
      style={{
        backgroundImage: "url('/noise.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
        position: "fixed",
        inset: 0,
        zIndex: 0,
        opacity: 0.3, // plus visible pour test
        mixBlendMode: "screen",
        pointerEvents: "none",
      }}
    />
  );
}
