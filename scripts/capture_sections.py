from playwright.sync_api import sync_playwright
import time

URL = "https://petite-bretagne-light.vercel.app"
OUT = "/Users/eldardizdarevic/Desktop/eldar-design-development-cc/vibe-coding/mockups/petite-bretagne-light/screenshots"

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        page.goto(URL, wait_until='networkidle', timeout=30000)
        time.sleep(2)

        # 1. Hero — top of page
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(1)
        page.screenshot(path=f"{OUT}/01_hero_desktop.png", full_page=False)
        print("Saved: 01_hero_desktop.png")

        # 2. Get full page height so we can scroll to sections
        page_height = page.evaluate("document.documentElement.scrollHeight")
        print(f"Full page height: {page_height}px")

        # 3. Mid-page body section — About / "corner of Brittany"
        # Scroll to roughly 30% down
        scroll_mid = int(page_height * 0.28)
        page.evaluate(f"window.scrollTo(0, {scroll_mid})")
        time.sleep(1)
        page.screenshot(path=f"{OUT}/03_body_about.png", full_page=False)
        print("Saved: 03_body_about.png")

        # 4. Final CTA "Petite Bretagne awaits" — scroll to ~75% down
        scroll_cta = int(page_height * 0.72)
        page.evaluate(f"window.scrollTo(0, {scroll_cta})")
        time.sleep(1)
        page.screenshot(path=f"{OUT}/02_final_cta.png", full_page=False)
        print("Saved: 02_final_cta.png")

        # 5. Footer — scroll to very bottom
        page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
        time.sleep(1)
        page.screenshot(path=f"{OUT}/04_footer.png", full_page=False)
        print("Saved: 04_footer.png")

        # 6. Full page for reference
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(1)
        page.screenshot(path=f"{OUT}/00_full_page.png", full_page=True)
        print("Saved: 00_full_page.png")

        browser.close()
        print("Done.")

capture()
