const PATTERN_NAME = /^[a-zA-Z ]+$/;
const PATTERN_ADDRESS = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PATTERN_CARD_NUMBER = /^[0-9- ]+$/;
const PATTERN_CARD_DATE = /^[0-9 /]+$/;
const PATTERN_CARD_VCC = /^[0-9]+$/;

const validate = account => {
  const { name, email, cardNumber, expiryDate, cvvCode } = account;
  let element = document.querySelectorAll(".add-account-label");

  element.forEach(el => (el.className = "add-account-label"));

  if (!name || !PATTERN_NAME.test(name) || name.length < 2) {
    element[0].className = "add-account-label add-account-error";
  }
  if (!email || !PATTERN_ADDRESS.test(email) || email.length < 2) {
    element[1].className = "add-account-label add-account-error";
  }
  if (
    !cardNumber ||
    !PATTERN_CARD_NUMBER.test(cardNumber) ||
    cardNumber.length < 16
  ) {
    element[3].className = "add-account-label add-account-error";
  }
  if (!expiryDate || !PATTERN_CARD_DATE.test(expiryDate)) {
    element[4].className = "add-account-label add-account-error";
  }
  if (!cvvCode || !PATTERN_CARD_VCC.test(cvvCode) || cvvCode.length < 3) {
    element[5].className = "add-account-label add-account-error";
  }

  let checkElement = [];
  element.forEach(el => {
    if (el.className.includes("add-account-error")) {
      checkElement.push(false);
    }
  });

  return checkElement.length <= 0;
};

export default validate;
