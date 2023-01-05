function validateEmail() {
  // Get the value of the email field
  const email = document.getElementById("email").value;
  const form = document.getElementById("form");

  // Check if the email is in lower case
  if (email.toLowerCase() !== email) {
    // If the email is not in lower case, show an error message
    const errorMsg = "Please your email address should be in lower casing"
    document.querySelector(".form-error").appendChild(document.createElement("p")).innerHTML = errorMsg;
    
    preventDefault();
    // Prevent the form from being submitted
    return false;
  }

  // If the email is in lower case, the form can be submitted
  return true;
}
