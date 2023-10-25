/**
 * Валидатор для инпутов
 * @param {string} selector - селектор на input
 * @param {RegExp} regex - регулярное выражение
 * @example validateInputs(".phone");
 */
export function validateInputs(selector, regex) {
  [].forEach.call(document.querySelectorAll(selector), input => {
    function valid(event) {
      setTimeout(() => {
        if (regex.test(event.target.value)) {
          event.target.parentNode.classList.remove("error");
        } else {
          event.target.parentNode.classList.add("error");
        }
      });
    }

    input.addEventListener("blur", valid, false);
    input.addEventListener("keydown", valid, false);
  });
}
