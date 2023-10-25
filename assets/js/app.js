import { handleSubmit } from "./handleSubmit.js";
import { maskPhone } from "./maskPhone.js";
import { validateInputs } from "./validateInputs.js";

const REGEXPHONE = /^\+7 \(\d{3}\) \d{3} \d{4}$/;
const REGEXMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
const REGEXNAME = /^[A-Za-zА-Яа-яЁё\- ]+$/;
const REGEXTEXT = /^[A-Za-z0-9А-Яа-яЁё ]+$/;

validateInputs(".feedback-form__input--phone", REGEXPHONE);
validateInputs(".feedback-form__input--email", REGEXMAIL);
validateInputs(".feedback-form__input--name", REGEXNAME);
validateInputs(".feedback-form__textarea", REGEXTEXT);

maskPhone(".feedback-form__input--phone");

const form = document.querySelector("#form1");
const LINKFORSUBMITDATA = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", event => {
  event.preventDefault();

  const button = form.querySelector(".feedback-form__button");
  const checkbox = form.querySelector(".feedback-form__checkbox");
  if (!checkbox.checked) {
    return;
  }

  const fields = form.querySelectorAll(".feedback-form__field");
  for (const field of fields) {
    if (field.classList.contains("error")) {
      return;
    }
  }

  const formData = new FormData(form);
  for (const value of formData.values()) {
    if (value.trim().length === 0) {
      return;
    }
  }

  button.classList.add("js-loading");
  handleSubmit(LINKFORSUBMITDATA, formData, button, "js-loading");

  form.reset();
});
