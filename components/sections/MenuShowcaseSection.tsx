import Image from 'next/image'

// Horizontal-scroll showcase. Per project, swap the 3 panel images and copy
// to match the business (menu / brunch / cocktails for a restaurant, varietals
// for a winery, etc.).
export default function MenuShowcaseSection() {
  return (
    <div className="horizontal__outer" data-horizontal-scroll-outer>
    <section className="horizontal__wrap" data-horizontal-scroll-wrap>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/showcase/panel-01.jpg" alt="Showcase panel 1" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>I&nbsp;/&nbsp;III · VIENNOISERIE</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>FRESH FROM 6AM</div>
            <div>WHILE THEY LAST</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">the morning…</span>
            <h2 className="display">Viennoiserie</h2>
            <p className="desc">Croissants, pain au chocolat, and kouign-amann, baked through the morning.</p>
          </div>
        </div>
      </article>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/showcase/panel-02.jpg" alt="Showcase panel 2" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>II&nbsp;/&nbsp;III · CREPES</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>SAVORY &amp; SWEET</div>
            <div>MADE TO ORDER</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">all day…</span>
            <h2 className="display"><span className="ital">Crepes</span></h2>
            <p className="desc">Buckwheat galettes and sweet crepes, folded to order at the counter.</p>
          </div>
        </div>
      </article>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/showcase/panel-03.jpg" alt="Showcase panel 3" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>III&nbsp;/&nbsp;III · COFFEE &amp; PANTRY</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>ESPRESSO BAR</div>
            <div>FRENCH GROCERIES</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">to take home…</span>
            <h2 className="display">Coffee</h2>
            <p className="desc">Espresso and drip to stay or go, plus a small shelf of French pantry goods.</p>
          </div>
        </div>
      </article>

    </section>
    </div>
  )
}
