export function TopBarBrand() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
      <div
        style={{
          background: "linear-gradient(135deg,#1d6bb5,#6d4ebd)",
          borderRadius: "7px",
          padding: "5px 10px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <line x1="6" y1="9" x2="6" y2="12" />
          <line x1="6" y1="12" x2="12" y2="15" />
          <line x1="18" y1="9" x2="18" y2="12" />
          <line x1="18" y1="12" x2="12" y2="15" />
        </svg>
        <span
          style={{
            color: "#fff",
            fontSize: "12.5px",
            fontWeight: 700,
            letterSpacing: "0.8px",
          }}
        >
          VisioLogic
        </span>
      </div>
    </div>
  );
}
