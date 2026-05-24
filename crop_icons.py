#!/usr/bin/env python3
"""
Crops Petra's ORIGINAL hand-drawn characters from her photos.
No AI generation - these are HER actual drawings.
"""
from PIL import Image, ImageDraw
import os

OUT = 'public/images/petra_icons'
os.makedirs(OUT, exist_ok=True)

# ============================================================
# 1) Crop individual fridge magnets (already close-up shots)
# ============================================================

# Panda - crop to just the face, remove grey fridge background
panda = Image.open('public/images/Bild 06.04.26 um 15.49.png')
# The panda face is roughly centered, crop tight
pw, ph = panda.size
panda_crop = panda.crop((int(pw*0.05), int(ph*0.02), int(pw*0.92), int(ph*0.88)))
panda_crop.save(f'{OUT}/petra_panda.png')
print(f'Panda: {panda_crop.size}')

# Cat face
cat = Image.open('public/images/Bild 06.04.26 um 15.50.png')
cw, ch = cat.size
cat_crop = cat.crop((int(cw*0.05), int(ch*0.02), int(cw*0.95), int(ch*0.92)))
cat_crop.save(f'{OUT}/petra_cat.png')
print(f'Cat: {cat_crop.size}')

# Giraffe
giraffe = Image.open('public/images/Bild 06.04.26 um 15.49 (2).png')
gw, gh = giraffe.size
giraffe_crop = giraffe.crop((int(gw*0.02), int(gh*0.0), int(gw*0.85), int(gh*0.95)))
giraffe_crop.save(f'{OUT}/petra_giraffe.png')
print(f'Giraffe: {giraffe_crop.size}')

# ============================================================
# 2) Crop animals from the grid (5 cols x 4 rows = 20 animals)
#    Grid is 976x1075
# ============================================================

grid = Image.open('public/images/animal_grid.jpg')
gw, gh = grid.size  # 976 x 1075

# Approximate cell boundaries (5 cols, 4 rows with labels)
cols = 5
rows = 4
# Each cell is approximately 195x268
cell_w = gw / cols  # ~195
cell_h = gh / rows  # ~268

# Which animals to extract (row, col, name) - 0-indexed
animals = [
    (0, 0, 'graue_katze'),
    (0, 1, 'elefant'),
    (0, 2, 'reh'),
    (0, 3, 'rosa_reh'),
    (0, 4, 'rosa_fuchs'),
    (1, 0, 'zebra'),
    (1, 1, 'kamel'),
    (1, 2, 'panda_grid'),
    (1, 3, 'loewe'),
    (1, 4, 'wal'),
    (2, 0, 'wolke'),
    (2, 1, 'weisse_katze'),
    (2, 2, 'waschbaer'),
    (2, 3, 'rosa_fox'),
    (2, 4, 'pinguin'),
    (3, 0, 'pink_baer'),
    (3, 1, 'elefant_klein'),
    (3, 2, 'elefant_magnet'),
    (3, 3, 'kuh'),
    (3, 4, 'giraffe_grid'),
]

for row, col, name in animals:
    # Crop with a small padding to get just the animal + label
    x1 = int(col * cell_w) + 4
    y1 = int(row * cell_h) + 4
    x2 = int((col + 1) * cell_w) - 4
    y2 = int((row + 1) * cell_h) - 4
    
    cell = grid.crop((x1, y1, x2, y2))
    
    # Crop off the bottom label text (about 15% of height)
    cw, ch = cell.size
    animal_only = cell.crop((0, 0, cw, int(ch * 0.85)))
    
    animal_only.save(f'{OUT}/{name}.png')
    print(f'{name}: {animal_only.size}')

# ============================================================
# 3) Crop the bear from the paper bag (IMG_4386)
# ============================================================
bear_bag = Image.open('public/images/IMG_4386.jpg')
bw, bh = bear_bag.size
# The bear face is in the upper portion of the bag
bear_face = bear_bag.crop((int(bw*0.15), int(bh*0.08), int(bw*0.85), int(bh*0.55)))
bear_face.save(f'{OUT}/petra_baer_tuete.png')
print(f'Bear bag: {bear_face.size}')

# ============================================================
# 4) Crop the logo from the canvas (IMG_4378)
# ============================================================
logo = Image.open('public/images/IMG_4378.jpg')
lw, lh = logo.size
# The canvas/logo is centered
logo_crop = logo.crop((int(lw*0.1), int(lh*0.05), int(lw*0.9), int(lh*0.85)))
logo_crop.save(f'{OUT}/petra_logo.png')
print(f'Logo: {logo_crop.size}')

print(f'\nDone! {len(os.listdir(OUT))} icons saved to {OUT}/')
