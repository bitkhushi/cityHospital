import React from 'react';
import { InputError, Inputstyle } from './Input.styled';

function Input({ errorText, ...rest }) {
    return (
        <>
            <Inputstyle className="form-control" errorText={errorText} {...rest} />

            <InputError errorText={errorText}>
                {errorText}
            </InputError>

        </>
    );
}

export default Input;