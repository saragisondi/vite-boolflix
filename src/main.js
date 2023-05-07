import { createApp } from 'vue';
import App from './App.vue';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faBell, faCaretDown, faCaretUp)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
