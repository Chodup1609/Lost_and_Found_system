import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["track"];

  connect() {
    this.currentIndex = 0;
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlider();
    }
  }

  next() {
    if (this.currentIndex < this.trackTarget.children.length - 1) {
      this.currentIndex++;
      this.updateSlider();
    }
  }

  updateSlider() {
    const offset =
      -this.currentIndex *
      (this.trackTarget.firstElementChild.offsetWidth + 10); // Includes margin
    this.trackTarget.style.transform = `translateX(${offset}px)`;
  }
}
