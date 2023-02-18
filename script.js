let num;
let str;
let result;
let message;
let int_to_roman_result;
let roman_to_int_result;
let int_to_roman_input_element = document.getElementById('int-to-roman-input');
let int_to_roman_result_element = document.getElementById('int-to-roman-result');
let roman_to_int_input_element = document.getElementById('roman-to-int-input');
let roman_to_int_result_element = document.getElementById('roman-to-int-result');
const int_to_roman_btn = document.getElementById('int-to-roman-btn');
const roman_to_int_btn = document.getElementById('roman-to-int-btn');

// Enable button when input field is no longer empty
function enableButtons() {
  if (int_to_roman_input_element.value !== '') {
    int_to_roman_btn.disabled = false;
  } else {
    int_to_roman_btn.disabled = true;
  }
  if (roman_to_int_input_element.value !== '') {
    roman_to_int_btn.disabled = false;
  } else {
    roman_to_int_btn.disabled = true;
  }
}

// Submit Arabic numeral input upon pressing "Enter"
int_to_roman_input_element.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    int_to_roman_btn.click();
  }
});

// Submit Roman numeral input upon pressing "Enter"
roman_to_int_input_element.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    roman_to_int_btn.click();
  }
});

// Convert integers to Roman numerals
function intToRoman() {
  num = int_to_roman_input_element.value;
  let roman = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };
  result = '';
  for (let key in roman) {
    while (num >= roman[key]) {
      result += key;
      num -= roman[key];
    }
  }
  num = int_to_roman_input_element.value;
  int_to_roman_result = result;
  message = `The Roman numeral version of <b>${num}</b> is <b>${int_to_roman_result}</b>`;
  int_to_roman_result_element.innerHTML = message;
  int_to_roman_result_element.style.display = 'block';
  // Empty input field upon submit
  int_to_roman_input_element.value = '';
  console.log(num);
  console.log(result);
  return result;
}

// Convert Roman numerals to integers
function romanToInt() {
  str = roman_to_int_input_element.value;
  function convertToUpperCase(str) {
    return str.toUpperCase();
  }
  let uppercase_str = convertToUpperCase(str);
  let roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  result = 0;
  for (let i = 0; i < uppercase_str.length; i++) {
    if (roman[uppercase_str[i]] < roman[uppercase_str[i + 1]]) {
      result -= roman[uppercase_str[i]];
    } else {
      result += roman[uppercase_str[i]];
    }
  }
  roman_to_int_result = result;
  message = `The Arabic numeral version of <b>${uppercase_str}</b> is <b>${roman_to_int_result}</b>`;
  roman_to_int_result_element.innerHTML = message;
  roman_to_int_result_element.style.display = 'block';
  // Empty input field upon submit
  roman_to_int_input_element.value = '';
  console.log(uppercase_str);
  console.log(roman_to_int_result);
  return result;
}
