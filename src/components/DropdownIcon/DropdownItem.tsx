import { DropDownItem } from './styles';

interface PropsDownItem {
  img: string;
  text: string;
}

export const DropdownItem = (props: PropsDownItem) => {
  return (
    <DropDownItem>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </DropDownItem>
  );
};
