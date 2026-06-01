import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function InstagramSection() {
  const handle = brand.social.instagram
  const instagramUrl = brand.social.instagramUrl
  const eyebrow = `@${handle || 'handle'}…`
  const heading: string | undefined = undefined
  const ctaLabel = 'Follow us'
  const posts = [
    { caption: 'Croissant sandwiches, ready for the morning rush.', tags: '#petitebretagne #croissant #mamaroneck' },
    { caption: 'Cream and chocolate crepes, folded to order.', tags: '#crepe #crepes #frenchbakery' },
    { caption: 'Fresh loaves, baked through the morning.', tags: '#bread #boulangerie #brittany' },
    { caption: 'The pastry case, while it lasts.', tags: '#viennoiserie #pastry #mamaroneckny' },
  ]
  return (
    <section className="section cream" id="instagram">
      <div className="max">
        <div className="section-num">— 11 / Follow</div>
        <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>

        <div className="insta-lead" style={{ marginTop: 32 }}>
          <h2 className="display" data-words-pullup style={{ maxWidth: '14ch' }}>
            {heading ?? <>Day&nbsp;<span className="ital">by&nbsp;day.</span></>}
          </h2>
          <div className="cta-wrap">
            <a className="btn deep-red" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              {ctaLabel} <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <p className="body-lg" data-anim-para style={{ maxWidth: '62ch', opacity: 0.85, marginBottom: 36 }}>
          Follow us on <strong>Instagram</strong> for behind-the-scenes from the kitchen, new arrivals, the team at work, and small moments worth sharing.
        </p>

        <div className="insta-cb" data-card-stagger>
          {posts.map((post, idx) => (
            <a key={idx} className="insta-cb-card" data-card href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <div className="cover">
                <Image src={`/images/instagram/post-0${idx + 1}.jpg`} alt={post.caption} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
              </div>
              <div className="meta">
                <div className="recommend">featured…</div>
                <div className="caption">{post.caption}</div>
                <div className="tags">{post.tags}</div>
                <div className="chip">
                  <Image src="/images/InstagramLogo.png" alt="Instagram" width={16} height={16} className="chip-logo" />
                  <span className="handle">{handle || 'handle'}</span>
                  <span className="check">✓</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
