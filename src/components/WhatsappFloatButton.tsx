
import React from "react";

// WhatsApp number in international format, no spaces or dashes
const WHATSAPP_NUMBER = "94712345678"; // Change this to your preferred number

const WhatsappFloatButton: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-6 right-6 animate-fade-in flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-200 active:scale-95 hover:scale-105 focus:outline-none"
      style={{ boxShadow: "0 4px 22px 0 rgba(39, 174, 96, 0.3)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <g>
          <rect width="32" height="32" rx="16" fill="#25D366"/>
          <path d="M16 6.52c-5.27 0-9.56 4.3-9.56 9.57 0 1.89.55 3.73 1.6 5.31L6.02 27l5.8-1.52a9.575 9.575 0 004.18 1.01h.02c5.27 0 9.56-4.3 9.56-9.57 0-2.56-.98-4.97-2.76-6.76A9.506 9.506 0 0016 6.52zm0 17.37c-1.32 0-2.62-.33-3.77-.95l-.27-.15-3.44.9.92-3.36-.18-.28a7.93 7.93 0 012.16-10.86 7.974 7.974 0 0110.97 2.32 7.93 7.93 0 01-6.39 12.37zm4.06-5.49c-.22-.11-1.31-.65-1.52-.73-.2-.07-.34-.11-.48.11-.14.22-.55.73-.67.88-.12.15-.25.16-.47.06-.22-.11-.92-.34-1.76-1.11-.65-.58-1.09-1.28-1.22-1.5-.12-.22-.01-.34.1-.45.11-.11.24-.29.35-.44.12-.15.16-.25.24-.41.08-.16.04-.3-.02-.44-.06-.14-.48-1.14-.66-1.56-.18-.43-.36-.37-.48-.38l-.41-.01c-.13 0-.33.05-.5.21-.16.15-.67.65-.67 1.6s.68 1.85.77 1.98c.09.14 1.34 2.05 3.23 2.79.45.18.81.28 1.09.35.46.12.88.1 1.21.06.37-.04 1.13-.46 1.29-.9a1.14 1.14 0 00.08-.9c-.03-.07-.2-.13-.41-.24z" fill="#fff"/>
        </g>
      </svg>
      <span className="font-bold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsappFloatButton;
