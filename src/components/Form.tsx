import { useState, useRef } from 'react';
import { Input, Button, CardNumberInput } from '.';
import { useCardStore } from '../store/useCardStore';

const Form = () => {
  const [cardHolderName, setCardHolderName] = useState('');

  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [cvcNum, setCvcNum] = useState<string>('');

  const { setCardHolder, setCardNumber, setExpMonth, setExpYear, setCvc } =
    useCardStore();

  const handleCardHolderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardHolderName(e.target.value);
    setCardHolder(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); // Allow only digits, max 2 chars
    setMonth(value);
    setExpMonth(value);

    if (value.length === 2 && yearInputRef.current) {
      yearInputRef.current.focus();
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); // Allow only digits, max 2 chars
    setYear(value);
    setExpYear(value);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4); // Allow only digits, max 4 chars
    setCvcNum(value);
    setCvc(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCardHolder(cardHolderName);
    setExpMonth(month);
    setExpYear(year);
    setCvc(cvcNum);
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

        <CardNumberInput />

        <div className='form-group-inline'>
          <fieldset>
            <legend>Exp. Date (MM/YY)</legend>
            <div className='form-group'>
              <label htmlFor='expiryMonth' className='sr-only'>
                Month
              </label>
              <input
                className='form-control date'
                id='expiryMonth'
                type='text'
                placeholder='MM'
                maxLength={2}
                value={month}
                onChange={handleMonthChange}
                ref={monthInputRef}
              />
              <label htmlFor='expiryYear' className='sr-only'>
                Year
              </label>
              <input
                className='form-control date'
                id='expiryYear'
                type='text'
                placeholder='YY'
                maxLength={2}
                value={year}
                onChange={handleYearChange}
                ref={yearInputRef}
              />
            </div>
          </fieldset>
          <div className='form-group'>
            <label htmlFor='cvc'>CVC</label>
            <Input
              id='cvc'
              className='form-control cvc'
              type='text'
              value={cvcNum}
              onChange={handleCvcChange}
              placeholder='e.g. 123'
              maxLength={4}
            />
          </div>
        </div>
      </fieldset>
      <Button type='submit' className='btn btn-primary'>
        Confirm
      </Button>
    </form>
  );
};
export default Form;
