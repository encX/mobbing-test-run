interface NavButtonProps {
  text: string;
}

const NavButton = ({ text }: NavButtonProps) => {
  return <button>{text}</button>;
};

export default NavButton;
