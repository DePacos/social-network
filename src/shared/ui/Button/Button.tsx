import React from 'react';
import {S} from "./Button_Styles";

type ButtonProps = {
    title: string
    onclick: () => void
    children?: React.ReactNode
    disable?: boolean
}
export const Button = ({title, onclick, children, disable}:ButtonProps) => {
    return (
        <S.Button onClick={onclick}>{title || children}</S.Button>
    );
};
