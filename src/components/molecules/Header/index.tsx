import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo, phoneIcon, locationIcon } from "assets/images";
import { Typography } from "components/atoms";
import { DropDown } from "components/molecules";
import { NavLinkType, ProductsOptionsType, ProductSubOptionsType } from "types";
import "./index.css";

export const Header = () => {

    const [isAboutUsDropDownShow, setIsAboutUsDropDownShow] = useState(false)

    const navLinks: NavLinkType[] = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" }
    ];

    const productsOptions: ProductsOptionsType[] = [
        {
            id: 1,
            name: "Poultry Feed",
            subOptions: [
                {
                    id: 1,
                    name: "Chick Feed"
                },
                {
                    id: 2,
                    name: "Grower Feed"
                },
                {
                    id: 3,
                    name: "Layer Feed"
                }
            ]
        },
        {
            id: 2,
            name: "Ornamental Fish Feed",
            subOptions: []
        }
    ]


    const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        if (path === "/products") {
            event.preventDefault();
            setIsAboutUsDropDownShow(true)
        } else {
            setIsAboutUsDropDownShow(false)
        }
    }

    return (
        <div className='header-wrapper'>
            <div className='header-top-row'>
                <div className='header-icon-text-wrapper'>
                    <img src={locationIcon} alt='phone' />
                    <Typography variant="p" label="Nattandiya, Sri Lanka" className="p-400-xxxs" />
                </div>
                <div className='header-icon-text-wrapper'>
                    <img src={phoneIcon} alt='phone' />
                    <Typography variant="p" label="+91 9876543210" className="p-400-xxxs" />
                </div>
            </div>
            <div className='header-bottom-row'>
                <div className="header-logo-wrapper">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="header-nav-bar">
                    <ul className="header-nav-links">

                        {
                            navLinks.map((link: NavLinkType, index: number) => <li>
                                <NavLink className="header-nav-link" to={link.path} key={index} onClick={(e) => handleNavigation(e, link.path)} onMouseEnter={(e) => handleNavigation(e, link.path)} >
                                    {({ isActive }) => (
                                        <div className="header-nav-link-wrapper">
                                            {isActive && <div className="header-selected"></div>}
                                            <Typography variant="p" label={link.name} className="p-400-sm text-white" />
                                            {link.name === "Products" && isAboutUsDropDownShow ? <DropDown options={productsOptions} setIsAboutUsDropDownShow={setIsAboutUsDropDownShow} /> : null}
                                        </div>
                                    )}
                                </NavLink>
                            </li>)
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}
