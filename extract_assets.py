import cv2
import numpy as np
import os

def extract_logo(image_path, output_path):
    print(f"Loading {image_path}")
    img = cv2.imread(image_path)
    if img is None:
        print("Error loading image")
        return
        
    # IMG_4386.jpg is 1080x1080 (assuming from Instagram). 
    # The logo is in the top left corner.
    # Let's crop the top left section.
    height, width = img.shape[:2]
    # Crop roughly top 15% to 45% horizontally, and 10% to 40% vertically
    crop = img[int(height*0.1):int(height*0.4), int(width*0.1):int(width*0.5)]
    
    cv2.imwrite(output_path, crop)
    print(f"Saved cropped logo to {output_path}")

def make_transparent(image_path, output_path):
    # Use rembg if available, otherwise just basic thresholding
    try:
        from rembg import remove
        with open(image_path, 'rb') as i:
            with open(output_path, 'wb') as o:
                input_data = i.read()
                output_data = remove(input_data)
                o.write(output_data)
        print(f"Background removed via rembg: {output_path}")
    except ImportError:
        print("rembg not installed, skipping advanced transparency")

if __name__ == "__main__":
    img_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/IMG_4386.jpg"
    logo_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/extracted_logo_raw.jpg"
    transparent_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/extracted_logo.png"
    
    extract_logo(img_path, logo_path)
    # make_transparent(logo_path, transparent_path)
