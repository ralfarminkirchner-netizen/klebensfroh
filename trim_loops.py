#!/usr/bin/env python3
"""
Aggressively trim loops, strings, and fuzzy rembg artifacts from the top of the stickers.
"""
from PIL import Image
import os
import glob

DIR = 'public/images/stickers'

# Dictionary of (top_crop_percent) to remove the loop/string
# e.g., 0.15 means crop the top 15% of the image.
trims = {
    'wolke.png': 0.15,
    'weisse_katze.png': 0.12,
    'waschbaer.png': 0.10,
    'rosa_fox.png': 0.10,
    'pinguin.png': 0.15,
    'pink_baer.png': 0.12,
    'elefant_klein.png': 0.12,
    'elefant_magnet.png': 0.15,
    'kuh.png': 0.12,
    'giraffe_anhaenger.png': 0.15,
    'petra_panda.png': 0.12,
    'petra_cat.png': 0.08,
    'petra_giraffe.png': 0.15, # The fuzzy horn remnants
}

def process_trims():
    for filename, top_trim in trims.items():
        path = os.path.join(DIR, filename)
        if os.path.exists(path):
            img = Image.open(path)
            w, h = img.size
            # Crop off the top
            crop_y = int(h * top_trim)
            img_cropped = img.crop((0, crop_y, w, h))
            
            # Clean up fuzzy semi-transparent pixels left by rembg
            # Make any pixel with alpha < 150 fully transparent to crisp the edges
            img_cropped = img_cropped.convert("RGBA")
            data = img_cropped.getdata()
            new_data = []
            for item in data:
                if item[3] < 150: # Threshold alpha
                    new_data.append((0, 0, 0, 0))
                else:
                    new_data.append(item)
            img_cropped.putdata(new_data)

            # Auto-crop to new bounding box
            bbox = img_cropped.getbbox()
            if bbox:
                img_cropped = img_cropped.crop(bbox)

            img_cropped.save(path)
            print(f"Trimmed {filename} (top {int(top_trim*100)}%)")

def crisp_all_edges():
    # Apply alpha threshold to ALL stickers to ensure no fuzzy gray halos
    for path in glob.glob(f"{DIR}/*.png"):
        if 'logo.png' in path or 'clover.png' in path: continue
        
        img = Image.open(path).convert("RGBA")
        data = img.getdata()
        new_data = []
        for item in data:
            if item[3] < 80: # Mild threshold for others
                new_data.append((0, 0, 0, 0))
            else:
                new_data.append(item)
        img.putdata(new_data)
        
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(path)

print("Trimming loops and cleaning artifacts...")
process_trims()
print("Crisping all edges...")
crisp_all_edges()
print("Done!")
