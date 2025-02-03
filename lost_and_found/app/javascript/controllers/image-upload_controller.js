import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["previewContainer"];


  preview(event) {
    const files = Array.from(event.target.files);
    const previewContainer = this.previewContainerTarget;

    // Clear any existing previews
    previewContainer.innerHTML = "";

    files.forEach((file, index) => {
      const reader = new FileReader();
      const div = document.createElement("div");
      div.classList.add("preview-item");

      reader.onload = (e) => {
        // Image preview
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = file.name;
        img.classList.add("preview-img");

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.innerHTML = '<i class="fa fa-remove"></i>';
        removeButton.classList.add("remove-btn");
        removeButton.dataset.action = "click->image-upload#remove";
        removeButton.dataset.index = index;

        // Append image and button to the container
        div.appendChild(img);
        div.appendChild(removeButton);
        previewContainer.appendChild(div);
      };

      reader.readAsDataURL(file);
    });
  }

  remove(event) {
    const index = event.target.dataset.index;
    const filesInput = this.element.querySelector('input[type="file"]');
    const filesArray = Array.from(filesInput.files);

    // Remove the file from the array
    filesArray.splice(index, 1);

    // Create a new DataTransfer object to update the input
    const dataTransfer = new DataTransfer();
    filesArray.forEach((file) => dataTransfer.items.add(file));

    // Update the input files and refresh previews
    filesInput.files = dataTransfer.files;
    this.preview({target: filesInput});
  }
}
