import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function FinalCTA() {
  const eyebrow = 'see you soon…'
  const heading: string | undefined = undefined
  const ctaLabel = 'Plan your visit'
  const businessName: string = brand.identity.name
  const phone: string = brand.contact.phone
  const imgSrc = '/images/cta/placeholder.jpg'
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <Image src={imgSrc} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <svg className="noise" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="final-cta-headline">
        <div className="above">{eyebrow}</div>
        <h2 className="display">
          {heading ?? <>{businessName}&nbsp;<span className="ital">awaits.</span></>}
        </h2>
      </div>
      <div className="final-cta-content">
        <div className="hero-top" style={{ color: 'var(--cream)' }}>
          <div className="stack">
            <span className="mono">— {businessName.toUpperCase()}</span>
          </div>
          <div className="stack right">
            <span className="mono">FIND US</span>
            <span className="mono">{phone || 'MAMARONECK, NY'}</span>
          </div>
        </div>
        <div className="actions">
          <a className="btn" href="#contact">{ctaLabel} <span className="arrow">↗</span></a>
          {phone ? <a className="btn ghost" href={`tel:${phone.replace(/\s/g, '')}`}>Call us</a> : null}
        </div>
      </div>
    </section>
  )
}
