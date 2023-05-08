import { createApp } from 'vue';
import App from './App.vue';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

library.add(fas, faBell,faStar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
