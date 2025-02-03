import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
  changePic(e) {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById('profileImage').src = event.target.result;
      };
      reader.readAsDataURL(file);
    }

  }
}
