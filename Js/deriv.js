const modal = document.getElementById('modal')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const formControl = document.querySelectorAll(".form-control")

modal.addEventListener("submit", (e) => {
    // console.log("love");
    e.preventDefault()
})


const errorMessage = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.document.querySelector("small")

    errorDisplay.textContent = message;
    formControl.classList.add("error");
    formControl.classList.remove("sucesss")
}