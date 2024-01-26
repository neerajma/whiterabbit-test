// Header section starts
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 151) {
        $(".treva-header").addClass("sticky");
        $("body").addClass("sticky-soomth");
    } else {
        $(".treva-header").removeClass("sticky");
        $("body").removeClass("sticky-soomth");
    }
});
// Header section ends

// Slider
$(document).ready(function () {

    $('.treva-main-bg__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
    });

});


// Email validation starts
const contactForm = document.getElementById("contactForm"),
    submitBtn = document.getElementById("submitBtn"),
    fullName = document.getElementById("inputName"),
    emailId = document.getElementById("inputEmail"),
    phoneNo = document.getElementById("inputPhone");


let isNameValid = false,
    isPhoneValid = false,
    isEmailValid = false;

submitBtn.setAttribute("disabled", "true");

fullName.addEventListener("keyup", checkNameValid);
emailId.addEventListener("keyup", checkEmailValid);
phoneNo.addEventListener("keyup", checkPhoneValid);


function checkNameValid() {
    if (fullName.value == null || fullName.value == "") {

        fullName.classList.add("error");
        isNameValid = false;
    }
    else {
        fullName.classList.remove("error");
        isNameValid = true;
    }
    checkSubmitStatus();
}

function checkPhoneValid() {
    let phPattern = /[1-9]{1}[0-9]{9}/;
    if (phoneNo.value.length > 10) {
        phoneNo.value = phoneNo.value.substr(0, 10);
    }
    if (!(phPattern.test(phoneNo.value)) || (phoneNo.value == "") || (phoneNo.value.length != 10)) {
        phoneNo.classList.add("error");
        isPhoneValid = false;
    }
    else {
        phoneNo.classList.remove("error");
        isPhoneValid = true;
    }
    checkSubmitStatus();
}

function checkEmailValid() {
    let emailIdvalue = emailId.value.includes("@beinex.com");
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(emailPattern.test(emailId.value)) || emailId.value == "" || emailId.value == null || (emailId.value == false)) {
        emailId.classList.add("error");
        isEmailValid = false;
    }
    else {
        emailId.classList.remove("error");
        isEmailValid = true;
    }
    checkSubmitStatus();
}
function checkSubmitStatus() {
    if (isNameValid && isEmailValid && isPhoneValid) {
        submitBtn.removeAttribute("disabled");
    }
    else {
        submitBtn.setAttribute("disabled", "true");
    }
}
// Email validation ends

