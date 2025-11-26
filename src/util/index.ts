export const formatCardNumber = (number: string) => {
  return number.replace(/(.{4})/g, '$1 ').trim();
};
