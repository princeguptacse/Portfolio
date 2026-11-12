var themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "Light";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
});

var menuBtn = document.getElementById("menu-btn");
var navList = document.getElementById("nav-list");

menuBtn.addEventListener("click", function () {
  navList.classList.toggle("show");
});

var navLinks = document.querySelectorAll(".nav-link");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navList.classList.remove("show");
  });
}

var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  var current = "home";

  for (var i = 0; i < sections.length; i++) {
    if (window.scrollY >= sections[i].offsetTop - 120) {
      current = sections[i].id;
    }
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    current = "contact";
  }

  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove("active");
    if (navLinks[j].getAttribute("href") === "#" + current) {
      navLinks[j].classList.add("active");
    }
  }
});

var detailBtns = document.querySelectorAll(".details-btn");

for (var k = 0; k < detailBtns.length; k++) {
  detailBtns[k].addEventListener("click", function () {
    var more = this.nextElementSibling;

    if (more.style.display === "block") {
      more.style.display = "none";
      this.textContent = "View Details";
    } else {
      more.style.display = "block";
      this.textContent = "Hide Details";
    }
  });
}

var form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var messageError = document.getElementById("message-error");
  var success = document.getElementById("success");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  success.textContent = "";

  var valid = true;

  if (name === "") {
    nameError.textContent = "Please enter your name";
    valid = false;
  }

  if (email === "") {
    emailError.textContent = "Please enter your email";
    valid = false;
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    emailError.textContent = "Please enter a valid email";
    valid = false;
  }

  if (message === "") {
    messageError.textContent = "Please write a message";
    valid = false;
  } else if (message.length < 10) {
    messageError.textContent = "Message should be at least 10 characters";
    valid = false;
  }

  if (valid) {
    success.textContent = "Thank you " + name + "! Your message was sent.";
    form.reset();
  }
});
