import { Typography } from "components/atoms";
import "./index.css";

interface IProps {
    imgSrc: string;
    name: string;
}

export const Product = ({ imgSrc, name }: IProps) => {
    return (
        <div className='product-wrapper'>
            <img src={imgSrc} alt="" />
            <Typography variant="p" label={name} className="p-500-sm" />
        </div>
    )
}