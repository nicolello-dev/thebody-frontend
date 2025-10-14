export function Header({ text }: { text: string }) {
  return (
    <div
      className="database-header text-4xl text-[#10233d] tracking-[3px]"
      style={{
        position: "fixed",
        top: 32,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3500,
      }}
    >
      {text}
    </div>
  );
}
