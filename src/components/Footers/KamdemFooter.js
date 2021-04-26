
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function KamdemFooter() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.facebook.com/patrick.kamdem" role="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://twitter.com/PatrickKamdem7" role="button">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.instagram.com/kamdem73" role="button">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://bitbucket.org/patelotblack" role="button">
            <FontAwesomeIcon icon={faGithub} />
            <i class="fas fa-envelope"></i>
          </a>
        </section>
      </div>

      <div class="text-center p-3 bg-info">
        © 2021 Copyright: <strong><a class="text-white" href="mailto:patrick-kamdem@patelot.de"> KAMDEM</a></strong>
      </div>
    </footer>
  );
}

export default KamdemFooter;
