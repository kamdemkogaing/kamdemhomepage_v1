import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function KamdemFooter() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/patrick.kamdem" role="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a class="btn btn-outline-light btn-floating m-1" href="#" role="button">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a class="btn btn-outline-light btn-floating m-1" href="#" role="button">
            <FontAwesomeIcon icon={faGithub} />
            <i class="fas fa-envelope"></i>
          </a>
        </section>
      </div>

      <div class="text-center p-3 bg-info">
        © 2021 Copyright: <a class="text-white" href="https://www.patelot.de"> KAMDEM</a>
      </div>
    </footer>
  );
}

export default KamdemFooter;
