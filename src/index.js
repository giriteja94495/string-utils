import {morseCodeMap,reverseMorseCodeMap,formatPhoneNumber} from './constants';
function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toTitleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

function wordWrap(str, maxLineLength) {
  const words = str.split(' ');
  let result = '';
  let lineLength = 0;
  for (const word of words) {
    if (lineLength + word.length > maxLineLength) {
      result += '\n' + word + ' ';
      lineLength = word.length + 1;
    } else {
      result += word + ' ';
      lineLength += word.length + 1;
    }
  }
  return result.trim();
}

function truncateString(str, maxLength){
  if(str.length <= maxLength) return str;
  else return str.slic(0,maxLength) + '...';
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Convert string to Camel Case
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

// Convert string to Snake Case
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, char => '_' + char.toLowerCase());
}

// Convert string to Pascal Case
function toPascalCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase()).replace(/^\w/, c => c.toUpperCase());
}

function extractURLs(str) {
  return str.match(/(?:https?:\/\/|www\.)[^\s]+/g) || [];
}


function textToMorseCode(text) {
  return text.split('').map(char => morseCodeMap[char.toUpperCase()] || char).join(' ');
}

function morseCodeToText(code) {
  return code.split(' ').map(sequence => reverseMorseCodeMap[sequence] || sequence).join('');
}

function stripHTMLTags(str) {
  return str.replace(/<[^>]*>/g, '');
}

function countWords(str) {
  // Remove leading and trailing whitespace, then split by one or more spaces
  const words = str.trim().split(/\s+/);
  return words.length;
}


function generatePassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function formatPhoneNumber(countryCode, phoneNumber) {
  // Remove non-numeric characters from the phone number
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Find the formatting rule based on the country code
  const rule = Object.keys(formattingRules).find(code => countryCode.startsWith(code));

  if (rule) {
    // Apply the formatting rule to the cleaned phone number
    const formattedPhoneNumber = cleanedPhoneNumber.replace(new RegExp(rule + '([0-9]{3})([0-9]{3})([0-9]{4})'), formattingRules[rule]);
    return formattedPhoneNumber;
  } else {
    // Return the original phone number if no formatting rule is found
    return phoneNumber;
  }
}








module.exports = {
  reverseString,
  capitalizeString,
  toTitleCase,
  wordWrap,
  truncateString,
  generateRandomString,
  toCamelCase,
  toSnakeCase,
  toPascalCase,
  extractURLs,
  textToMorseCode,
  morseCodeToText,
  stripHTMLTags,
  countWords,
  generatePassword,
  formatPhoneNumber,
};