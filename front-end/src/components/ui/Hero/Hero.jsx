import CategoryBadge from "../CategoryBadge/CategoryBadge";
import NeonButton from "../NeonButton/NeonButton";

function Hero({ events = [] }) {
  const featured = events[0] || {
    title: "Featured",
    category: "Other",
    date: "TBA",
    location: "TBA",
    image: "",
  };

  return (
    <section className="relative mb-8 overflow-visible">
      {/* ambient backdrop with larger, softer radials for premium feel */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
        style={{
          background:
            'radial-gradient(980px 420px at 80% 14%, rgba(155,92,255,0.14), transparent 18%), radial-gradient(820px 360px at 62% 84%, rgba(0,168,255,0.10), transparent 16%), linear-gradient(180deg, rgba(10,12,16,0.72), rgba(6,7,10,0.98))',
          filter: 'blur(64px)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px] rounded-3xl bg-gradient-to-b from-[#0A0D11]/66 to-transparent p-8 md:p-12 lg:p-24" style={{boxShadow: 'inset 0 -48px 140px rgba(2,3,8,0.68)'}}>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center">

          <div className="md:w-5/12">
            <div className="mb-6 flex flex-wrap gap-3">
              <CategoryBadge category="Music" />
              <CategoryBadge category="Sport" />
              <CategoryBadge category="Comedy" />
              <CategoryBadge category="Other" />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#B591FF]">
              EVENTLY Premium
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Experience live moments
              <span className="block mt-3 text-[#BFC7D6] font-medium text-base md:text-lg">
                Where ambience, image and detail meet — discover curated events in high fidelity.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#97A2B5]">
              A luxurious, immersive dark interface with category-aware neon accents, refined glass surfaces and layered lighting. Hover for micro-interactions and rich previews.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NeonButton color="#9B5CFF">Explore Events</NeonButton>
              <NeonButton color="#00A8FF">Create Event</NeonButton>
            </div>
          </div>

          <div className="md:w-7/12 flex items-center justify-center">
            <div className="relative w-full max-w-[980px] rounded-3xl overflow-visible" style={{/* remove heavy card border so image merges more with background */}}>

              {/* main hero image with ambient glow and softer edge blend */}
              <div className="relative" style={{height: '520px', borderRadius: '20px', overflow: 'hidden'}}>
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-[1.02]"
                    style={{transformOrigin: 'center'}}
                  />
                ) : (
                  <div style={{height: '520px', background: 'linear-gradient(180deg, #0b1116, #06070a)'}} />
                )}

                {/* dark veil to keep text readable but let image bleed into bg */}
                <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 36%, rgba(2,3,6,0.74))'}} />

                {/* ambient colored light spills to merge image and background */}
                <div className="pointer-events-none absolute -left-40 -top-36 w-[680px] h-[680px] rounded-full" style={{background: 'radial-gradient(circle at 30% 30%, rgba(155,92,255,0.16), transparent 36%)', filter: 'blur(88px)'}} />
                <div className="pointer-events-none absolute -right-48 -bottom-36 w-[620px] h-[620px] rounded-full" style={{background: 'radial-gradient(circle at 40% 40%, rgba(0,168,255,0.10), transparent 40%)', filter: 'blur(76px)'}} />

                {/* subtle soft edge glow to visually attach image to background */}
                <div className="pointer-events-none absolute inset-0" style={{boxShadow: 'inset 0 0 120px rgba(4,6,12,0.6)', mixBlendMode: 'multiply'}} />

                <div className="absolute left-8 bottom-8">
                  <div className="text-sm text-[#C7CFE0] font-medium">Featured</div>
                  <h3 className="mt-1 text-3xl font-bold text-white">{featured.title}</h3>
                  <div className="mt-3 flex items-center gap-3">
                    <CategoryBadge category={featured.category} />
                    <div className="text-sm text-[#98A3B5]">📍 {featured.location} • {featured.date}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* subtle atmospheric transition to the events grid below (not a new section) */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 -mb-6 h-28 -z-0" style={{background: 'linear-gradient(180deg, rgba(6,7,10,0), rgba(6,7,10,0.6))', filter: 'blur(18px)'}} />
    </section>
  );
}

export default Hero;
