var main=document.querySelector(".form"),search=main.querySelector(".form_button"),form=main.querySelector("form");search.addEventListener("click",function(e){e.preventDefault(),form.classList.contains("form_close")?form.classList.remove("form_close"):form.classList.add("form_close")});