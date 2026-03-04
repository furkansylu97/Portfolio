import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center bg-[#789a9f] border-t-2 border-cyan-950">
      <div className="flex flex-col items-center justify-center text-center my-5 space-y-2">
        <p className="text-cyan-950 text-sm tracking-wide">
          Design & Developed by
        </p>

        <h2 className="text-xl italic font-medium">
          {"<"}Furkan Soylu /{">"}
        </h2>

        <p className="text-xs text-gray-800 mt-1 lg:mt-2">
          © {year} Tüm hakları saklıdır
        </p>
      </div>
    </footer>
  );
};

export default Footer;
