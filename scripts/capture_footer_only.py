from playwright.sync_api import sync_playwright
import time

URL = "https://petite-bretagne-light.vercel.app"
OUT = "/Users/eldardizdarevic/Desktop/eldar-design-development-cc/vibe-coding/mockups/petite-bretagne-light/screenshots"

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        # Use a taller viewport so footer is fully visible without the CTA
        page = browser.new_page(viewport={'width': 1440, 'height': 1200})
        page.goto(URL, wait_until='networkidle', timeout=30000)
        time.sleep(3)

        # Get the footer element's top position
        footer_top = page.evaluate("""
            () => {
                const footer = document.querySelector('footer');
                if (footer) {
                    const rect = footer.getBoundingClientRect();
                    return rect.top + window.scrollY;
                }
                return null;
            }
        """)
        print(f"Footer top: {footer_top}")

        # Scroll so footer starts near top of viewport
        if footer_top is not None:
            page.evaluate(f"window.scrollTo(0, {footer_top - 100})")
        else:
            page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
        time.sleep(1.5)
        page.screenshot(path=f"{OUT}/04_footer_clean.png", full_page=False)
        print("Saved: 04_footer_clean.png")

        # Also capture the last ~400px of the page (final CTA + footer together)
        page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
        time.sleep(1)
        page.screenshot(path=f"{OUT}/04_footer_bottom.png", full_page=False)
        print("Saved: 04_footer_bottom.png")

        browser.close()
        print("Done.")

capture()
