import React from 'react';
import { PrimaryButton, SecondaryButton, outlinedButton } from './Button.styled';


function Button({ children, type, disabledbtn=false}) {
  


    const CheckButton = () => {
        switch (type) {
            case 'primary':
                return PrimaryButton;
            case 'secondary':
                return SecondaryButton;
            case 'outlined':
                return outlinedButton;
            default:
                return PrimaryButton;
        }
    }

    const ButtonsCustom = CheckButton()
    return (
        <ButtonsCustom disabled={disabledbtn}>
            {children}
        </ButtonsCustom>
    );
}

export default Button;

