import { DropDownItem, DropDownLink } from './styles';

interface PropsDownItem {
  img: string;
  text: string;
  link : string
}

export const DropdownItem = (props: PropsDownItem) => {
  return (
    <DropDownItem>
      <img src={props.img}></img>
      <DropDownLink to={props.link}> {props.text} </DropDownLink>
    </DropDownItem>
  );
};
