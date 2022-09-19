import { Button } from "react-bootstrap";

const CustomizedButton = (props) => {
  const enabledLable = props.enabledLable || "Submit";
  const disabledLable = props.disabledLable || "Sumbitting...";
  const isDisabled = props.isDisabled;
  const classNames = props.classNames || "btn-fill btn-block";
  const variant = props.variant || "info";

  return (
    <Button className={classNames} type="submit" variant={variant} disabled = {isDisabled}>
      {isDisabled ? disabledLable : enabledLable}
    </Button>
  );
};

export default CustomizedButton;