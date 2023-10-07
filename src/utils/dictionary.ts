import { dictionary } from "../assets/dictionary";

const VOWELS = ["a", "e", "i", "o", "u"];

function removeNonAlphabets(inputString:string) {
  return inputString ? inputString.match(/[a-zA-Z]+/g).join("") : '';
}

function isMatch(input, word) {
  for (let i = 0; i < input.length; i++) {
    if (!VOWELS.includes(input[i]) && input[i] !== word[i]) {
      return false;
    }
  }
  return true;
}

export function lookUpDictionary(input:string) {

  try {
    const purifiedWord = removeNonAlphabets(input);
    const searchDictionary = dictionary[purifiedWord?.length];

    if (!searchDictionary) {
      console.log("No dictionary for the given length");
      return null;
    }

    const finalResults = searchDictionary.filter((dictWord) =>
      isMatch(purifiedWord, dictWord)
    );

    if (finalResults.length === 0) {
      console.log("No matching word found");
      return null;
    }

    if (finalResults.includes(purifiedWord)) {
      return purifiedWord;
    }

    return finalResults[Math.floor(Math.random() * finalResults.length)];
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
