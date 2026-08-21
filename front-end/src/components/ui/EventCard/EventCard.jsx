import { useRef } from "react";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import GlowCard from "../GlowCard/GlowCard";
import { getCategoryTheme } from "../../../design/categoryTheme";

function EventCard({
  title = "Untitled Event",
  category = "Other",
  date = "TBA",
  location = "Location TBA",
  image,
  description = "",
  className = "",
}) {
  const theme = getCategoryTheme(category);
  const imageRef = useRef(null);

  function handleImageMove(event) {
    const element = imageRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.transform = `translate3d(${x * 12}px, ${y * 8}px, 0) rotate(${x * 2}deg) scale(1.03)`;
  }

  function resetImage() {
    if (imageRef.current) {
      imageRef.current.style.transform = "translate3d(0,0,0) rotate(0deg) scale(1)";
    }
  }

  return (
    <GlowCard category={category} className={`min-h-[420px] ${className}`}>
      <article
        className="group flex h-full flex-col"
        style={{
          "--category-color": theme.color,
          "--category-glow": theme.glow,
          "--category-soft": theme.softGlow,
        }}
      >
        <div className="relative h-56 overflow-hidden rounded-t-xl" onMouseMove={handleImageMove} onMouseLeave={resetImage}>
          {image ? (
            <img
              ref={imageRef}
              src={image}
              alt={title}
              className="h-full w-full origin-center object-cover contrast-[0.98] saturate-[0.96] transition-transform duration-700 will-change-transform [backface-visibility:hidden]"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,var(--category-soft),transparent_34%),linear-gradient(135deg,#0b1116,#06070a)]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-[#07090c]/10 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,var(--category-soft)_70%,transparent_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen" aria-hidden="true" />
          <div className="absolute left-4 top-4"><CategoryBadge category={category} /></div>
          <div className="pointer-events-none absolute inset-0 rounded-t-xl opacity-0 shadow-[inset_0_0_0_1px_var(--category-color),0_0_34px_var(--category-glow)] transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen" aria-hidden="true" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-bold text-white [text-shadow:0_0_10px_color-mix(in_srgb,var(--category-color)_20%,transparent)]">
            {title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-evently-text-secondary">
            <span aria-label={`Date ${date}`}>📅 {date}</span>
            <span aria-label={`Location ${location}`}>📍 {location}</span>
          </div>

          {description && <p className="mt-4 line-clamp-3 text-sm leading-6 text-evently-muted">{description}</p>}

          <div className="mt-auto pt-6">
            <div className="h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,transparent,var(--category-color),transparent)] shadow-[0_0_24px_var(--category-glow)] transition-transform duration-500 group-hover:scale-x-100" />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-evently-muted">View Event</span>
              <span className="text-xl text-[var(--category-color)] [text-shadow:0_0_18px_var(--category-glow)] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </article>
    </GlowCard>
  );
}

export default EventCard;
