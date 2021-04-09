  let copyRight = document.getElementById("copyright"),
    date = new Date(),
    copyrightYear = date.getFullYear();
  copyRight.innerText = copyrightYear;



  // Set the date we're counting down to
  var countDownDate = new Date("Apr 22,2021 12:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = "" + Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = "" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = "" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = "" + Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countDay").innerHTML = days;
    document.getElementById("countHrs").innerHTML = hours;
    document.getElementById("countMin").innerHTML = minutes;
    document.getElementById("countSec").innerHTML = seconds;
  }, 1000);


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


  // start verification if all input are filled
  function inputVer() {
    let nameInput = document.getElementById("name").value.trim(),
      emailInput = document.getElementById("email").value.trim(),
      numInput = document.getElementById("num").value.trim(),
      pwdInput = document.getElementById("pwd").value.trim(),
      userStateInput = document.getElementById("userState").value.trim(),
      onboardingBtn = document.getElementById("continueOnboarding"),
      secondPart = document.getElementsByClassName("secondPart"),
      firstPart = document.getElementsByClassName("firstPart");



    if (nameInput && emailInput && numInput && pwdInput && userStateInput === "") {
      // if these inputs ain't empty

      onboardingBtn.classList.remove("disabled-state");
      secondPart.classList.remove("displayNone");
      firstPart.classList.add("displayNone");
    }

    console.log(userStateInput);

    onboardingBtn.click
  }


  inputVer();