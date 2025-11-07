export const About = () => {
  return (
    <section id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-amber-100"
      style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="max-w-6xl w-full bg-[#ffffcc] border-2 border-[#990000] rounded-2xl p-10 md:p-16">

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center  
        bg-clip-text text-[#990000]"> About Me </h2>

        <p className="text-[#333333] mb-3  text-center md:text-left">
          I'm Weljohn Miasco and I am very interested in video games since I was like 11 years old so much so
           that I deamt on making my own game and make my players happy that it led me here in Computer Science 
           also the reason I took ICT in my Senior High School. I hope I could really make it through out all of 
           this challenges and the task we needed to do. I now know how to understand codes just by looking but 
           I was just guessing how will they work and I'm really dependent in trial an error because I could 
           clearly see if my code is right or wrong.  
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border-4 border-[#990000] bg-[#FFF8D4] text-center">
            <h3 className="text-xl font-bold mb-4 text-amber-700">Schools Attended</h3>
            <ul className=" text-gray-300 space-y-2">
              <li >
                <strong  className="text-red-800">B.S. in Computer Science </strong>
                <span className="italic text-amber-700">Ongoing</span>
                <br />
                <span className="text-gray-700">Cavite State University, Bacoor City</span>
              </li>
                            <li>
                <strong  className="text-red-800" >Senior High School (ICT) </strong>
                <span className="italic text-amber-700">Graduate (2021-2023)</span>
                <br />
                <span className="text-gray-700">SHS in San Nicolas III, Bacoor City</span>
              </li>
                            <li>
                <strong  className="text-red-800">Junior High School</strong>
                <span className="italic text-amber-700"> Graduate (2016-2019)</span>
                <br />
                <span className="text-gray-700">Cavite State University, Bacoor City</span>
              </li>
                            <li>
                <strong  className="text-red-800">Elementary School </strong>
                <span className="italic text-amber-700">Graduate (2010-2016)</span>
                <br />
                <span className="text-gray-700">Mansanitas Street, Las Piñas City</span>
              </li>
            </ul>
          </div>
            <div className="p-5 rounded-2xl border-4 border-[#990000] bg-[#FFF8D4] text-center">
            <h3 className="text-xl font-bold mb-4 text-amber-700">Programming Language I know</h3>
            <ul className=" text-gray-300 text-left space-y-2">
              <li><strong  className="text-red-800" >HTML</strong></li>
              <li><strong  className="text-red-800" >CSS</strong></li>
              <li><strong  className="text-red-800" >JAVA</strong></li>
              <li><strong  className="text-red-800" >JAVASCRIPT</strong></li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
