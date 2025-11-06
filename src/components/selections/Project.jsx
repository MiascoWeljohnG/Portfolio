import { useState } from "react";
import proj1_img1 from "../../assets/proj1_img1.png"; 
import proj1_img2 from "../../assets/proj1_img2.png";
import proj1_img3 from "../../assets/proj1_img3.png";
import proj2_img1 from "../../assets/proj2_img1.png";
import proj2_img2 from "../../assets/proj2_img2.png";
import proj2_img3 from "../../assets/proj2_img3.png";
import proj3_img1 from "../../assets/proj3_img1.png";
import proj3_img2 from "../../assets/proj3_img2.png";
import proj3_img3 from "../../assets/proj3_img3.png";
import proj3_img4 from "../../assets/proj3_img4.png";
import proj3_img5 from "../../assets/proj3_img5.png";
import proj3_img6 from "../../assets/proj3_img6.png";
const projectsData = [
  {
    title: "Purong Ginto Grocery Store",
    desc: "We did this in our 1st year 2nd semester as a project in oyr DCIT 23 this website dfocuses on grantig the user access to shop online.",
    images: [proj1_img1, proj1_img2,proj1_img3], 
  },
  {
    title: "My Classroom ",
    desc: "This website focuses on tracking our grades, schedule, and your informations as a student and this is a project I made in DCIT 55.",
    images: [proj2_img1, proj2_img2,proj2_img3], 
  },
  {
    title: "Bite-EX",
    desc: "This website is a lso a food store but It mainly focuses on dishes and just like facebook you can interact with other users of this website.",
    images: [proj3_img1,proj3_img2,proj3_img3,proj3_img4,proj3_img5,proj3_img6], 
  },
];

export const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (images, index) => {
    setCurrentProjectImages(images);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 bg-amber-100">
              <div className="max-w-6xl w-full bg-[#ffffcc] border-2 border-[#990000] rounded-2xl p-10 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#990000]">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 rounded-2xl 
              bg-[#FFF8D4] border-4 border-amber-100 hover:border-[#990000] ">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#990000]">
                  {project.title}
                </h3>
                <p className="text-black mb-6 leading-relaxed">
                  {project.desc}
                  <br />
                </p>
              </div>
              <div className="flex justify-center mt-auto cursor-pointer" onClick={() => openModal(project.images, 0)}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl border-2 border-[#990000]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center" onClick={closeModal}>
          <div className="relative bg-[#ffffcc] p-4 rounded-lg max-w-3xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-700" onClick={closeModal}>X</button>
            <div className="flex flex-col items-center">
              <img
                src={currentProjectImages[selectedImageIndex]}
                alt={`Image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[80vh] cursor-pointer"
                onClick={() => setSelectedImageIndex((prev) => (prev + 1) % currentProjectImages.length)}
              />
              <div className="mt-2 flex justify-between w-full px-4">
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev - 1 + currentProjectImages.length) % currentProjectImages.length)}
                  className="bg-[#FFF8D4] px-4 py-2 rounded border border-[#990000] hover:bg-amber-700"
                >
                  Prev
                </button>
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev + 1) % currentProjectImages.length)}
                  className="bg-[#FFF8D4] px-4 py-2 rounded border border-[#990000] hover:bg-amber-700"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};