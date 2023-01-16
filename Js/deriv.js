const modal = document.getElementById('modal')
const email = document.getElementById('email')
const passWord = document.getElementById('password')
const passWord2 = document.getElementById('password2')
const formControl = document.querySelectorAll(".form-control")

modal.addEventListener("submit", (e) => {
    // console.log("love");
    e.preventDefault()

    emailValidation()
    passwordValidation()
})


const errorMessage = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector("small");

    errorDisplay.textContent = message;
    formControl.classList.add("error");
    formControl.classList.remove("sucesss")
}

const sucesssMessage = (element) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector("small")

    errorDisplay.textContent = ""
    formControl.classList.remove("error")
    formControl.classList.add("success")
}

//**********  inputValidation section ***********//

const emailValidation = () => {
    const emailValue = email.value.trim()
    console.log("hey");
    if (emailValue === "") {
        errorMessage(email, "Email Address Is Required")
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        errorMessage(email, "email address must be valid")
    } else {
        sucesssMessage(email)
        localStorage.setItem("email", email.value)
    }
}

const passwordValidation = () => {
    const passwordValue = passWord.value.trim()
    console.log("password");

    if (passwordValue === "") {
        errorMessage(passWord, "A valid password is required")
    } else if (passwordValue.length < 8 || passwordValue.length > 15) {
        errorMessage(passWord, "must between 8 and 15 characters must be unique")
    } else {
        sucesssMessage(passWord)
        localStorage.setItem("passWord", passWord.value)
    }
}

const passWord2Validation = () => {
    const passwordValue = passWord.value.trim()
    const password2Value = passWord2.value.trim()

    if (password2Value === "") {
        errorMessage(passWord2, "A valid confirmed password is required")
    } else if (password2Value !== passwordValue) {
        errorMessage(passWord2, "must match password field value")
    } else {
        sucesssMessage(passWord2)
        localStorage.setItem("password", passWord2.value)
    }
}

//********** validationTimeout**********//

email.addEventListener("change", () => {
    setTimeout(() => emailValidation(), 2000)
})

passWord.addEventListener("change", () => {
    setTimeout(() => passwordValidation(), 2000)
})

passWord2.addEventListener("change", () => {
    setTimeout(() => passWord2Validation(), 2000)
})