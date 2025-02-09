import { Typography } from "components/atoms";
import { ProductType } from "types";
import "./index.css";

interface IProps {
    imgSrc: string | null;
    name: string | null;
    // onClick: (product: ProductType) => void;
    onClick: () => void;
}

export const Product = ({ imgSrc, name, onClick }: IProps) => {
    return (
        <div className='product-wrapper' onClick={onClick}>
            {imgSrc ? <img src={imgSrc} alt="" /> : null}
            {name ? <Typography variant="p" label={name} className="p-500-sm" /> : null}
        </div>
    )
}