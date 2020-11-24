/**
 * Function will return a string with capitalized first letter
 * @param word The sentence that has to be capitalised
 */

export const labelToSentence = (word: string): string => {
  const result = word.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};
