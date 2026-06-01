import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function HeroSection() {
  const eyebrow = 'a place worth knowing…'
  const heading: string | undefined = undefined
  const discoverLabel = 'Scroll'
  const businessName: string = brand.identity.name
  const address: string = brand.contact.address
  const hoursFull: string = brand.hours.full
  const established: string = brand.identity.established
  const { lat, lng } = brand.identity.coordinates
  const cityShort: string = brand.contact.cityShort
  const imgSrc = '/images/hero/placeholder.jpg'

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-image" data-parallax-trigger>
          <div data-parallax="0.18" style={{ position: 'absolute', inset: 0 }}>
            <Image src={imgSrc} alt={`Inside ${businessName}, a French bakery in Mamaroneck`} fill className="object-cover" priority sizes="100vw" />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,9,7,0.45)', zIndex: 1 }} />
        </div>
        <svg className="noise" preserveAspectRatio="none">
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="hero-content">
          <div className="hero-top">
            <div className="stack">
              {established ? <span>EST. {established}</span> : null}
              {lat ? <span>{lat}</span> : null}
              {lng ? <span>{lng}</span> : null}
            </div>
            <div className="stack right">
              {address ? <span>{address.split(',')[0].toUpperCase()}</span> : null}
              {cityShort ? <span>{cityShort}</span> : null}
            </div>
          </div>

          <div className="hero-headline">
            <div className="above">{eyebrow}</div>
            <h1 className="display">
              {heading ?? businessName}
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="stack">
              {hoursFull ? <span>{hoursFull.toUpperCase()}</span> : null}
            </div>
            <div className="scroll-prompt">
              <span>{discoverLabel}</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
