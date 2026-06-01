from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = "/Users/eldardizdarevic/Desktop/eldar-design-development-cc/vibe-coding/mockups/petite-bretagne-light/screenshots"
URL = "https://petite-bretagne-light.vercel.app"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def scroll_and_capture(page, scroll_y, filename):
    page.evaluate(f"window.scrollTo(0, {scroll_y})")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(OUTPUT_DIR, filename), full_page=False)

with sync_playwright() as p:
    browser = p.chromium.launch()

    # Desktop 1440 — targeted re-shots at better scroll positions
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(2000)

    # Get the full page height so we can map sections
    full_height = page.evaluate("document.body.scrollHeight")
    print(f"Full page height: {full_height}px")

    # Scroll to each section by querying it directly
    sections = {
        "marquee_banner":     "section[class*='marquee'], section[class*='banner'], section[class*='infinite'], [class*='InfiniteScroll'], [class*='marquee']",
        "testimonials":       "section[class*='testimonial'], [class*='Testimonial']",
        "instagram":          "section[class*='instagram'], section[class*='Instagram'], [class*='InstagramSection']",
        "contact":            "section[class*='contact'], section[class*='Contact'], [class*='ContactSection']",
        "final_cta":          "section[class*='cta'], section[class*='CTA'], section[class*='FinalCTA'], [class*='FinalCta']",
        "footer":             "footer",
    }

    for name, selector in sections.items():
        try:
            element = page.query_selector(selector)
            if element:
                box = element.bounding_box()
                if box:
                    scroll_y = max(0, int(box["y"]) - 80)
                    page.evaluate(f"window.scrollTo(0, {scroll_y})")
                    page.wait_for_timeout(800)
                    page.screenshot(path=os.path.join(OUTPUT_DIR, f"desktop_targeted_{name}.png"), full_page=False)
                    print(f"  {name}: y={box['y']:.0f}, captured at scroll={scroll_y}")
                else:
                    print(f"  {name}: no bounding box")
            else:
                print(f"  {name}: selector not found")
        except Exception as e:
            print(f"  {name}: error — {e}")

    # Also take specific scroll positions that should catch everything
    # Based on typical layout we'll fan out more
    for i, y in enumerate([900, 1600, 2200, 2800, 3600, 4200, 5000, 5800, 6600, 7200, 8000]):
        scroll_and_capture(page, y, f"desktop_sweep_{i+1:02d}_y{y}.png")

    browser.close()
    print("Done.")
