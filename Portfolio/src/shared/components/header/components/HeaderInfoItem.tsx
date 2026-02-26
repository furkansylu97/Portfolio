interface HeaderInfoItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  iconClassName?: string;
  containerClassName?: string;
}

const HeaderInfoItem: React.FC<HeaderInfoItemProps> = ({
  icon,
  title,
  children,
  iconClassName = "w-6 h-6",
}) => {
  return (
    <div className="flex items-center">
      <div className="bg-cyan-800/50 border-2 border-white rounded-full w-12 h-12 flex justify-center items-center">
        <img src={icon} alt={`${title} Icon`} className={iconClassName} />
      </div>
      <div className="text-white text-sm ml-3">
        <div className="font-medium">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default HeaderInfoItem;
