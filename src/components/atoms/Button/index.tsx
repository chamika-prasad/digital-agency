import React from 'react'
import classNames from 'classnames';
import "./index.css";

interface IProps {
    onClick: () => void;
    className?: string;
    label: string;
}

export const Button = ({ onClick, className, label }: IProps) => {
    return (
        <button onClick={onClick} className={classNames("btn", className ? className : "")}>
            {label}
        </button>
    )
}

