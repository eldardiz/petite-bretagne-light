export default function PlaylistSection() {
  const eyebrow = 'the sound of the house…'
  const heading: string | undefined = undefined
  const body = 'A short playlist note. Ideal between aperitif and dessert.'
  const spotifyUrl = '#'
  return (
    <section className="section playlist">
      <svg className="noise" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 10 / Playlist</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>One&nbsp;<span className="ital">hour twelve.</span></>}
            </h2>
          </div>
        </div>

        <div className="playlist-card" data-reveal>
          <div className="playlist-vinyl" aria-hidden="true">
            <div className="playlist-label">
              Volume 01
              <small>SPRING SELECTION</small>
            </div>
          </div>

          <div className="playlist-info">
            <span className="eyebrow">curated…</span>
            <h3 className="display" style={{ marginTop: 20 }}>
              Hand-picked&nbsp;<span className="ital">tracks.</span>
            </h3>
            <p className="body-lg" style={{ marginTop: 16, opacity: 0.85, maxWidth: '42ch' }}>
              {body}
            </p>

            <div className="playlist-tracks">
              {[
                { n: '01', title: 'Track one', artist: 'Artist', duration: '3:48' },
                { n: '02', title: 'Track two', artist: 'Artist', duration: '2:55' },
                { n: '03', title: 'Track three', artist: 'Artist', duration: '4:12' },
                { n: '04', title: 'Track four', artist: 'Artist', duration: '3:21' },
              ].map((t) => (
                <div key={t.n} className="track">
                  <span className="num">{t.n}</span>
                  <div className="title-row">
                    <span className="title">{t.title}</span>
                    <span className="artist">{t.artist}</span>
                  </div>
                  <span className="duration">{t.duration}</span>
                </div>
              ))}
            </div>

            <div className="playlist-actions">
              <a className="btn" href={spotifyUrl} target="_blank" rel="noopener noreferrer">Listen on Spotify <span className="arrow">↗</span></a>
              <a className="btn ghost" href="#">Apple Music</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
