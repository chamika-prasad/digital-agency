import classNames from 'classnames';
import "./index.css";

interface IProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    label: string;
    className?: string;
}

export interface ITypography {
    [key: string]: string | any;
}

export const Typography = ({ variant, label, className }: IProps) => {

    const varientMapper: ITypography = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        p: "p",
    }

    const Component = varientMapper[variant]
    
    return (
        <Component className={classNames("typography", className)}>
            {label}
        </Component>
    )
}