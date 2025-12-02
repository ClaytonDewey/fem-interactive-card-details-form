import { useState, useRef } from 'react';
import { Input, Button } from '.';
import { useCardStore } from '../store/useCardStore';
import { Icon } from '../svg';

const Form = () => {
  const [formData, setFormData] = useState({
    cardHolderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  });

  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  const {
    setCardHolder,
    setCardNumber,
    setExpMonth,
    setExpYear,
    setCvc,
    reset,
  } = useCardStore();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'cardHolderName') {
      setCardHolder(value);
    }
    if (name === 'cardNumber') {
      setCardNumber(value);
    }
    if (name === 'expMonth') {
      setExpMonth(value);
    }
    if (name === 'expYear') {
      setExpYear(value);
    }
    if (name === 'cvc') {
      setCvc(value);
    }
    // Use functional updates to ensure latest state is used
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateInput = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.cardHolderName === '') {
      newErrors.name = 'Please enter your name.';
    }
    if (formData.cardNumber === '') {
      newErrors.email = 'Please enter a valid card number.';
    }
    if (formData.expMonth === '' || formData.expYear === '') {
      newErrors.expiry = 'Please enter a valid expiration date.';
    }
    if (formData.cvc === '') {
      newErrors.message = 'Please enter CVC.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMonthChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // const value = e.target.value.replace(/\D/g, '').slice(0, 2);
    const { name, value } = e.target;
    // Use functional updates to ensure latest state is used
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
    setExpMonth(value);

    if (value.length === 2 && yearInputRef.current) {
      yearInputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput()) {
      setErrors({});
      setFormData({
        cardHolderName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvc: '',
      });
      reset();
    } else {
      console.error('Validation failed');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form-group-fieldset'>
        <legend className='sr-only'>Card Information</legend>
        <div className='form-group'>
          <label htmlFor='cardHolderName'>Cardholder Name</label>
          <Input
            id='cardHolderName'
            className='form-control'
            name='cardHolderName'
            type='text'
            value={formData.cardHolderName}
            onChange={handleChange}
            placeholder='e.g. Jane Appleseed'
          />
          {errors.name && (
            <>
              <div className='is-invalid icon'>
                <Icon name='info' />
              </div>
              <div className='is-invalid'>
                <p className='error-message'>{errors.name}</p>
              </div>
            </>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='cardNumber'>Card Number</label>
          <Input
            className='form-control'
            type='number'
            id='cardNumber'
            name='cardNumber'
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder='e.g. 1234 5678 9123 0000'
          />
        </div>

        <div className='form-group-inline'>
          <fieldset>
            <legend>Exp. Date (MM/YY)</legend>
            <div className='form-group'>
              <label htmlFor='expMonth' className='sr-only'>
                Month
              </label>
              <input
                className='form-control date'
                id='expMonth'
                name='expMonth'
                type='number'
                placeholder='MM'
                maxLength={2}
                value={formData.expMonth}
                onChange={handleMonthChange}
                ref={monthInputRef}
              />
              <label htmlFor='expYear' className='sr-only'>
                Year
              </label>
              <input
                className='form-control date'
                id='expYear'
                name='expYear'
                type='number'
                placeholder='YY'
                maxLength={2}
                value={formData.expYear}
                onChange={handleChange}
                ref={yearInputRef}
              />
            </div>
          </fieldset>
          <div className='form-group'>
            <label htmlFor='cvc'>CVC</label>
            <Input
              id='cvc'
              name='cvc'
              className='form-control cvc'
              type='number'
              value={formData.cvc}
              onChange={handleChange}
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
