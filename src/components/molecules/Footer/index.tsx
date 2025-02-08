import { logoLg, facebookIcon, instagramIcon, twitterIcon, linkedinIcon } from "assets/images";
import { Typography } from "components/atoms";
import "./index.css";

export const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <div className='footer-top-row'>
                <div className="footer-logo-wrapper">
                    <img src={logoLg} alt="logo" />
                </div>
                <div className="footer-content-1">
                    <Typography variant="p" label="About Us" className="p-500-m text-white" />
                    <div className="footer-sub-content-1">
                        <Typography variant="p" label="Company" className="p-400-sm text-white" />
                        <Typography variant="p" label="Portfolio" className="p-400-sm text-white" />
                        <Typography variant="p" label="Contact us" className="p-400-sm text-white" />
                    </div>
                </div>
                <div className="footer-content-2">
                    <Typography variant="p" label="Contact Us" className="p-500-m text-white" />
                    <div className="footer-sub-content-2">
                        <div className="footer-contact-info-wrapper">
                            <Typography variant="p" label="Phone" className="p-400-sm text-white" />
                            <Typography variant="p" label="077 292 8198" className="p-400-sm text-white" />
                        </div>
                        <div className="footer-contact-info-wrapper">
                            <Typography variant="p" label="Email" className="p-400-sm text-white" />
                            <Typography variant="p" label="pd.kjholding@gmail.com" className="p-400-sm text-white" />
                        </div>
                        <div className="footer-contact-info-wrapper">
                            <Typography variant="p" label="Address" className="p-400-sm text-white" />
                            <Typography variant="p" label="Nattandiya,Sri Lanka" className="p-400-sm text-white" />
                        </div>
                    </div>
                </div>
                <div className="footer-content-3">
                    <div className="footer-icon-holder">
                        <img src={facebookIcon} alt="facebook" />
                    </div>
                    <div className="footer-icon-holder">
                        <img src={instagramIcon} alt="instagram" />
                    </div>
                    <div className="footer-icon-holder">
                        <img src={twitterIcon} alt="twitter" />
                    </div>
                    <div className="footer-icon-holder">
                        <img src={linkedinIcon} alt="linkedin" />
                    </div>
                </div>
            </div>
            <div className='footer-bottom-row'>
                <Typography variant="p" label="Copyright ® 20214Company All rights Rcerved" className="p-400-xxs text-white" />
            </div>
        </footer>
    )
}