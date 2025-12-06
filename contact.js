const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {
    if (emailInput.value.includes("@")) {
        emailError.textContent = "";
    }
    else {
        emailError.textContent = "Invalid Email";
    }
})


let changeBgColor = document.getElementsByClassName('detail-box');
for (let i = 0; i < changeBgColor.length; i++) {
    changeBgColor[i].addEventListener('mouseover', function () {

        changeBgColor[i].style.transform = 'translateY(-8px)';
        changeBgColor[i].style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
    })

    changeBgColor[i].addEventListener('mouseout', function () {

        changeBgColor[i].style.transform = 'translateY(0)';
    })
}