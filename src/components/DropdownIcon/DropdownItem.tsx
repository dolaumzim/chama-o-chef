import { DropDownItem, DropDownLink } from './styles';

interface PropsDownItem {
  img: string;
  text: string;
  link : string;
  onClick?: ()=>void;
}

export const DropdownItem = (props: PropsDownItem) => {
  const handleOnClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <DropDownItem onClick={handleOnClick}>
      <img src={props.img}></img>
      <DropDownLink to={props.link}> {props.text} </DropDownLink>
    </DropDownItem>
  );
};
