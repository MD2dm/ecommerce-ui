import { IconType } from "react-icons";

interface CustomIconProps {
  icon: IconType;
  gradientId: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon: Icon, gradientId }) => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#27EF9F", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#0DB8DE", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <Icon style={{ fill: `url(#${gradientId})` }} />
    </>
  );
};

export default CustomIcon;
