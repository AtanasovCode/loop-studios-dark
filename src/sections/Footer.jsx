import FooterLink from '../components/FooterLink';
import SocialIcon from '../components/SocialIcon';

import logo from '../assets/images/logo.svg';
import instagram from '../assets/images/icon-instagram.svg';
import facebook from '../assets/images/icon-facebook.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import twitter from '../assets/images/icon-twitter.svg';


const Footer = () => {
    return (
        <div className="w-full bg-black px-6 py-12 text-white flex flex-col items-center justify-center mt-24">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justfy-center w-36 mb-6">
                    <img
                        src={logo}
                        alt="footer logo"
                        classnmae="w-full"
                    />
                </div>
                <div className="flex flex-col items-centerj ustify-center">
                    <FooterLink text="About" />
                    <FooterLink text="Careers" />
                    <FooterLink text="Events" />
                    <FooterLink text="Products" />
                    <FooterLink text="Support" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
                <div className="grid grid-cols-4 gap-4 justify-items-center">
                    <SocialIcon
                        icon={facebook}
                        alt="facebook logo"
                    />
                    <SocialIcon
                        icon={pinterest}
                        alt="pinterest logo"
                    />
                    <SocialIcon
                        icon={twitter}
                        alt="twitter logo"
                    />
                    <SocialIcon
                        icon={instagram}
                        alt="instagram logo"
                    />
                </div>
                <div className="text-sm text-dark-gray mt-4 text-center">
                    © 2021 Loopstudios. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;