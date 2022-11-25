import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faGit,
  faSass,
  faFacebookF,
  faLinkedinIn,
  faCodepen,
  faTwitter,
  faGithub,
  faNodeJs,
  faNode,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faGit,
  faSass,
  faFacebookF,
  faLinkedinIn,
  faCodepen,
  faTwitter,
  faBars,
  faGithub,
  faNodeJs,
  faNode,
  faPhp,
  faTimesCircle
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
