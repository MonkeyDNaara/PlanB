import styles from './EventDetail.module.css';

export default function EventDetail({ event }) {
  const e = event || {
    title: 'Neon Nights — Berlin',
    category: { name: 'Music', color: '#7C4DFF' },
    date: 'Sat, Aug 21, 2026',
    time: '22:00 - 04:00',
    location: 'Kiez Klub, Berlin',
    shortDescription: 'A curated night of synth-driven beats, immersive lights and forward-thinking DJs.',
    longDescription:
      'Neon Nights invites you to an atmospheric journey through electronic music and art. Expect a carefully curated line-up of local and international DJs, layered visual installations and an immersive lighting design that brings the city’s nocturnal spirit to life. Premium sound, limited capacity and a focus on a stylish, yet relaxed crowd. Doors at 21:30 — recommended arrival before midnight. Tickets are limited.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    ctaLabel: 'Jetzt teilnehmen',
  };

  return (
    <section className={styles.wrapper} aria-labelledby="event-title">
      <div
        className={styles.hero}
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.48)), url(${e.image})` }}
        role="img"
        aria-label={e.title}
      >
        <div className={styles.ambientGlow} style={{ '--glow-color': e.category.color }} />
        <div className={styles.overlayGlass}>
          <div className={styles.headerRow}>
            <div className={styles.titleWrap}>
              <h1 id="event-title" className={styles.title}>{e.title}</h1>
              <span className={styles.categoryBadge} style={{ backgroundColor: e.category.color }}>{e.category.name}</span>
            </div>
            <div className={styles.ctaWrap}>
              <button className={styles.ctaButton} aria-label={e.ctaLabel}>{e.ctaLabel}</button>
            </div>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Datum</div>
              <div className={styles.metaValue}>{e.date}</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Uhrzeit</div>
              <div className={styles.metaValue}>{e.time}</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Ort</div>
              <div className={styles.metaValue}>{e.location}</div>
            </div>
          </div>

          <div className={styles.shortDesc}>{e.shortDescription}</div>
        </div>
      </div>

      <div className={styles.detailCard}>
        <div className={styles.cardInner}>
          <h2 className={styles.sectionTitle}>Über das Event</h2>
          <p className={styles.longText}>{e.longDescription}</p>

          <div className={styles.actionsMobile}>
            <button className={styles.ctaButton} aria-label={e.ctaLabel}>{e.ctaLabel}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
