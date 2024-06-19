import { Image } from "react-bootstrap";
import { contactIcon } from "../../../../../assets/svg/icon/_icon";

import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="py-2">
        <a
          className="text-decoration-none text-secondary d-flex flex-column justify-content-center align-items-center"
          href="mailto:bocafina.app@gmail.com?subject=Sujet%20du%20mail&body=Bonjour%2C%20je%20souhaite%20vous%20contacter%20concernant..."
        >
          <span className="me-3">Une question ? Un avis ?</span>
          <div className="">
            <span className="me-3">Contactez-nous :</span>
            <Image
              className="mt-1 me-2"
              src={contactIcon}
              alt="Image cliquable pour nous contacter"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default Contact;

// Link ne fonctionne pas avec mailto, un simple a is enough
