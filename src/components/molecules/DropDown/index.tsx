import { Dispatch, SetStateAction, useState } from "react";
import { arrow_forward } from "assets/images";
import { Typography } from "components/atoms";
import { ProductsOptionsType, ProductSubOptionsType } from "types";
import { useNavigate } from "react-router-dom";
import "./index.css";

interface IProps {
    options: ProductsOptionsType[];
    setIsAboutUsDropDownShow: Dispatch<SetStateAction<boolean>>;
}

export const DropDown = ({ options, setIsAboutUsDropDownShow }: IProps) => {

    const navigate = useNavigate();
    const [activeOptionId, setActiveOptionId] = useState<number | null>(null);

    const handleMouseEnter = (optionId: number) => {
        setActiveOptionId(optionId);
    }

    const handleMouseLeave = () => {
        setActiveOptionId(null);
        setIsAboutUsDropDownShow(false)
    }

    const handleOptionNavigate = (option: string, isSubOptionhave: boolean) => {
        // event.stopPropagation();
        if (!isSubOptionhave) {
            console.log("clicked");
            navigate(`/products`, { state: { option: option, subOption: null } })
            setActiveOptionId(null);
            setIsAboutUsDropDownShow(false)
        }
    }

    const handleSubOptionNavigate = (option: string, subOption: string) => {
        // event.stopPropagation();
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
                            {activeOptionId === index ?
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