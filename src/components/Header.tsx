import { Icon } from '../svg';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='sr-only'>Card Details</h1>
      <div className='card'>
        <div className='card__back'>
          <img
            src='./images/bg-card-back.png'
            role='presentation'
            className='card__back-image'
            alt=''
          />
          <div className='card__back-text'>
            <div className='card__cvc'>000</div>
          </div>
        </div>
        <div className='card__front'>
          <img
            src='./images/bg-card-front.png'
            role='presentation'
            className='card__front-image'
            alt=''
          />
          <div className='card__front-text'>
            <div className='card__logo'>
              <Icon name='card-logo' />
            </div>
            <div className='card__number'>0000 0000 0000 0000</div>
            <div className='card__details'>
              <div className='card__holder'>JANE APPLESEED</div>
              <div className='card__expiry'>09/00</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
