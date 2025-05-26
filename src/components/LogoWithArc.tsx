import Image from "next/image";

type LogoWithArcProps = {
  inverted?: boolean; // optional prop, default = false
};

const LogoWithArc = ({ inverted = false }: LogoWithArcProps) => {
  const imgClass = `align-middle ${inverted ? "invert" : ""}`;
  const strokeColor = inverted ? "white" : "black";

  return (
    <div className="flex items-center space-x-2">
      <svg
        viewBox="-60 -40 120 80"
        className="w-[24px] h-[20.39px] sm:w-[28px] sm:h-[24px] md:w-[32px] md:h-[28px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-46.115,-18.523 C-41.463,2.666 -22.585,18.523 0.001,18.523 C22.586,18.523 41.463,2.664 46.115,-18.523"
          stroke={strokeColor}
          strokeWidth="18.407"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillOpacity="0"
        />
      </svg>

      <Image
        src="/assets/images/designjoy-logo.svg"
        alt="Designjoy Logo"
        width={100}
        height={22.391}
        className={`sm:w-[120px] sm:h-[28px] md:w-[150px] md:h-[35px] ${imgClass}`}
      />
    </div>
  );
};

export default LogoWithArc;