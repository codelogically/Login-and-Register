const register = document.getElementById("register"),
  login = document.getElementById("login"),
  login_form = document.getElementById("login_form"),
  register_form = document.getElementById("register_form"),
  title = document.getElementById("title"),
  pwShowPw = document.querySelectorAll(".showHidePw"),
  pwField = document.querySelectorAll(".password");

register.onclick = function () {
  login_form.classList.add("active");
  register_form.classList.add("active");
  title.innerHTML = "Register";
};

login.onclick = function () {
  login_form.classList.remove("active");
  register_form.classList.remove("active");
  title.innerHTML = "Login";
};

pwShowPw.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwField.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowPw.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwField.type = "password";

        pwShowPw.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});
