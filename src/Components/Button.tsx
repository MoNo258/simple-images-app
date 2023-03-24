import * as React from "react";
import './Button.scss';

export type ButtonProps = {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button type='button' className='button' onClick={onClick}>Reset counter!</button>
    );
};

export default Button;
