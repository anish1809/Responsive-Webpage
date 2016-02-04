/*window.onload = init;

function init() {
   // Bind "onsubmit" event handler to the "submit" button
   //document.getElementById("Signup").onsubmit = validateForm();
   // Bind "onclick" event handler to "reset" button
   document.getElementById("btnReset").onclick = clearForm();
   // Set initial focus
   //document.getElementById("firstName").focus();
}*/

function validateForm() {
      // return false would prevent default submission
      return (isNotEmpty(firstName, "Please enter your name!", firstNameError)
           &&isNotEmpty(lastName, "Please enter your name!", lastNameError)
           && isLengthMinMax(studentId, 9, 9, "Please enter a 9-digit student ID!", zipcodeError)
           && isNumeric(studentId, "Please enter a valid student ID!", studentIdError)
           && isChecked("occupation", "Please check your occupation!", occupationError)
           && isNotEmpty(city, "Please enter your city!", cityError)
           && isNumeric(zipcode, "Please enter a 5-digit zip code!", zipcodeError)
           && isLengthMinMax(zipcode, 5, 5, "Please enter a 5-digit zip code!", zipcodeError)
           && isNumeric(phone, "Please enter a valid phone number!", phoneError)
           && isLengthMinMax(phone, 10, 10, "Please enter a 10-digit phone number", phoneError)
           && isValidEmail(email, "Enter a valid email!", emailError)
           && isValidPassword(password, "Password shall be 6-8 characters!", passwordError)
           && verifyPassword(password, pwVerified, "Different from new password!",pwVerifiedError)
      );
   }


function postValidate(isValid, errMsg, errElm, inputElm) {
   if (!isValid) {
      // Show errMsg on errElm, if provided.
      if (errElm !== undefined && errElm !== null
            && errMsg !== undefined && errMsg !== null) {
         errElm.innerHTML = errMsg;
      }
      // Set focus on Input Element for correcting error, if provided.
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.add("errorBox");  // Add class for styling
         inputElm.focus();
      }
   } else {
      // Clear previous error message on errElm, if provided.
      if (errElm !== undefined && errElm !== null) {
         errElm.innerHTML = "";
      }
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.remove("errorBox");
      }
   }
}

function isNotEmpty(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim() !== "");
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

/* Validate that input value contains one or more digits */
function isNumeric(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^\d+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

/* Validate that input value contains only one or more letters */
function isAlphabetic(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^[a-zA-Z]+$/) !== null) ;
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

/* Validate that input value contains one or more digits or letters */
function isAlphanumeric(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^[0-9a-zA-Z]+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

/* Validate that input value length is between minLength and maxLength */
function isLengthMinMax(inputElm, minLength, maxLength, errMsg, errElm) {
   var inputValue = inputElm.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

function isChecked(inputName, errMsg, errElm) {
   var elms = document.getElementsByName(inputName);
   var isChecked = false;
   for (var i = 0; i < elms.length; ++i) {
      if (elms[i].checked) {
         isChecked = true;
         break;
      }
   }
   postValidate(isChecked, errMsg, errElm, null);  // no focus element
   return isChecked;
}

// Validate that input value is a valid email address
function isValidEmail(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}


// Validate password, 6-8 characters of [a-zA-Z0-9_]
function isValidPassword(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^\w{6,8}$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

// Verify password.
function verifyPassword(pwElm, pwVerifiedElm, errMsg, errElm) {
   var isTheSame = (pwElm.value === pwVerifiedElm.value);
   postValidate(isTheSame, errMsg, errElm, pwVerifiedElm);
   return isTheSame;
}

function clearForm() {
   // Remove class "errorBox" from input elements
   var elms = document.querySelectorAll('.errorBox');  // class
   for (var i = 0; i < elms.length; i++) {
      elms[i].classList.remove("errorBox");
   }

   // Remove previous error messages
   elms = document.querySelectorAll('[id$="Error"]');  // id ends with Error
   for (var i = 0; i < elms.length; i++) {
      elms[i].innerHTML = "";
   }

   // Set initial focus
 //  document.getElementById("firstName").focus();
}