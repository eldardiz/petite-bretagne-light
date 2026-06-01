import Link from 'next/link'
import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function Footer() {
  const name = brand.identity.name
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-mark">
          <Image
            src="/images/petitebretagne-logo.png"
            alt={name}
            width={500}
            height={250}
            className="brand-logo"
            style={{ height: 56, width: 'auto' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-sans)', fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85, flexWrap: 'wrap' }}>
          <a href="#about">About</a>
          <a href="#featured-offering">Menu</a>
          <a href="#instagram">Instagram</a>
          <a href="#contact">Book</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© MMXXVI · {name}</span>
        <Link href="/mentions-legales">Legal</Link>
        <a href="https://axamo.co" target="_blank" rel="noopener noreferrer">Site by Axamo.co</a>
      </div>
    </footer>
  )
}
