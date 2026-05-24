#!/usr/bin/env python3
"""
v2: Smarter background removal.
- Row 0-1 grid animals (standalone on white): clean flood-fill removal
- Row 2-3 grid ornaments (on beige with strings): keep as rounded cards with BG
- Fridge magnets: keep as rounded photos (BG too similar to character)
- Re-crop grid to EXCLUDE text labels properly
"""
from PIL import Image, ImageDraw, ImageFilter
import numpy as np
import os

OUT = 'public/images/stickers'
os.makedirs(OUT, exist_ok=True)

# Clean everything first
for f in os.listdir(OUT):
    os.remove(os.path.join(OUT, f))

grid = Image.open('public/images/animal_grid.jpg')
gw, gh = grid.size  # 976 x 1075

# ============================================================
# GRID: Manual precise crops (avoiding text labels)
# ============================================================

# Row heights (approximate, accounting for text labels between rows)
# Row 0: animals from ~5 to ~230, text ~230-270
# Row 1: animals from ~275 to ~510, text ~510-545
# Row 2: animals from ~550 to ~775, text ~775-810
# Row 3: animals from ~815 to ~1040, text ~1040-1075

col_w = gw / 5  # ~195

def crop_grid(row_top, row_bottom, col, name, pad=6):
    """Crop a cell from the grid, tight around the animal."""
    x1 = int(col * col_w) + pad
    x2 = int((col + 1) * col_w) - pad
    y1 = row_top + pad
    y2 = row_bottom - pad
    cell = grid.crop((x1, y1, x2, y2))
    return cell

def remove_white_bg(img, tolerance=40):
    """Remove white/near-white background via flood fill from corners."""
    from scipy import ndimage
    img = img.convert('RGBA')
    pixels = np.array(img)
    h, w = pixels.shape[:2]
    
    # Detect white-ish pixels
    rgb = pixels[:,:,:3].astype(float)
    whiteness = np.sqrt(np.sum((rgb - 255)**2, axis=2))
    is_white = whiteness < tolerance
    
    # Flood fill from corners
    labeled, _ = ndimage.label(is_white)
    corner_labels = set()
    for cy, cx in [(0,0), (0,w-1), (h-1,0), (h-1,w-1)]:
        if labeled[cy,cx] > 0:
            corner_labels.add(labeled[cy,cx])
    
    bg_mask = np.zeros((h,w), dtype=bool)
    for lbl in corner_labels:
        bg_mask |= (labeled == lbl)
    
    # Set BG transparent
    alpha = pixels[:,:,3].copy()
    alpha[bg_mask] = 0
    
    # Soften edge
    alpha_img = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.8))
    pixels[:,:,3] = np.array(alpha_img)
    
    result = Image.fromarray(pixels)
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
    return result

# ---- ROW 0: Standalone animals on white (freistellen) ----
print('Row 0 (freistellen):')
row0 = [
    (0, 'graue_katze'),
    (1, 'elefant'),
    (2, 'reh'),
    (3, 'rosa_reh'),
    (4, 'rosa_fuchs'),
]
for col, name in row0:
    cell = crop_grid(5, 228, col, name)
    clean = remove_white_bg(cell)
    clean.thumbnail((300, 300), Image.LANCZOS)
    clean.save(f'{OUT}/{name}.png')
    print(f'  ✓ {name} ({clean.size})')

# ---- ROW 1: Standalone animals on white (freistellen) ----
print('Row 1 (freistellen):')
row1 = [
    (0, 'zebra'),
    (1, 'kamel'),
    (2, 'panda_sitzend'),
    (3, 'loewe'),
    (4, 'wal'),
]
for col, name in row1:
    cell = crop_grid(275, 505, col, name)
    clean = remove_white_bg(cell)
    clean.thumbnail((300, 300), Image.LANCZOS)
    clean.save(f'{OUT}/{name}.png')
    print(f'  ✓ {name} ({clean.size})')

# ---- ROW 2: Hanging ornaments - keep WITH background as nice cards ----
print('Row 2 (mit Hintergrund):')
row2 = [
    (0, 'wolke'),
    (1, 'weisse_katze'),
    (2, 'waschbaer'),
    (3, 'rosa_fox'),
    (4, 'pinguin'),
]
for col, name in row2:
    cell = crop_grid(545, 775, col, name)
    cell.thumbnail((300, 300), Image.LANCZOS)
    cell.save(f'{OUT}/{name}.png')
    print(f'  ✓ {name} ({cell.size})')

# ---- ROW 3: Mixed - keep with background ----
print('Row 3 (mit Hintergrund):')
row3 = [
    (0, 'pink_baer'),
    (1, 'elefant_klein'),
    (2, 'elefant_magnet'),
    (3, 'kuh'),
    (4, 'giraffe_anhaenger'),
]
for col, name in row3:
    cell = crop_grid(810, 1042, col, name)
    cell.thumbnail((300, 300), Image.LANCZOS)
    cell.save(f'{OUT}/{name}.png')
    print(f'  ✓ {name} ({cell.size})')

# ============================================================
# FRIDGE MAGNETS: Keep as full photos with nice crop (no BG removal)
# ============================================================
print('\nKühlschrank-Magnete (volles Foto):')

# Panda
panda = Image.open('public/images/Bild 06.04.26 um 15.49.png')
pw, ph = panda.size
panda_crop = panda.crop((int(pw*0.03), int(ph*0.0), int(pw*0.95), int(ph*0.90)))
panda_crop.thumbnail((400, 400), Image.LANCZOS)
panda_crop.save(f'{OUT}/petra_panda.png')
print(f'  ✓ petra_panda ({panda_crop.size})')

# Cat
cat = Image.open('public/images/Bild 06.04.26 um 15.50.png')
cw, ch = cat.size
cat_crop = cat.crop((int(cw*0.03), int(ch*0.0), int(cw*0.97), int(ch*0.94)))
cat_crop.thumbnail((400, 400), Image.LANCZOS)
cat_crop.save(f'{OUT}/petra_cat.png')
print(f'  ✓ petra_cat ({cat_crop.size})')

# Giraffe
giraffe = Image.open('public/images/Bild 06.04.26 um 15.49 (2).png')
gw2, gh2 = giraffe.size
giraffe_crop = giraffe.crop((int(gw2*0.0), int(gh2*0.0), int(gw2*0.82), int(gh2*0.96)))
giraffe_crop.thumbnail((400, 400), Image.LANCZOS)
giraffe_crop.save(f'{OUT}/petra_giraffe.png')
print(f'  ✓ petra_giraffe ({giraffe_crop.size})')

# ============================================================
# LOGO
# ============================================================
print('\nLogo:')
logo = Image.open('public/images/petra_icons/petra_logo.png')
logo.thumbnail((600, 600), Image.LANCZOS)
logo.save(f'{OUT}/logo.png')
print(f'  ✓ logo ({logo.size})')

# Clover (already exists, copy for consistency)
clover = Image.open('public/images/clover_generated.png')
clover.thumbnail((200, 200), Image.LANCZOS)
clover.save(f'{OUT}/clover.png')
print(f'  ✓ clover ({clover.size})')

total = len(os.listdir(OUT))
print(f'\nFertig! {total} saubere Sticker in {OUT}/')
