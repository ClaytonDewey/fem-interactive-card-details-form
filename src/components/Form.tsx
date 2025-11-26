import { useState } from 'react';
import { Input, Button } from '.';
import { useCardStore } from '../store/useCardStore';
import { formatCardNumber } from '../util';

const Form = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cccardNumber, setCcCardNumber] = useState('');

  const { setCardHolder, setCardNumber } = useCardStore();

  const handleCardHolderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardHolderName(e.target.value);
    setCardHolder(e.target.value);
  };

  const handleCcCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove spaces
    setCcCardNumber(value);
    setCardNumber(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCardHolder(cardHolderName);
    setCardNumber(cccardNumber);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form-group-fieldset'>
        <legend className='sr-only'>Card Information</legend>
        <div className='form-group'>
          <label htmlFor='cardholder-name'>Cardholder Name</label>
          <Input
            id='cardholder-name'
            className='form-control'
            type='text'
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            placeholder='e.g. Jane Appleseed'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='cardholder-name'>Card Number</label>
          <Input
            id='cardholder-name'
            className='form-control'
            type='text'
            value={formatCardNumber(cccardNumber)}
            onChange={handleCcCardNumberChange}
            placeholder='e.g. 1234 5678 9123 0000'
            maxLength={19}
          />
        </div>
      </fieldset>
      <Button type='submit' className='btn btn-primary'>
        Confirm
      </Button>
    </form>
  );
};
export default Form;
