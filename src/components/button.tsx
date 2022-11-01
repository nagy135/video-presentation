import { FC } from "react";

interface IButton {
  name: string;
}
const Button: FC<IButton> = ({ name }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {name}
    </button>
  );
};

export default Button;
