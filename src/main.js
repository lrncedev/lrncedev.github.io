import { createApp } from 'vue'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHtml5, faCss3, faJs, faVuejs, faGit, faSass, faFacebookF, faLinkedinIn, faCodepen, faTwitter} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add( faHtml5, faCss3, faJs, faVuejs, faGit, faSass, faFacebookF, faLinkedinIn, faCodepen, faTwitter)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')