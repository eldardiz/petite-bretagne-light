from playwright.sync_api import sync_playwright
import time

URL = "https://petite-bretagne-light.vercel.app"
OUT = "/Users/eldardizdarevic/Desktop/eldar-design-development-cc/vibe-coding/mockups/petite-bretagne-light/screenshots"

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        page.goto(URL, wait_until='networkidle', timeout=30000)
        time.sleep(3)

        # ── 1. HERO: top of page ──────────────────────────────────────────
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(1)
        page.screenshot(path=f"{OUT}/01_hero.png", full_page=False)
        print("Saved: 01_hero.png")

        # ── 2. ABOUT section — scroll into view via JS ────────────────────
        # AboutSection is the second <section> on the page; query by data or tag order
        about_top = page.evaluate("""
            () => {
                // Try to find a section that contains 'corner of Brittany' or 'About' eyebrow text
                const sections = document.querySelectorAll('section');
                for (const s of sections) {
                    if (s.innerText && (
                        s.innerText.toLowerCase().includes('corner') ||
                        s.innerText.toLowerCase().includes('brittany') ||
                        s.innerText.toLowerCase().includes('about')
                    )) {
                        const rect = s.getBoundingClientRect();
                        return rect.top + window.scrollY;
                    }
                }
                return null;
            }
        """)
        print(f"About section top: {about_top}")

        if about_top is not None:
            page.evaluate(f"window.scrollTo(0, {about_top})")
        else:
            # fallback: scroll to ~15% of page height
            ph = page.evaluate("document.documentElement.scrollHeight")
            page.evaluate(f"window.scrollTo(0, {int(ph * 0.15)})")
        time.sleep(1.5)
        page.screenshot(path=f"{OUT}/02_about_body.png", full_page=False)
        print("Saved: 02_about_body.png")

        # ── 3. FINAL CTA ("Petite Bretagne awaits") ───────────────────────
        cta_top = page.evaluate("""
            () => {
                const sections = document.querySelectorAll('section');
                for (const s of sections) {
                    if (s.innerText && s.innerText.toLowerCase().includes('awaits')) {
                        const rect = s.getBoundingClientRect();
                        return rect.top + window.scrollY;
                    }
                }
                return null;
            }
        """)
        print(f"Final CTA section top: {cta_top}")

        if cta_top is not None:
            page.evaluate(f"window.scrollTo(0, {cta_top})")
        else:
            ph = page.evaluate("document.documentElement.scrollHeight")
            page.evaluate(f"window.scrollTo(0, {int(ph * 0.85)})")
        time.sleep(1.5)
        page.screenshot(path=f"{OUT}/03_final_cta.png", full_page=False)
        print("Saved: 03_final_cta.png")

        # ── 4. FOOTER — scroll to very bottom ────────────────────────────
        page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
        time.sleep(1.5)
        page.screenshot(path=f"{OUT}/04_footer.png", full_page=False)
        print("Saved: 04_footer.png")

        # ── 5. Also capture the testimonials section (mid-page reference) ─
        test_top = page.evaluate("""
            () => {
                const sections = document.querySelectorAll('section');
                for (const s of sections) {
                    if (s.innerText && (
                        s.innerText.toLowerCase().includes('regulars') ||
                        s.innerText.toLowerCase().includes('review') ||
                        s.innerText.toLowerCase().includes('agree')
                    )) {
                        const rect = s.getBoundingClientRect();
                        return rect.top + window.scrollY;
                    }
                }
                return null;
            }
        """)
        print(f"Testimonials section top: {test_top}")

        if test_top is not None:
            page.evaluate(f"window.scrollTo(0, {test_top})")
            time.sleep(1.5)
            page.screenshot(path=f"{OUT}/05_testimonials.png", full_page=False)
            print("Saved: 05_testimonials.png")

        browser.close()
        print("All done.")

capture()
