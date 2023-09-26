import { FindInput } from './styles';
import find from '../../assets/find.svg';

export const InputFind: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = props => {
  return (
    <FindInput>
      <img src={find} />
      <input {...props} />
    </FindInput>
  );
};
