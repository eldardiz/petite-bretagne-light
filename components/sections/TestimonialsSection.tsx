type Testimonial = { quote: string; name: string; source: string; rating: number }

// NOTE: illustrative placeholder testimonials for the mockup. Swap for real
// Google / Yelp reviews (with real names + sources) before sending to the lead.
const FALLBACK: Testimonial[] = [
  { quote: 'The croissants are the real thing. Shatteringly flaky, properly buttery, and gone by mid-morning if you sleep in.', name: 'A regular', source: 'Mamaroneck', rating: 5 },
  { quote: 'A little piece of Brittany on Mamaroneck Avenue. The galettes and Far Breton take me straight back to France.', name: 'A regular', source: 'Google review', rating: 5 },
  { quote: 'My Saturday ritual: a coffee, a baguette under my arm, and a quick chat at the counter.', name: 'A regular', source: 'Mamaroneck', rating: 5 },
]

export default function TestimonialsSection() {
  const items = FALLBACK
  return (
    <section className="section cream testi-wrap">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 09 / Reviews</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>they came back, and again…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              The&nbsp;<span className="ital">regulars</span>&nbsp;agree.
            </h2>
          </div>
        </div>
      </div>

      <div className="testi-row">
        <div className="testi-track">
          {items.map((t, i) => (
            <article key={i} className="testi-card">
              <div className="stars">{'★'.repeat(t.rating ?? 5)}</div>
              <p className="quote">&ldquo; {t.quote} &rdquo;</p>
              <div className="author"><span>{t.name}</span><span className="src">{t.source}</span></div>
              <div className="testi-pin">&quot;</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
