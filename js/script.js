

// Authentication pages
function togglePass() {
  let pwd = document.getElementById("pwd"),
    displayText = document.getElementById("hidePass");
  if (pwd.type === "password") {
    pwd.type = "text";
    displayText.innerText = "Hide";
  } else {
    pwd.type = "password";
    displayText.innerText = "Show";
  }
}

// Going back
function back() {
  window.history.back();
}


/* // start verification if all input are filled
function inputVer() {
  let nameInput = document.getElementById("name").value.trim(),
    emailInput = document.getElementById("email").value.trim(),
    numInput = document.getElementById("num").value.trim(),
    pwdInput = document.getElementById("pwd").value.trim(),
    userStateInput = document.getElementById("userState").value.trim(),
    onboardingBtn = document.getElementById("continueOnboarding"),
    secondPart = document.getElementById("secondPart"),
    firstPart = document.getElementById("firstPart");



  if (nameInput && emailInput && numInput && pwdInput && userStateInput === "") {
    // if these inputs ain't empty

    onboardingBtn.classList.remove("disabled-state");
    onboardingBtn.classList.add("enabled-state");
  }

  console.log(userStateInput);

  onboardingBtn.click(function () {
    secondPart.classList.remove("displayNone");
    firstPart.classList.add("displayNone");
  })
} */


// inputVer();




// Authentication pages
function togglePass() {
  let pwd = document.getElementById("pwd"),
    displayText = document.getElementById("hidePass");
  if (pwd.type === "password") {
    pwd.type = "text";
    displayText.innerText = "Hide";
  } else {
    pwd.type = "password";
    displayText.innerText = "Show";
  }
}

$("#continueOnboarding").click(function () {

  let onboardingBtn = document.getElementById("continueOnboarding"),
    secondPart = document.getElementById("secondPart"),
    firstPart = document.getElementById("firstPart"),
    submitBtn = document.getElementById("submitBtn")


  // What to happen to first part
  firstPart.classList.add("displayNone");



  // What to happen to second part
  secondPart.classList.remove("displayNone");
  secondPart.classList.add("slideInUp");

  //What to do to onboarding btn
  continueOnboarding.classList.add("fadeOut")

  //What to do to submit btn
  submitBtn.classList.remove("displayNone")

})