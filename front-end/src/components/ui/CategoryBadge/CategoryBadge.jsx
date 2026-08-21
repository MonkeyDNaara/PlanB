import { getCategoryTheme } from "../../../design/categoryTheme";

function CategoryBadge({ category = "Other" }) {
  const theme = getCategoryTheme(category);

  return (
    <span
      className="inline-flex items-center rounded-full border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),var(--category-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--category-color)] shadow-[0_6px_20px_var(--category-soft)] backdrop-blur-md"
      style={{
        "--category-color": theme.color,
        "--category-soft": theme.softGlow,
      }}
    >
      {category || theme.label}
    </span>
  );
}

export default CategoryBadge;
