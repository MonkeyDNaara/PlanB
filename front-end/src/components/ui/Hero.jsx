import CategoryBadge from "./CategoryBadge";
import NeonButton from "./NeonButton";

function Hero({ events = [] }) {
  const featured = events[0] || {
    title: "Featured",
    category: "Other",
    date: "TBA",
    location: "TBA",
    image: "",
  };

  return (
    <section className="relative mb-12 overflow-hidden rounded-3xl" id="top">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(980px_420px_at_80%_14%,rgba(155,92,255,0.14),transparent_18%),radial-gradient(820px_360px_at_62%_84%,rgba(0,168,255,0.10),transparent_16%),linear-gradient(180deg,rgba(10,12,16,0.72),rgba(6,7,10,0.98))] blur-[64px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1500px] rounded-3xl bg-gradient-to-b from-[#0a0d11]/70 to-transparent p-8 shadow-[inset_0_-48px_140px_rgba(2,3,8,0.68)] md:p-12 lg:p-20">
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center">
          <div className="md:w-5/12">
            <div className="mb-6 flex flex-wrap gap-3">
              <CategoryBadge category="Music" />
              <CategoryBadge category="Sport" />
              <CategoryBadge category="Comedy" />
              <CategoryBadge category="Other" />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">
              EVENTLY Premium
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Experience live moments
              <span className="mt-3 block text-base font-medium text-slate-300 md:text-lg">
                Where ambience, image and detail meet — discover curated events in high fidelity.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-slate-400">
              A luxurious, immersive dark interface with category-aware neon accents,
              refined glass surfaces and layered lighting.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NeonButton color="#9B5CFF">Explore Events</NeonButton>
              <NeonButton color="#00A8FF">Create Event</NeonButton>
            </div>
          </div>

          <div className="flex items-center justify-center md:w-7/12">
            <div className="relative w-full max-w-[980px] overflow-hidden rounded-[20px]">
              <div className="relative h-[360px] overflow-hidden sm:h-[440px] lg:h-[520px]">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full origin-center object-cover transition-transform duration-[1200ms] hover:scale-[1.02]"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-b from-[#0b1116] to-[#06070a]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-[rgba(2,3,6,0.86)]" aria-hidden="true" />
                <div className="pointer-events-none absolute -left-40 -top-36 h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(155,92,255,0.16),transparent_36%)] blur-[88px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-36 -right-48 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(0,168,255,0.10),transparent_40%)] blur-[76px]" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(4,6,12,0.6)] mix-blend-multiply" aria-hidden="true" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                  <p className="text-sm font-medium text-slate-300">Featured</p>
                  <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{featured.title}</h2>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <CategoryBadge category={featured.category} />
                    <p className="text-sm text-slate-400">📍 {featured.location} • {featured.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-6 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-black/60 blur-[18px]" aria-hidden="true" />
    </section>
  );
}

export default Hero;
