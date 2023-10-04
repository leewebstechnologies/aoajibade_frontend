import "./navbar.css";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.micael} alt="logo" />
      </div>
      <ul>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={"#${item}"}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
