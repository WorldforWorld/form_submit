/**
 * Маска для телефона
 * @param {string} selector - селектор на input
 * @example maskPhone("#user-phone");
 */
export function maskPhone(selector) {
  [].forEach.call(document.querySelectorAll(selector), input => {
    function mask(event) {
      let keyCode;
      event.keyCode && (keyCode = event.keyCode);
      const pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____";
      let i = 0;
      let val = this.value.replace(/\D/g, "");
      let new_value = matrix.replace(/[_\d]/g, a =>
        i < val.length ? val.charAt(i++) : a
      );
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, a => "\\d{1," + a.length + "}")
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      ) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
}
