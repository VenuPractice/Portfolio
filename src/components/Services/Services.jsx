import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "As a UI/UX designer, I am passionate about creating digital experiences that are both visually appealing and easy to use. I have a keen eye for design and a deep understanding of user behavior, which allows me to craft interfaces that are intuitive and engaging.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      " I am skilled in creating responsive and user-friendly websites that are both visually appealing and functional. I have a strong understanding of front-end web development technologies, including HTML, CSS, and JavaScript, and I am comfortable working with various web frameworks like React.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      " I am passionate about capturing the beauty of the world around us through my lens. I specialize in a variety of photography styles, including landscape, portrait, and event photography, and I have experience working in both digital and film formats.",
  },
];
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Sevices</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
