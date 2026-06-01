import Image from 'next/image'

type Card = {
  label?: string
  name: string
  price?: string
  src: string
  alt: string
}

const FALLBACK_CARDS: Card[] = [
  { label: 'the morning', name: 'Croissant sandwich', src: '/images/featured/card-01.jpg', alt: 'Ham and cheese croissant sandwiches' },
  { label: 'the loaf', name: 'Seeded loaf', src: '/images/featured/card-02.jpg', alt: 'Multigrain seeded bread loaf, sliced' },
  { label: 'the savory', name: 'Smoked salmon baguette', src: '/images/featured/card-03.jpg', alt: 'Smoked salmon baguette sandwich' },
  { label: 'the sweet', name: 'Apple turnover', src: '/images/featured/card-04.jpg', alt: 'Golden apple turnover pastry' },
]

export default function FeaturedOfferingSection() {
  const eyebrow = 'on the counter…'
  const heading = <>Baked&nbsp;<span className="ital">this morning.</span></>
  const body = 'From the first croissant at six to the last galette in the afternoon, a short list made fresh every day. Sweet, savory, and everything in between.'
  const cards = FALLBACK_CARDS
  return (
    <section className="section cream" id="featured-offering">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 07 / Featured</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Seasonal&nbsp;<span className="ital">highlights.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="cards-row" data-card-stagger>
          {cards.map((c, i) => (
            <article key={i} className="menu-card" data-card>
              <Image src={c.src} alt={c.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
              <div className="meta">
                {c.label ? <div className="label">{c.label}</div> : null}
                <div className="name">{c.name}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
