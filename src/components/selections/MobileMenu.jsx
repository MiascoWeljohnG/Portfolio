import { } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "w-64 h-auto opacity-100" : "w-0 h-0 opacity-0 pointer-events-none"}`}
    >
      <div
        className={`relative bg-[#FFF8D4] backdrop-blur-md 
                    border-2 border-[#990000] rounded-br-2xl shadow-lg
                    transition-all duration-500 ease-in-out
                    ${menuOpen ? "p-6 w-64" : "p-0 w-0"}`}
      >
        {/* Close Button (top-left inside the panel) */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-3 left-3 text-amber-700 text-3xl 
                     hover:text-amber-700 focus:outline-none cursor-pointer transition"
          aria-label="Close Menu"
        >
          &times;
        </button>

        <nav
          className={`flex flex-col items-start text-left space-y-4 mt-10 transition-all duration-300
                      ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          {["Home", "About", "Projects", "Contact"].map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-amber-700 hover:text-[#000000]
                         hover:translate-x-2 transition-transform duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
