import My_pic from "../../assets/Weljohn_Miasco.png"; 
export const Contact = () => {
  return (
    <section id="contact">
      <footer className="py-4 px-6 bg-amber-800 text-left text-white flex justify-between items-center flex-wrap">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2.5 bg-clip-text text-amber-100">
            My Contacts
          </h2>
          <p>
            If you ever need to reach out to me, feel free to contact me on these accounts.
          </p>
          <br />

          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
            <a href="mailto:miascoweljohn0308@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg"
                alt="Google"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>

            <a href="https://www.facebook.com/weljohn.miasco" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                alt="Facebook"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>

            <a href="https://www.instagram.com/wewsnamantalaga/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <img
            src={My_pic}
            alt="Weljohn Miasco"
            className="w-32 h-32 rounded-full object-cover border-4 border-amber-400 shadow-lg"
          />
        </div>
      </footer>
    </section>
  );
};
