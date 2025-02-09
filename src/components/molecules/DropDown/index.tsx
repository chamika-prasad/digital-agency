import { Dispatch, SetStateAction, useState } from "react";
import { arrow_forward } from "assets/images";
import { Typography } from "components/atoms";
import { ProductsOptionsType, ProductSubOptionsType, ProductType } from "types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/hooks";
import { setProduct } from "slices/productSlice";
import "./index.css";

interface IProps {
    options: ProductsOptionsType[];
    setIsProductDropDownShow: Dispatch<SetStateAction<boolean>>;
}

export const DropDown = ({ options, setIsProductDropDownShow }: IProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [activeOptionId, setActiveOptionId] = useState<number | null>(null);
    const nullProduct: ProductType =
    {
        id: null,
        image: null,
        name: null,
        ingredients: null,
        packSizes: null
    }

    const handleMouseEnter = (optionId: number) => {
        setActiveOptionId(optionId);
    }

    const handleMouseLeave = () => {
        setActiveOptionId(null);
        setIsProductDropDownShow(false)
    }

    const handleOptionNavigate = (option: string, isSubOptionhave: boolean) => {
        // event.stopPropagation();
        if (!isSubOptionhave) {
            navigate(`/products`, { state: { option: option, subOption: null } })
            dispatch(setProduct({ product: nullProduct, isProductShow: false }))
            setActiveOptionId(null);
            setIsProductDropDownShow(false)
        }
    }

    const handleSubOptionNavigate = (option: string, subOption: string) => {
        // event.stopPropagation();

        dispatch(setProduct({ product: nullProduct, isProductShow: false }))
        navigate(`/products`, { state: { option: option, subOption: subOption } })
    }

    return (
        <div className='main-dropdown-wrapper dropdown-wrapper w-fit' onMouseLeave={handleMouseLeave}>
            {
                options.map((option: ProductsOptionsType, index: number) => {
                    return (
                        <div className={`dropdown-option ${option.subOptions.length > 0 ? "justify-space-between" : "justify-start"}`} key={option.id} onMouseEnter={() => handleMouseEnter(index)} onClick={() => handleOptionNavigate(option.name, option.subOptions.length > 0)}>
                            <Typography variant="p" label={option.name} className="p-400-sm no-wrap" />
                            {option.subOptions.length > 0 ? <img src={arrow_forward} alt="arrow_forward" /> : null}
                            {activeOptionId === index && option.subOptions.length > 0 ?
                                <div className="dropdown-wrapper inner-dropdown w-fit">
                                    {
                                        option.subOptions.map((subOption: ProductSubOptionsType) => {
                                            return (
                                                <div className='dropdown-option justify-start' key={subOption.id} onMouseEnter={() => handleMouseEnter(index)} onClick={() => handleSubOptionNavigate(option.name, subOption.name)}>
                                                    <Typography variant="p" label={subOption.name} className="p-400-sm no-wrap" />
                                                </div>
                                            )
                                        })
                                    }
                                </div> : null}
                        </div>
                    )
                })
            }
        </div>
    )
}