export const formatCardNumber = (number: string) => {
  return number.replace(/(.{4})/g, '$1 ').trim();
};

export const validateCardNumber = (
  cardNumber: string
): { isValid: boolean; cardType?: string } => {
  // Remove any non-digit characters
  const cleanCardNumber = cardNumber.replace(/\D/g, '');

  // Regex patterns for common card types
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^5[1-5][0-9]{14}$/;
  const amexRegex = /^3[47][0-9]{13}$/;
  const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

  if (visaRegex.test(cleanCardNumber)) {
    return { isValid: true, cardType: 'Visa' };
  } else if (mastercardRegex.test(cleanCardNumber)) {
    return { isValid: true, cardType: 'Mastercard' };
  } else if (amexRegex.test(cleanCardNumber)) {
    return { isValid: true, cardType: 'American Express' };
  } else if (discoverRegex.test(cleanCardNumber)) {
    return { isValid: true, cardType: 'Discover' };
  }

  return { isValid: false };
};

export const validateLuhn = (cardNumber: string): boolean => {
  const cleanCardNumber = cardNumber.replace(/\D/g, '');
  let sum = 0;
  let double = false;

  for (let i = cleanCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanCardNumber.charAt(i), 10);
    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    double = !double;
  }
  return sum % 10 === 0;
};
