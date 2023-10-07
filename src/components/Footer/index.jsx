import {
  UilFacebook,
  UilInstagram,
  UilWhatsapp,
  UilGithub,
  UilLinkedin,
} from '@iconscout/react-unicons';
import './styles.css';

function Footer() {
  return (
    <footer>
      <section className="waves">
        <div className="wave" id="wave1" />
        <div className="wave" id="wave2" />
        <div className="wave" id="wave3" />
        <div className="wave" id="wave4" />
      </section>

      <section className="wrapper-profile-footer">
        <h1 className="title-footer">Fajar Pratama Vishinggah</h1>

        <ul className="footer-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#qualification">Qualification</a>
          </li>
          <li>
            <a href="#portofolio">Portofolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="menu-nav wrapper-icon-footer">
          <a className="link-icon" href="https://www.linkedin.com/in/fajarrr035/">
            <UilLinkedin className="icon-footer-git icon-footer" size="35" />
          </a>
          <a className="link-icon" href="https://github.com/fajar035">
            <UilGithub className="icon-footer-git icon-footer" size="35" />
          </a>
          <a
            href="https://web.facebook.com/01010101010101x/?locale=id_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon"
          >
            <UilFacebook className="icon-footer-fb icon-footer" size="35" />
          </a>
          <a
            className="link-icon"
            href="https://www.instagram.com/fajarrr035/?hl=id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilInstagram className="icon-footer-ig icon-footer" size="35" />
          </a>
          <a
            className="link-icon"
            href="https://wa.me/6285158822051"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilWhatsapp className="icon-footer-wa icon-footer" size="35" />
          </a>
        </div>

        <p>&copy;2023 Let&apos;s get a job | Portofolio - Fajar Pratama Vishinggah</p>
      </section>
    </footer>
  );
}

export default Footer;
