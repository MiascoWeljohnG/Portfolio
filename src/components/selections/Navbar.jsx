import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#FFF8D4] border-b-4 
      border-[#990000] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
          <div className="w-7 h-5 relative cursor-pointer md:hidden 
          text-amber-700 text-3xl transition hover:text-[#000000]"
          onClick={() =>setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
            <a href="#home" className="font-mono text-4xl md:text-5xl font-bold tracking-wide">
            <img src="https://img.icons8.com/?size=40&id=fHqQDadxUSAD&format=png&color=990000" 
            title="study icons"></img> </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-amber-700 hover:text-[#990000] transition-all 
              duration-200 ">Home</a>
            <a href="#about" className="text-amber-700 hover:text-[#990000] transition-all
             duration-200 "> About</a>
            <a href="#projects" className="text-amber-700 hover:text-[#990000] transition-all 
            duration-200 ">Projects</a>
            <a href="#contact" className="text-amber-700 hover:text-[#990000] transition-all 
            duration-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
