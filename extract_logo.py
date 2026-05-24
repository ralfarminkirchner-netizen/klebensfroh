import cv2
import numpy as np

def extract_logo(image_path, output_path, transparent_output_path):
    print(f"Loading {image_path}")
    img = cv2.imread(image_path)
    if img is None:
        print("Error loading image")
        return
        
    height, width = img.shape[:2]
    
    # 1. Crop roughly the top-left area where the logo is located
    # Based on the image IMG_4386, the logo is roughly in the top left 40%x40%
    crop = img[int(height*0.1):int(height*0.35), int(width*0.15):int(width*0.55)]
    
    # Save the raw crop
    cv2.imwrite(output_path, crop)
    print(f"Saved cropped logo to {output_path}")

    # 2. Make it transparent (remove the beige background)
    # Convert to grayscale
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    
    # Threshold to isolate the dark text/drawing (which is the logo/clover)
    # The background is light beige, the logo is dark/black and green
    # We will create an alpha channel based on the darkness of the pixels
    # A simple approach is to use the grayscale as inverted alpha (darker = more opaque)
    
    # Apply a binary threshold to get a mask of the dark pixels
    _, mask = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)
    
    # To keep the original colors of the logo (including the green clover),
    # we add the mask as the alpha channel to the original cropped image.
    b, g, r = cv2.split(crop)
    
    # Create the transparent image
    rgba = [b, g, r, mask]
    dst = cv2.merge(rgba, 4)
    
    cv2.imwrite(transparent_output_path, dst)
    print(f"Saved transparent logo to {transparent_output_path}")

if __name__ == "__main__":
    img_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/IMG_4386.jpg"
    raw_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/logo_crop_raw.jpg"
    transparent_path = "/Users/ralfkirchner/.gemini/antigravity/scratch/lebens-froh/public/images/logo_extracted.png"
    
    extract_logo(img_path, raw_path, transparent_path)
