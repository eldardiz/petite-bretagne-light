from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = "/Users/eldardizdarevic/Desktop/eldar-design-development-cc/vibe-coding/mockups/petite-bretagne-light/screenshots"
URL = "https://petite-bretagne-light.vercel.app"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def capture_full(page, filename):
    page.screenshot(path=os.path.join(OUTPUT_DIR, filename), full_page=True)

def capture_viewport(page, filename):
    page.screenshot(path=os.path.join(OUTPUT_DIR, filename), full_page=False)

def scroll_and_capture(page, scroll_y, filename):
    page.evaluate(f"window.scrollTo(0, {scroll_y})")
    page.wait_for_timeout(600)
    page.screenshot(path=os.path.join(OUTPUT_DIR, filename), full_page=False)

with sync_playwright() as p:
    browser = p.chromium.launch()

    # ── DESKTOP 1440px ──────────────────────────────────────────
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(1500)

    # Hero (top of page, navbar in light-over-photo state)
    capture_viewport(page, "desktop_01_hero.png")

    # Scroll a little so navbar goes over white content
    scroll_and_capture(page, 800, "desktop_02_navbar_scrolled.png")

    # About section
    scroll_and_capture(page, 1400, "desktop_03_about.png")

    # Horizontal menu showcase
    scroll_and_capture(page, 2400, "desktop_04_menu_showcase.png")

    # Featured cards
    scroll_and_capture(page, 3400, "desktop_05_featured_cards.png")

    # Testimonials
    scroll_and_capture(page, 4400, "desktop_06_testimonials.png")

    # Instagram section
    scroll_and_capture(page, 5400, "desktop_07_instagram.png")

    # Contact
    scroll_and_capture(page, 6400, "desktop_08_contact.png")

    # Final CTA
    scroll_and_capture(page, 7400, "desktop_09_final_cta.png")

    # Footer
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(600)
    capture_viewport(page, "desktop_10_footer.png")

    # Full-page composite
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(600)
    capture_full(page, "desktop_FULL.png")

    # ── MOBILE 390px ────────────────────────────────────────────
    page_m = browser.new_page(viewport={"width": 390, "height": 844})
    page_m.goto(URL, wait_until="networkidle")
    page_m.wait_for_timeout(1500)

    capture_viewport(page_m, "mobile_01_hero.png")
    capture_full(page_m, "mobile_FULL.png")

    browser.close()
    print("Done. Screenshots saved to:", OUTPUT_DIR)
