import "./about.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const abouts = [
  {
    title: "Frontend Development",
    description: "I am a good frontend developer",
    imageUrl: images.about1,
  },
  {
    title: "Backend Development",
    description: "I am a good backend developer",
    imageUrl: images.about2,
  },
  {
    title: "Graphic Design",
    description: "I am a good graphic designer",
    imageUrl: images.about3,
  },
  {
    title: "Arabic and Islamic Education",
    description: "I am a good teacher",
    imageUrl: images.about4,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
