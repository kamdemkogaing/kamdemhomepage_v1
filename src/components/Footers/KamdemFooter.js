
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function KamdemFooter() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.facebook.com/patrick.kamdem" role="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://twitter.com/PatrickKamdem7" role="button">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.instagram.com/kamdem73" role="button">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://bitbucket.org/patelotblack" role="button">
            <FontAwesomeIcon icon={faGithub} />
            <i className="fas fa-envelope"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3 bg-info">
        © 2021 Copyright: <strong><a className="text-white" href="mailto:patrick-kamdem@patelot.de"> KAMDEM</a></strong>
      </div>
    </footer>
  );
}

export default KamdemFooter;
