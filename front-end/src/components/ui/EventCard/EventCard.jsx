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
}) {
  const theme = getCategoryTheme(category);

  return (
    <GlowCard category={category} className="min-h-[420px]">
      <article className="group flex h-full flex-col">
        <div className="relative h-56 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="
                h-full w-full object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background: `
                  radial-gradient(circle at 20% 20%, ${theme.softGlow}, transparent 34%),
                  linear-gradient(135deg, #121722, #090b11)
                `,
              }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E16] via-[#0B0E16]/20 to-transparent" />

          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
            style={{
              background: `linear-gradient(
                135deg,
                transparent 30%,
                ${theme.softGlow} 100%
              )`,
            }}
          />

          <div className="absolute left-4 top-4">
            <CategoryBadge category={category} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3
            className="
              text-xl font-bold
              text-white
              transition-colors duration-300
            "
            style={{
              textShadow: `0 0 0 ${theme.color}`,
            }}
          >
            {title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#B3BAC7]">
            <span>📅 {date}</span>
            <span>📍 {location}</span>
          </div>

          {description && (
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#8C95A5]">
              {description}
            </p>
          )}

          <div className="mt-auto pt-6">
            <div
              className="
                h-px w-full
                origin-left scale-x-0
                transition-transform duration-500
                group-hover:scale-x-100
              "
              style={{
                background: `linear-gradient(
                  90deg,
                  transparent,
                  ${theme.color},
                  transparent
                )`,
                boxShadow: `0 0 16px ${theme.glow}`,
              }}
            />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-[#7E8798]">
                View Event
              </span>

              <span
                className="
                  text-xl
                  transition-all duration-300
                  group-hover:translate-x-1
                "
                style={{
                  color: theme.color,
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