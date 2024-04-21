import React from 'react';
import {S} from "./Button_Styles";

type ButtonProps = {
    title: string
    callback: () => void
    children?: React.ReactNode
    disable?: boolean
}
export const Button = ({title, callback, children, disable}:ButtonProps) => {
    return (
        <S.Button onClick={callback}>{title || children}</S.Button>
    );
};
