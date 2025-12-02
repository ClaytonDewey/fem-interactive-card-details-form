import { Icon } from '../svg';
import { Button } from '.';

const Complete = () => {
  const handleClick = () => {
    console.log('Continue button clicked');
  };

  return (
    <section className='form-complete'>
      <div className='form-icon'>
        <Icon name='complete' />
      </div>
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <Button type='button' className='btn btn-primary' onClick={handleClick}>
        Continue
      </Button>
    </section>
  );
};
export default Complete;
