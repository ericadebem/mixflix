import Github from "Github-icon.png";
import Linkedin from "Linkedin-icon.png";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>Über uns</li>
          <li>Hilfe</li>
          <li>Datenschütz</li>
        </ul>
      </nav>
      <div>
        <p>Folge uns:</p>
        <ul>
          <li>
            <img src={Github} />
          </li>
          <li>
            <img src={Linkedin} />
          </li>
        </ul>
      </div>
      <p>© 2024 DCI - Erica de Bem | Was mentored by Albert Clemente</p>
    </footer>
  );
};
