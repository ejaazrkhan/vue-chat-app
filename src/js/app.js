// Import Vue
import { createApp } from 'vue';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';

import store from '../pages/store/store';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

app.use(store);

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.mount('#app');

// Init App
// new Vue({
//     el: '#app',
//     render: (h) => h(App),
//     store,

//     // Register the Component
//     components: {
//         app: App
//     },
// });