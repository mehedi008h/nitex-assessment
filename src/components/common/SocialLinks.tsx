import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

const SocialLinks = () => {
    return (
        <div className="social_links">
            <AiFillYoutube size={22} />

            <BiLogoFacebookCircle size={20} />

            <AiOutlineInstagram size={22} />
        </div>
    );
};

export default SocialLinks;
