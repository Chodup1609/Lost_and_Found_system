import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["image", "overlay"];

  connect() {
    // Any initial setup if needed
  }

  // Open the lightbox when an image is clicked
  openPreview(event) {
    const imageUrl = event.currentTarget.getAttribute("src");
    this.imageTarget.src = imageUrl;  // Set the image source for the preview
    this.overlayTarget.style.display = "flex";  // Show the lightbox overlay
    document.body.style.overflow = "hidden";  // Disable background scroll
  }

  // Close the lightbox
  closePreview() {
    this.overlayTarget.style.display = "none";  // Hide the lightbox overlay
    this.imageTarget.src = "";  // Clear the image
    document.body.style.overflow = "";  // Re-enable background scroll
  }

  // Optionally, handle zoom functionality here
  zoom(event) {
    // Add logic for zoom functionality (e.g., pinch-to-zoom or click-to-zoom)
  }
}
