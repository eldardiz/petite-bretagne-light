'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
// Per-project: replace these 9 placeholders with project-specific gallery shots.
// Naming convention: public/images/philosophy/01.jpg ... 09.jpg
const GALLERY = [
  { src: '/images/philosophy/01.jpg', alt: 'Philosophy gallery image 1' },
  { src: '/images/philosophy/02.jpg', alt: 'Philosophy gallery image 2' },
  { src: '/images/philosophy/03.jpg', alt: 'Philosophy gallery image 3' },
  { src: '/images/philosophy/04.jpg', alt: 'Philosophy gallery image 4' },
  { src: '/images/philosophy/05.jpg', alt: 'Philosophy gallery image 5' },
  { src: '/images/philosophy/06.jpg', alt: 'Philosophy gallery image 6' },
  { src: '/images/philosophy/07.jpg', alt: 'Philosophy gallery image 7' },
  { src: '/images/philosophy/08.jpg', alt: 'Philosophy gallery image 8' },
  { src: '/images/philosophy/09.jpg', alt: 'Philosophy gallery image 9' },
]

export default function PhilosophySection() {
  const [index, setIndex] = useState(-1)
  const eyebrow = 'how we work…'
  const heading = <>Made&nbsp;<span className="ital">by hand.</span></>
  const body = 'No shortcuts and no mixes. French butter from start to finish, dough left to prove overnight, galettes folded to order. The same recipes our families have baked in Brittany for generations.'

  return (
    <section className="section" id="philosophy" data-parallax-trigger>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 03 / Philosophy</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Day&nbsp;<span className="ital">by day.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="env-grid" data-card-stagger>
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`cell c${i + 1}`}
              data-card
              data-cursor-marquee-text="Open gallery"
              style={{ cursor: 'none' }}
              onClick={() => setIndex(i)}
            >
              <div data-parallax={i % 2 === 0 ? '0.1' : '-0.1'} style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? '(max-width:768px) 100vw, 60vw' : '(max-width:768px) 50vw, 30vw'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={GALLERY.map(g => ({ src: g.src, alt: g.alt }))}
      />
    </section>
  )
}
