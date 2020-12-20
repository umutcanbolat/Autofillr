import { se, de } from '../conf';

const generate = (country) => {
  switch (country) {
    case 'se':
      return se();
    case 'de':
      return de();
    default:
      return {};
  }
};

export default generate;