from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = "/Users/eldardizdarevic/Desktop/eldar-design-development-cc/vibe-coding/mockups/petite-bretagne-light/screenshots/pb-dark"
URL = "https://petite-bretagne.vercel.app"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def capture_viewport(page, filename):
    page.screenshot(path=os.path.join(OUTPUT_DIR, filename), full_page=False)

def scroll_and_capture(page, scroll_y, filename, wait_ms=800):
    page.evaluate(f"window.scrollTo(0, {scroll_y})")
    page.wait_for_timeout(wait_ms)
    page.screenshot(path=os.path.join(OUTPUT_DIR, filename), full_page=False)

with sync_playwright() as p:
    browser = p.chromium.launch()

    # ── DESKTOP 1440 x 900 ──────────────────────────────────────
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(2000)

    # 1. Hero + Navbar (top of page)
    capture_viewport(page, "01_hero_navbar.png")

    # 2. About section
    scroll_and_capture(page, 900, "02_about.png")

    # 3. About section continued / featured cards area
    scroll_and_capture(page, 1800, "03_about_bottom.png")

    # 4. Featured cards
    scroll_and_capture(page, 2700, "04_featured_cards.png")

    # 5. Featured cards continued
    scroll_and_capture(page, 3600, "05_featured_cards_2.png")

    # 6. Location / coffee shot
    scroll_and_capture(page, 4500, "06_location.png")

    # 7. Instagram section
    scroll_and_capture(page, 5400, "07_instagram.png")

    # 8. Instagram continued
    scroll_and_capture(page, 6300, "08_instagram_2.png")

    # 9. Footer — scroll to absolute bottom
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)
    capture_viewport(page, "09_footer.png")

    # 10. Full page composite
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(600)
    page.screenshot(path=os.path.join(OUTPUT_DIR, "DESKTOP_FULL.png"), full_page=True)

    # ── MOBILE 390 x 844 ────────────────────────────────────────
    page_m = browser.new_page(viewport={"width": 390, "height": 844})
    page_m.goto(URL, wait_until="networkidle")
    page_m.wait_for_timeout(2000)

    # Mobile hero (checks navbar logo + CTA visibility)
    capture_viewport(page_m, "mobile_01_hero.png")

    # Mobile footer
    page_m.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page_m.wait_for_timeout(800)
    capture_viewport(page_m, "mobile_02_footer.png")

    # Mobile full page
    page_m.evaluate("window.scrollTo(0, 0)")
    page_m.wait_for_timeout(600)
    page_m.screenshot(path=os.path.join(OUTPUT_DIR, "MOBILE_FULL.png"), full_page=True)

    browser.close()
    print("Done. Screenshots saved to:", OUTPUT_DIR)
