import { FindInput } from './styles';
import find from '../../assets/find.svg';

export const InputFind = () => {
  return (
    <FindInput placeholder="Busque por prato ou chef">
      <img src={find} />
      <input type="text" placeholder="Busque por prato ou chef" />
    </FindInput>
  );
};
