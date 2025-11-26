import { CardLogo, IconComplete } from '.';

type IconProps = {
  name: 'card-logo' | 'complete';
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'card-logo':
      return <CardLogo />;
    case 'complete':
      return <IconComplete />;
    default:
      return null;
  }
};
export default Icon;
