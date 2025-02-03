import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["newFoundItemFields", "existingLostItemFields"];

  toggleFields(event) {
    const selectedType = event.target.value;

    if (selectedType === "new") {
      this.newFoundItemFieldsTarget.style.display = "block";
      this.existingLostItemFieldsTarget.style.display = "none";

      // Enable required attributes for new item fields
      this.newFoundItemFieldsTarget.querySelectorAll("[required]").forEach((field) => {
        field.setAttribute("required", "required");
      });

      // Disable required attributes for existing item fields
      this.existingLostItemFieldsTarget.querySelectorAll("[required]").forEach((field) => {
        field.removeAttribute("required");
      });
    } else {
      this.newFoundItemFieldsTarget.style.display = "none";
      this.existingLostItemFieldsTarget.style.display = "block";

      // Enable required attributes for existing item fields
      this.existingLostItemFieldsTarget.querySelectorAll("[required]").forEach((field) => {
        field.setAttribute("required", "required");
      });

      // Disable required attributes for new item fields
      this.newFoundItemFieldsTarget.querySelectorAll("[required]").forEach((field) => {
        field.removeAttribute("required");
      });
    }
  }
}
