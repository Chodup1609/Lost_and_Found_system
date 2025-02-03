import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["select", "preview"];

  connect() {
    this.updatePreview(); // Load preview if a default item is selected
  }

  updatePreview() {
    const selectedOption = this.selectTarget.options[this.selectTarget.selectedIndex];
    const imgSrc = selectedOption.getAttribute("data-img-src");

    if (imgSrc) {
      this.previewTarget.innerHTML = `<img src="${imgSrc}" alt="Item Image" style="width: 100px; height: 100px; object-fit: cover; margin-top: 10px;">`;
    } else {
      this.previewTarget.innerHTML = "";
    }
  }
}
