export const Home = () => {
  return (
    <section id="home"
      className="min-h-screen flex flex-col items-center justify-center py-1 px-4 bg-amber-100"
      style={{ fontFamily: "Arial, sans-serif " }}>
        <div className="max-w-6xl w-full bg-[#ffffcc] border-2 border-[#990000] rounded-2xl p-10 md:p-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#990000]">
              Welcome to my Portfolio
             </h1>
        <p className="text-[#333333] text-2xl  text-center md:text-left">
              This website is created as portfolio in order to show you 
              guys my information and things I do in this course and the task I did along the way.
              I am currently 22 years old as I make this portfolio and I hope I could see this project again
              in the near future to look back on how far I have gone on these journey of life and I hope in that 
              future I am able to do the things I only dreamt on doing.
            </p>
          </div>
        </div>
    </section>
  );
};
