function displayTheLoggedInUsername() {
  var loggedInUserDivs = document.getElementsByClassName('loggedInUsernameDiv');
  var loggedInUsername = localStorage.getItem("loggedInAs");
  for(var i = 0; i < loggedInUserDivs.length; i++){
      var loggedInUserDiv = loggedInUserDivs[i];
      if (!(loggedInUsername === "")) {
          loggedInUserDiv.innerText = "Hi, " + loggedInUsername + "!";
          document.getElementById("logoutButton").style.display = "inline-block";
          document.getElementById("loginButton").style.display = "none";
      } else {
          document.getElementById("logoutButton").style.display = "none";
      }
  }
}
  