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
  const imgRef = useRef(null);

  function handleImgMove(e) {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // normalized -0.5..0.5
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    // subtle parallax + small rotate for premium feel
    const tx = nx * 12; // px
    const ty = ny * 8; // px
    const rz = nx * 2; // deg

    el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rz}deg) scale(1.03)`;
    el.style.transition = `transform 1200ms cubic-bezier(.2,.9,.2,1)`;
  }

  function resetImg() {
    const el = imgRef.current;
    if (!el) return;
    el.style.transform = `translate3d(0,0,0) rotate(0deg) scale(1)`;
    el.style.transition = `transform 600ms cubic-bezier(.2,.9,.2,1)`;
  }

  return (
    <GlowCard category={category} className={`min-h-[420px] ${className}`}>
      <article className="group flex h-full flex-col">
        <div
          className="relative h-56 overflow-hidden rounded-t-xl"
          onMouseMove={handleImgMove}
          onMouseLeave={resetImg}
        >
          {image ? (
            <img
              ref={imgRef}
              src={image}
              alt={title}
              className={
                `h-full w-full object-cover transition-transform duration-1000 will-change-transform`}
              style={{
                transformOrigin: "center",
                // subtle desaturation to fit premium dark look
                filter: "contrast(0.98) saturate(0.96)",
                // ensure GPU compositing
                backfaceVisibility: "hidden",
              }}
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background: `
                  radial-gradient(circle at 20% 20%, ${theme.softGlow}, transparent 34%),
                  linear-gradient(135deg, #0b1116, #06070a)
                `,
              }}
            />
          )}

          {/* dark veil + soft angled light */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-[#07090C]/10 to-transparent" />

          {/* hover accent sweep */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(120deg, transparent 30%, ${theme.softGlow}22 70%, transparent 100%)`,
              mixBlendMode: "screen",
            }}
          />

          <div className="absolute left-4 top-4">
            <CategoryBadge category={category} />
          </div>

          {/* faint neon contour on hover */}
          <div
            className="pointer-events-none absolute inset-0 rounded-t-xl opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              boxShadow: `inset 0 0 0 1px ${theme.color}, 0 0 34px ${theme.glow}`,
              mixBlendMode: "screen",
            }}
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3
            className="text-xl font-bold text-white transition-colors duration-300"
            style={{
              textShadow: `0 0 10px ${theme.color}33`,
            }}
          >
            {title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#B3BAC7]">
            <span aria-label={`Date ${date}`}>📅 {date}</span>
            <span aria-label={`Location ${location}`}>📍 {location}</span>
          </div>

          {description && (
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#8C95A5]">
              {description}
            </p>
          )}

          <div className="mt-auto pt-6">
            <div
              className="h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              style={{
                background: `linear-gradient(90deg, transparent, ${theme.color}, transparent)`,
                boxShadow: `0 0 24px ${theme.glow}`,
              }}
            />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-[#7E8798]">
                View Event
              </span>

              <span
                className="text-xl transition-all duration-300 group-hover:translate-x-1"
                style={{
                  color: theme.color,
                  textShadow: `0 0 18px ${theme.glow}`,
                }}
              >
                →
              </span>
            </div>
          </div>
        </div>
      </article>
    </GlowCard>
  );
}

export default EventCard;
