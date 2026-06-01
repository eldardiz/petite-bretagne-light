import Image from 'next/image'

export default function LocationShowcaseSection() {
  const eyebrow = 'pull up a chair…'
  const heading = <>A table by the&nbsp;<span className="ital">window.</span></>
  const body = 'A warm little room in the heart of Mamaroneck Village. Pull up a chair for a coffee and a pastry, or take it all to go. Open early, every day of the week.'
  const imgSrc = '/images/location/placeholder.jpg'
  return (
    <section className="section" id="location-showcase">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 05 / Location</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Twenty-two&nbsp;<span className="ital">seats.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="terrasse-2col" data-card-stagger>
          <div className="terrasse-2col-meta" data-card>
            <div className="t2-label">SETTING</div>
            <div className="t2-value">Café</div>
            <div className="t2-label" style={{ marginTop: 32 }}>SINCE</div>
            <div className="t2-value">2021</div>
            <div className="t2-label" style={{ marginTop: 32 }}>HOURS</div>
            <div className="t2-value" style={{ fontSize: 'clamp(22px,2.5vw,40px)' }}>From 6am</div>
          </div>
          <div className="terrasse-2col-image" data-card data-parallax-trigger>
            <div data-parallax="0.1" style={{ position: 'absolute', inset: 0 }}>
              <Image src={imgSrc} alt="Café seating at Petite Bretagne in Mamaroneck Village" fill className="object-cover" sizes="(max-width:768px) 100vw, 55vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
