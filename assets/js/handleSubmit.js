/**
 * Фукция отправки данных
 * @param {string} link - ссылка запроса
 * @param {selector} button - селектор, с которого нужно удалить класс
 * @param {string} classLoad - класс который нужно удалить из кнопки
 * @example
 * const submitButton = document.querySelector('.submit_button');
 * nandleSubmit(
 *   'https://example.com/endpoint',
 *   formData,
 *   submitButton,
 *   'js-loading'
 * );
 */
export function handleSubmit(link, formData, button, classLoad) {
  fetch(link, {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      button.classList.remove(classLoad);
      console.log("Your message successfully sent: ", data);
    })
    .catch(error => {
      console.log("error: ", error);
    });
}
