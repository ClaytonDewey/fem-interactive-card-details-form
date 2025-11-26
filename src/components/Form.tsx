import { Input, Button } from '.';

const Form = () => {
  return (
    <form className='form'>
      <fieldset className='form-group-fieldset'>
        <legend className='sr-only'>Card Information</legend>
        <div className='form-group'>
          <label htmlFor='cardholder-name'>Cardholder Name</label>
          <Input
            id='cardholder-name'
            className='form-control'
            type='text'
            placeholder='e.g. Jane Appleseed'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='cardholder-name'>Card Number</label>
          <Input
            id='cardholder-name'
            className='form-control'
            type='number'
            placeholder='e.g. 1234 5678 9123 0000'
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
