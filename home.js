// Function to open the sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

// Function to close the sidebar
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.body.style.backgroundColor = "white";
}

// Function to handle logout
function logout() {
    // Optionally, you can clear session data here if needed
    // For example: sessionStorage.clear(); or localStorage.clear();

    // Redirect to the login page and replace the current history entry to prevent going back
    window.location.replace("login.html");  // Replaces the current page in the history
}

// Prevent going back after logout by modifying history
window.history.forward(); // This will skip back to the previous page
