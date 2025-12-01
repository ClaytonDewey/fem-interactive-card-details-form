import { useState } from 'react';
import { Input } from '.';
import { formatCardNumber, validateCardNumber, validateLuhn } from '../util';
import { useCardStore } from '../store/useCardStore';

const CardNumberInput = () => {
  const [cccardNumber, setCcCardNumber] = useState('');
  const [validationError, setValidationError] = useState('');
  const [cardType, setCardType] = useState('');

  const { setCardNumber } = useCardStore();

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCcCardNumber(value);
    setCardNumber(formatCardNumber(value));

    // Perform validation
    const { isValid: formatValid, cardType: detectedCardType } =
      validateCardNumber(value);
    const luhnValid = validateLuhn(value);

    if (!formatValid) {
      setValidationError('Invalid card format or type.');
      setCardType('');
    } else if (!luhnValid) {
      setValidationError('Invalid card number (Luhn algorithm failed).');
      setCardType(detectedCardType || '');
    } else {
      setValidationError('');
      setCardType(detectedCardType || '');
    }
  };
  return (
    <div className='form-group'>
      <label htmlFor='cardNumber'>Card Number</label>
      <Input
        className='form-control'
        type='text'
        id='cardNumber'
        value={cccardNumber}
        onChange={handleCardNumberChange}
        placeholder='e.g. 1234 5678 9123 0000'
      />
      {cardType && <p>Card Type: {cardType}</p>}
      {validationError && <p className='form-error'>{validationError}</p>}
    </div>
  );
};
export default CardNumberInput;
