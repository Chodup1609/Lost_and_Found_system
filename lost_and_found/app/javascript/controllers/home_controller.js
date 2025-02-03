import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
// Function to open the sidebar
  openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  }

// Function to close the sidebar
  closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

// Function to handle logout
  logout() {
    // Optionally, you can clear session data here if needed
    // For example: sessionStorage.clear(); or localStorage.clear();

    // Redirect to the login page and replace the current history entry to prevent going back
    window.location.replace("login.html");  // Replaces the current page in the history
  }
}
