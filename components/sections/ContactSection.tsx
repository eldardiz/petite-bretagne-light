import { brand } from '@/lib/brand'

export default function ContactSection() {
  const address: string = brand.contact.address
  const phone: string = brand.contact.phone
  const email: string = brand.contact.email
  const hoursFull: string = brand.hours.full
  const hoursFeatured: string = brand.hours.featured
  const cityShort: string = brand.contact.cityShort
  return (
    <section className="section contact" id="contact">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 13 / Contact</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>see you soon…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              Book&nbsp;<span className="ital">a table.</span>
            </h2>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-reveal>
            <div className="block">
              <div className="label">address</div>
              <div className="value">{address ? address.split(',')[0] : ''}{cityShort ? <><br />{cityShort}</> : null}</div>
            </div>
            <div className="block">
              <div className="label">phone</div>
              <div className="value">{phone}</div>
            </div>
            <div className="block">
              <div className="label">email</div>
              <div className="value normal">{email}</div>
            </div>
            <div className="block">
              <div className="label">hours</div>
              <div className="value normal">
                {hoursFull}
                {hoursFeatured ? <><br />Featured · {hoursFeatured}</> : null}
              </div>
            </div>
          </div>

          <form className="contact-form" data-reveal action="/api/contact" method="POST">
            <h3 className="display">Have&nbsp;<span className="ital">a question</span>&nbsp;?</h3>
            <div className="field-row">
              <div className="field">
                <label htmlFor="f-name">name</label>
                <input id="f-name" name="name" type="text" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">email</label>
                <input id="f-email" name="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="f-date">date</label>
                <input id="f-date" name="date" type="text" placeholder="DD / MM / YYYY" />
              </div>
              <div className="field">
                <label htmlFor="f-cov">guests</label>
                <select id="f-cov" name="guests">
                  <option>2 people</option>
                  <option>4 people</option>
                  <option>6 people</option>
                  <option>8 or more</option>
                </select>
              </div>
            </div>
            <div className="field full">
              <label htmlFor="f-msg">message (optional)</label>
              <textarea id="f-msg" name="message" placeholder="Allergies, occasion, special requests…"></textarea>
            </div>
            <div className="submit-row">
              <span className="mono">reply within 24h…</span>
              <button className="btn red" type="submit">
                Send request <span className="arrow">↗</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
