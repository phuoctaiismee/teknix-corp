/**
 * Remove bold Unicode characters from a string
 * @param text - The input string to process
 * @returns A new string with bold Unicode characters removed
 */
export const removeBoldUnicode = (text: string) => {
  return text.replace(/[\u{1D400}-\u{1D7FF}]/gu, ""); // Loại bỏ các ký tự từ dải Unicode in đậm
};
