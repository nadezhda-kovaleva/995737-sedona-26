var main = document.querySelector(".form");
var search = main.querySelector(".form_button");
var form = main.querySelector("form");

search.addEventListener("click", function (event) {
  event.preventDefault();
  if (form.classList.contains("form_close")) {
    form.classList.remove("form_close");
  } else {
    form.classList.add("form_close");
  }

});
