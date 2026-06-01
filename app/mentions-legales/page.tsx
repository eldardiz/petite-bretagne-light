import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import { brand } from '@/lib/brand'

export const metadata: Metadata = {
  title: `Legal · ${brand.identity.name}`,
  description: `Legal notice and site information for ${brand.identity.name}.`,
}

export default function MentionsLegalesPage() {
  const name = brand.identity.name
  const address = brand.contact.address ?? ''
  const cityShort = brand.contact.cityShort ?? ''
  const phone = brand.contact.phone ?? ''
  const email = brand.contact.email ?? ''

  return (
    <>
      <main className="page legal-page">
        <div className="max">
          <div className="legal-head">
            <p className="eyebrow" style={{ marginTop: 18 }}>Legal information</p>
            <h1 className="display" style={{ marginTop: 16 }}>
              Legal&nbsp;<span className="ital">notice.</span>
            </h1>
          </div>

          <section className="legal-section">
            <h2 className="legal-h2">Site owner</h2>
            <p className="legal-p">
              {name}<br />
              {address}{address && <br />}
              {cityShort}{cityShort && <br />}
              {phone && <>Phone: {phone}<br /></>}
              {email && <>Email: {email}</>}
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-h2">Hosting</h2>
            <p className="legal-p">
              This site is hosted by:<br />
              <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, United States<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-h2">Intellectual property</h2>
            <p className="legal-p">
              All elements on this site (text, photography, logos, marks, and structure) are the
              exclusive property of {name} or its partners. Any reproduction, distribution,
              modification, or use, in whole or in part, without prior written permission, is
              prohibited.
            </p>
            <p className="legal-p">
              Design and development: <a href="https://axamo.co" target="_blank" rel="noopener noreferrer">Axamo.co</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-h2">Privacy</h2>
            <p className="legal-p">
              Information you submit through the contact form is used only to respond to your
              request and is never sold or shared with third parties. It is kept only as long as
              needed to handle your message.
            </p>
            <p className="legal-p">
              For any privacy request, contact us{email && <> at <a href={`mailto:${email}`}>{email}</a></>}.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-h2">Cookies</h2>
            <p className="legal-p">
              This site uses only the technical cookies needed for it to function. No analytics,
              personalization, or advertising cookies are set without your consent.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-h2">Contact</h2>
            <p className="legal-p">
              For any question about this site, you can reach us:<br />
              {email && <>By email: <a href={`mailto:${email}`}>{email}</a><br /></>}
              {phone && <>By phone: {phone}<br /></>}
              {address && <>By mail: {address}{cityShort ? `, ${cityShort}` : ''}</>}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
