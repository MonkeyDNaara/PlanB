import { getCategoryTheme } from "../../../design/categoryTheme";

function CategoryBadge({ category = "Other" }) {
  const theme = getCategoryTheme(category);

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]"
      style={{
        color: theme.color,
        border: `1px solid ${theme.color}`,
        background: theme.softGlow,
        boxShadow: `0 0 18px ${theme.softGlow}`,
      }}
    >
      {category || theme.label}
    </span>
  );
}

export default CategoryBadge;