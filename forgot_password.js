document.getElementById("resetForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const successMessage = document.getElementById("successMessage");

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if the password meets the required conditions
    if (!passwordRegex.test(newPassword)) {
        successMessage.style.display = "block";
        successMessage.textContent = 
            "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.";
        successMessage.style.color = "red";
        return;
    }

    // Check if passwords match
    if (newPassword === confirmPassword) {
        successMessage.style.display = "block";
        successMessage.textContent = "Password reset successful!";
        successMessage.style.color = "green";

        // Clear the form
        document.getElementById("newPassword").value = "";
        document.getElementById("confirmPassword").value = "";
    } else {
        successMessage.style.display = "block";
        successMessage.textContent = "Passwords do not match. Please try again.";
        successMessage.style.color = "red";
    }
});
