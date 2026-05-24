import cv2
import numpy as np

def extract_clover(image_path, output_path):
    img = cv2.imread(image_path)
    if img is None:
        print("Error loading image")
        return
        
    height, width = img.shape[:2]
    
    # The logo was roughly 40%x40% of the image. The clover is on the left side of the logo.
    # We will crop the left half of the logo_crop_raw.
    crop = img[0:height, 0:int(width*0.4)]
    
    # Make transparent (same method)
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    _, mask = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)
    b, g, r = cv2.split(crop)
    rgba = [b, g, r, mask]
    dst = cv2.merge(rgba, 4)
    
    cv2.imwrite(output_path, dst)
    print(f"Saved clover to {output_path}")

if __name__ == "__main__":
    img_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/logo_crop_raw.jpg"
    out_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/clover_icon.png"
    extract_clover(img_path, out_path)
