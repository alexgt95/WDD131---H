// Get references to elements matching the HTML structure
//document.querySelector() is like pointing at something in that room and saying "that one — I want to be able to refer to it later." We store that reference in a variable (like cardFront or submitBtn) so we can use it later without having to go find it again every time.
const cardFront = document.querySelector('#cardFront');
const submitBtn = document.querySelector('.submit-btn');
// Creating the error message area
const errorContainer = document.createElement('div');
errorContainer.id = 'error-msg';
errorContainer.style.cssText = 'color:red; font-size:13px; grid-column:1/5; grid-row:4; align-self:center;';
document.querySelector('.form-container').appendChild(errorContainer); //It's essentially an invisible placeholder, waiting to be filled by displayError() when something goes wrong.

function displayError(msg) {
  // We use this throughout the code to either show an error or wipe the slate clean.
  errorContainer.textContent = msg;
}

function isCardNumberValid(number) {
  // Only accept this specific card number for now
  return number === '1234123412341234';
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');

  // Card number — strip spaces before validating
  const cardNumberInput = document.querySelector('#credit-card-number'); //we use querySelector to find the input by its ID and store a reference to it in cardNumberInput.
  const cardNum = cardNumberInput.value.replace(/\s+/g, '').trim(); //Then we take the value of that input, remove any spaces (in case the user entered them for readability), and trim any extra whitespace just in case to store in cardNum for validation.

  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits.\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid.\n';
  }

  // Expiration — grab MM and YY from the two exp-inputs
  const expInputs = document.querySelectorAll('.exp-inputs input');
  const expMonth = Number(expInputs[0].value);
  const expYear  = Number(expInputs[1].value);

  if (!expMonth || !expYear) {
    errorMsg += 'Please enter a valid expiration date.\n';
  } else {
    const currentDate = new Date();
    const fullExpYear = 2000 + expYear;

    if (
      fullExpYear < currentDate.getFullYear() ||
      (fullExpYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth() + 1)
    ) {
      errorMsg += 'Card is expired.\n';
    }
  }

  // Card holder name
  const cardHolder = document.querySelector('#card-holder-name').value.trim();
  if (!cardHolder) {
    errorMsg += 'Card holder name is required.\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  // Success
  document.querySelector('.form-container').innerHTML = '<h2>Thank you for your purchase.</h2>';
}

submitBtn.addEventListener('click', submitHandler);