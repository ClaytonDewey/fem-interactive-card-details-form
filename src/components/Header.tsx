import { Icon } from '../svg';
import { useCardStore } from '../store/useCardStore';
import { formatCardNumber } from '../util';

const Header = () => {
  const { cardHolder, cardNumber, expMonth, expYear, cvc } = useCardStore();

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
            <div className='card__cvc'>{cvc}</div>
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
            <div className='card__number'>{formatCardNumber(cardNumber)}</div>
            <div className='card__details'>
              <div className='card__holder'>{cardHolder}</div>
              <div className='card__expiry'>
                {expMonth}/{expYear}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
