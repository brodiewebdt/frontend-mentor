$(document).ready(function () {
  $("#btn-submit").click(function () {
    $(".error").hide()
    let messageEl = document.getElementById("errorMessage")
    var hasError = false
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

    var emailaddressVal = $("#email").val()
    if (emailaddressVal == "") {
      messageEl.textContent =
        "Whoops! It looks like you forgot to add your email"
      document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)"
      hasError = true
    } else if (!emailReg.test(emailaddressVal)) {
      messageEl.textContent = "Please provide a valid email address"
      document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)"
      hasError = true
    }

    if (hasError == true) {
      return false
    }
  })
})
