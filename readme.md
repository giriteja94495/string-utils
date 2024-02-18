# easy-string-utils
## A comprehensive library of string utility functions for JavaScript/TypeScript.

### Installation
#### You can install "easy-string-utils" via npm:

```npm install easy-string-utils```

## Usage of various functions:

```
import { 
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
  formatPhoneNumber
} from 'easy-string-utils';

// Example usage for each function

// Reverse a string
console.log(reverseString("hello")); // Output: "olleh"

// Capitalize the first letter of a string
console.log(capitalizeString("hello world")); // Output: "Hello world"

// Convert a string to title case even the above function does its purpose i added as it is easily readable
console.log(toTitleCase("hello world")); // Output: "Hello World"

// Wrap text to a specified maximum line length
console.log(wordWrap("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 20));
// Output:
// "Lorem ipsum dolor\nsit amet, consectetur\nadipiscing elit."

// Truncate a string to a specified maximum length
console.log(truncateString("Lorem ipsum dolor sit amet", 10)); // Output: "Lorem ipsu..."

// Generate a random string of a specified length
console.log(generateRandomString(8)); // Output: e.g., "oRb2Yv7A"

// Convert a string to Camel Case
console.log(toCamelCase("hello_world")); // Output: "helloWorld"

// Convert a string to Snake Case
console.log(toSnakeCase("helloWorld")); // Output: "hello_world"

// Convert a string to Pascal Case
console.log(toPascalCase("hello-world")); // Output: "HelloWorld"

// Extract URLs from a string
console.log(extractURLs("Visit our website at https://example.com for more information."));
// Output: ["https://example.com"]

// Convert text to Morse Code
console.log(textToMorseCode("hello")); // Output: ".... . .-.. .-.. ---"

// Convert Morse Code to text
console.log(morseCodeToText(".... . .-.. .-.. ---")); // Output: "hello"

// Strip HTML tags from a string
console.log(stripHTMLTags("<p>Hello, <b>world</b></p>")); // Output: "Hello, world"

// Count words in a string
console.log(countWords("Hello world")); // Output: 2

// Generate a random password
console.log(generatePassword(10)); // Output: e.g., "xY2!zB#8qR"

// Format a phone number based on the country code , you can pass country code in the first argument and second argument a phone number. 
console.log(formatPhoneNumber('+1', '1234567890')); // Output: "(123) 456-7890"

```