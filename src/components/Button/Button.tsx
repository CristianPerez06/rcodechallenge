import styles from "./Button.module.scss";
interface ButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const Button = ({ text, onClick, isDisabled = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={styles["container"]}
    >
      {text}
    </button>
  );
};

export default Button;
