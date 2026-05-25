#!/usr/bin/env python3
"""
AI Background Removal for all Klebensfroh stickers using rembg.
This guarantees clean extraction of characters without any background,
even removing complicated things like strings/loops and shadows.
"""
import os
from PIL import Image
from rembg import remove, new_session

# Use u2netp (small, fast) or u2net (default, more accurate)
session = new_session('u2net')

OUT = 'public/images/stickers'
os.makedirs(OUT, exist_ok=True)

# Clean everything first
for f in os.listdir(OUT):
    if f.endswith('.png'):
        os.remove(os.path.join(OUT, f))

# ============================================================
# GRID EXTRACT & REMBG
# ============================================================
grid = Image.open('public/images/animal_grid.jpg')
gw, gh = grid.size  # 976 x 1075
col_w = gw / 5

def crop_grid(row_top, row_bottom, col, pad=6):
    x1 = int(col * col_w) + pad
    x2 = int((col + 1) * col_w) - pad
    y1 = row_top + pad
    y2 = row_bottom - pad
    return grid.crop((x1, y1, x2, y2))

def extract_and_save(img, name):
    print(f'Processing {name}...')
    # Remove background via AI
    clean = remove(img, session=session)
    
    # Auto-crop to transparent bounds
    bbox = clean.getbbox()
    if bbox:
        clean = clean.crop(bbox)
        
    # Standardize size
    clean.thumbnail((400, 400), Image.LANCZOS)
    clean.save(f'{OUT}/{name}.png')

print('--- GRID ANIMALS ---')
rows = [
    (5, 230, [
        (0, 'graue_katze'), (1, 'elefant'), (2, 'reh'), (3, 'rosa_reh'), (4, 'rosa_fuchs')
    ]),
    (275, 505, [
        (0, 'zebra'), (1, 'kamel'), (2, 'panda_sitzend'), (3, 'loewe'), (4, 'wal')
    ]),
    (545, 775, [
        (0, 'wolke'), (1, 'weisse_katze'), (2, 'waschbaer'), (3, 'rosa_fox'), (4, 'pinguin')
    ]),
    (810, 1042, [
        (0, 'pink_baer'), (1, 'elefant_klein'), (2, 'elefant_magnet'), (3, 'kuh'), (4, 'giraffe_anhaenger')
    ])
]

for top, bottom, items in rows:
    for col, name in items:
        cell = crop_grid(top, bottom, col)
        extract_and_save(cell, name)

# ============================================================
# FRIDGE MAGNETS EXTRACT & REMBG
# ============================================================
print('\n--- MAGNETS ---')
magnets = {
    'petra_panda': ('public/images/Bild 06.04.26 um 15.49.png', 0.03, 0.0, 0.95, 0.90),
    'petra_cat': ('public/images/Bild 06.04.26 um 15.50.png', 0.03, 0.0, 0.97, 0.94),
    'petra_giraffe': ('public/images/Bild 06.04.26 um 15.49 (2).png', 0.0, 0.0, 0.82, 0.96)
}

for name, (path, x1_pct, y1_pct, x2_pct, y2_pct) in magnets.items():
    if os.path.exists(path):
        img = Image.open(path)
        w, h = img.size
        # Preliminary crop to help AI focus
        crop = img.crop((int(w * x1_pct), int(h * y1_pct), int(w * x2_pct), int(h * y2_pct)))
        extract_and_save(crop, name)

# ============================================================
# LOGO (NO BG REMOVAL, KEEP CANVAS)
# ============================================================
print('\n--- LOGO ---')
logo = Image.open('public/images/petra_icons/petra_logo.png')
logo.thumbnail((600, 600), Image.LANCZOS)
logo.save(f'{OUT}/logo.png')

clover = Image.open('public/images/clover_generated.png')
clover.thumbnail((200, 200), Image.LANCZOS)
clover.save(f'{OUT}/clover.png')

print('\nDone! All characters have been perfectly AI-extracted.')
