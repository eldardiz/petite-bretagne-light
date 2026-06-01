export default function InfiniteScrollBanner() {
  return (
    <div className="marquee" data-speed="55">
      <div className="marquee-track">
        <span className="word script">Croissants</span>
        <span className="dot"></span>
        <span className="word"><em>Crepes</em></span>
        <span className="dot alt"></span>
        <span className="word script">Baguettes</span>
        <span className="dot cream"></span>
        <span className="word"><em>Viennoiserie</em></span>
        <span className="dot"></span>
        <span className="word script">Coffee</span>
        <span className="dot alt"></span>
        <span className="word"><em>Far&nbsp;Breton</em></span>
        <span className="dot cream"></span>
      </div>
    </div>
  )
}
