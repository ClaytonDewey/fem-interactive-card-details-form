import { CardLogo, IconComplete, IconInfo } from '.';

type IconProps = {
  name: 'card-logo' | 'complete' | 'info';
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'card-logo':
      return <CardLogo />;
    case 'complete':
      return <IconComplete />;
    case 'info':
      return <IconInfo />;
    default:
      return null;
  }
};
export default Icon;
