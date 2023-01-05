function validateEmail() {
  // Get the value of the email field
  const email = document.getElementById("email").value;
  const form = document.getElementById("form");
  const errorParagraph = document.querySelector(".form-error");
  if (errorParagraph.querySelector('p') !== null){
    const paragraph = errorParagraph.querySelector('p');
    errorParagraph.removeChild(paragraph);
    // form.removeAttribute('onsubmit','preventDefault()');
  } 
  
  // Check if the email is in lower case
  if (email.toLowerCase() !== email) {
    // If the email is not in lower case, show an error message
    const errorMsg = "Please your email address should be in lower casing"
    errorParagraph.appendChild(document.createElement("p")).innerHTML = errorMsg;
    // Prevent the form from being submitted
    // form.setAttribute('onsubmit','preventDefault()');
    // form.setAttribute('onsubmit','validateEmail()');
    alert('lets see');
    return false;
  }

  // If the email is in lower case, the form can be submitted
  return true;
}
