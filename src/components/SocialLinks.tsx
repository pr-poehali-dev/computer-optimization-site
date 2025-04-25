import { Disc, MessageCircle, GithubIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Discord",
    icon: <Disc className="h-5 w-5" />,
    url: "https://discord.gg/adlerpwnz",
    color: "bg-indigo-600 hover:bg-indigo-700"
  },
  {
    name: "Telegram",
    icon: <MessageCircle className="h-5 w-5" />,
    url: "https://t.me/adlerpwnz",
    color: "bg-sky-500 hover:bg-sky-600"
  },
  {
    name: "GitHub",
    icon: <GithubIcon className="h-5 w-5" />,
    url: "https://github.com/adlerpwnz",
    color: "bg-gray-800 hover:bg-gray-900"
  },
];

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
  return (
    <div className={`flex space-x-3 ${className}`}>
      {socialLinks.map((link) => (
        <motion.a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.color} text-white p-2 rounded-full transition-all duration-300`}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
