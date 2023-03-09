/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

// password

// get dom object
const resultget = document.getElementById("result");
const lengthget = document.getElementById("length");
const upperget = document.getElementById("uppercase");
const lowerget = document.getElementById("lowercase");
const numberget = document.getElementById("numbers");
const symbolget = document.getElementById("symbols");
const generateget = document.getElementById("btn");
const clipboardget = document.getElementById("copyIcon");

// make it at the object
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateget.addEventListener("click", () => {
  const length = +lengthget.value;
  const hasLower = lowerget.checked;
  const hasUpper = upperget.checked;
  const hasNumber = numberget.checked;
  const hasSymbol = symbolget.checked;

  resultget.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  const typesCount = typesArr.length;

  // Doesn't have a selected type
  if (typesCount === 0) {
    return "";
  }

  // Add random characters until the password is long enough
  while (generatedPassword.length < length) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunction[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Upper case
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Number case
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 48;
}

// Symbol case
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
