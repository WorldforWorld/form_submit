import { maskPhone } from "./maskPhone.js";
import { validateInputs } from "./validateInputs.js";

const regexPhone = /^\+7 \(\d{3}\) \d{3} \d{4}$/;
const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
const nameRegex = /^[A-Za-zА-Яа-яЁё\- ]+$/;
const textRegex = /^[A-Za-z0-9А-Яа-яЁё ]+$/;

maskPhone(".feedback-form__input--phone");

const form = document.querySelector("#form1");
validateInputs(".feedback-form__input--phone", regexPhone);
validateInputs(".feedback-form__input--email", regexMail);
validateInputs(".feedback-form__input--name", nameRegex);
validateInputs(".feedback-form__textarea", textRegex);

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const value of formData.values()) {
    if (value.trim().length === 0) {
      return;
    }
  }
  console.log("submit");
  form.reset();
});
