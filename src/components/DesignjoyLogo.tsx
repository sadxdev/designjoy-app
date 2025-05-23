export default function DesignjoyLogo() {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo Path */}
      <svg
        viewBox="-60 -40 120 80"
        width="20"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-46.115,-18.523 C-41.463,2.666 -22.585,18.523 0.001,18.523 C22.586,18.523 41.463,2.664 46.115,-18.523"
          stroke="black"
          strokeWidth="18.407"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillOpacity="0"
        />
      </svg>

      {/* Brand Name */}
      <img
        src="/assets/Designjoy-logo.svg" 
        alt="Designjoy"
        width={100}
        height={22}
        className="w-[100px] h-[22px]"
      />
    </div>
  );
}
