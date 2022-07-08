import { BsMessenger, BsPinterest, BsShareFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export const socialicons = [
	{
		id: 1,
		link: "facebook",
		sharecount: "2.5k",
		icon: <FaFacebookF className="icon" />,
	},
	{
		id: 2,
		link: "twitter",
		sharecount: "2.0k",
		icon: <FiTwitter className="icon" />,
	},
	{
		id: 3,
		link: "messenger",
		sharecount: "2.0k",
		icon: <BsMessenger className="icon" />,
	},
	{
		id: 4,
		link: "pinterest",
		sharecount: "2.0k",
		icon: <BsPinterest className="icon" />,
	},
	{
		id: 5,
		link: "pinterest",
		sharecount: "2.0k",
		icon: <BsShareFill className="icon" />,
	},
];
