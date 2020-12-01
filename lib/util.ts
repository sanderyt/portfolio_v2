import { Markup } from "../types/typings";

/**
 * Function will return a string with capitalized first letter
 * @param word The sentence that has to be capitalised
 */

export const labelToSentence = (word: string): string => {
  const result = word.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

/**
 *
 * @param html HTML string to parse
 */

export const createMarkup = (html: string): Markup => {
  return { __html: html };
};
