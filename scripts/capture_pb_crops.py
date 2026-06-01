from playwright.sync_api import sync_playwright
from PIL import Image
import os

OUTPUT_DIR = "/Users/eldardizdarevic/Desktop/eldar-design-development-cc/vibe-coding/mockups/petite-bretagne-light/screenshots/pb-dark"
URL = "https://petite-bretagne.vercel.app"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def crop_and_save(src_path, box, out_path):
    """box = (left, upper, right, lower) in pixels at 2x if retina, else 1x"""
    img = Image.open(src_path)
    cropped = img.crop(box)
    cropped.save(out_path)

with sync_playwright() as p:
    browser = p.chromium.launch()

    # ── DESKTOP 1440 x 900 ──────────────────────────────────────
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(2000)

    # Navbar logo crop — top-left corner
    hero_path = os.path.join(OUTPUT_DIR, "crop_01_navbar_logo.png")
    page.screenshot(path=hero_path, clip={"x": 0, "y": 0, "width": 280, "height": 80})

    # Footer — scroll to bottom and crop the full footer
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)
    footer_full_path = os.path.join(OUTPUT_DIR, "crop_02_footer_full.png")
    page.screenshot(path=footer_full_path, full_page=False)

    # Footer bottom-right credit text crop
    footer_credit_path = os.path.join(OUTPUT_DIR, "crop_03_footer_credit.png")
    page.screenshot(path=footer_credit_path, clip={"x": 900, "y": 800, "width": 540, "height": 100})

    # Footer logo crop (bottom-left)
    footer_logo_path = os.path.join(OUTPUT_DIR, "crop_04_footer_logo.png")
    page.screenshot(path=footer_logo_path, clip={"x": 0, "y": 700, "width": 400, "height": 200})

    browser.close()
    print("Crop screenshots done.")
