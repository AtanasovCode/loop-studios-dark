

const SocialIcon = ({
    icon,
    alt
}) => {
    return (
        <div className="flex items-center justify-center">
            <img 
                src={icon}
                alt={alt}
                className="w-full"
            />
        </div>
    );
}

export default SocialIcon;