import { getCategoryTheme } from "../../../design/categoryTheme";

function CategoryBadge({ category = "Other" }) {
  const theme = getCategoryTheme(category);

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]"
      style={{
        color: theme.color,
        border: `1px solid rgba(255,255,255,0.06)`,
        background: `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)), ${theme.softGlow}`,
        boxShadow: `0 6px 20px ${theme.softGlow}`,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        padding: "6px 10px",
      }}
    >
      {category || theme.label}
    </span>
  );
}

export default CategoryBadge;
