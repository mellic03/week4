$( document ).ready(() => {
  $("#loginform").submit((event) => {
    event.preventDefault();
    ajaxPost();
  })
});

function ajaxPost() {
  let formData = {
    email: $("#email").val(),
    upwd: $("#upwd").val(),
  }
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: window.location + "api/login",
    data: JSON.stringify(formData),
    dataType: "json",
    success(customer) {

      if (customer.valid) {
        $("#loginform").removeClass("none");
        $("#loginform").removeClass("fail");
        $("#loginform").addClass("success");
        $("#errormsg").removeClass("showmessage");
        $("#errormsg").addClass("hidemessage");
      }
      else {
        $("#loginform").removeClass("none");
        $("#loginform").removeClass("success");
        $("#loginform").addClass("fail");
        $("#errormsg").removeClass("hidemessage");
        $("#errormsg").addClass("showmessage");
      }
      $("#postResultDiv").html(
        "<p>" + "Post Successfully <br>" + "Email Address: "
        + customer.email + "</br>" + "Password: " + customer.upwd
        + "</br>" + "Valid User: " + customer.valid + "</p>");
    },
    error(e) {
      alert("Error!");
      console.log("Error: " + e);
    }
  });
  resetData();
}

function resetData() {
  $("#email").val("");
  $("#upwd").val("");
}