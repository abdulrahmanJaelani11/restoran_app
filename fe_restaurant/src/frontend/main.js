import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Router untuk frontend

// import '@/assets/frontend/css/bootstrap.min.css';
// import '@/assets/frontend/css/style.css';
// import '@/assets/frontend/css/responsive.css';
// import '@/assets/frontend/css/colors/orange.css';

const app = createApp(App);

app.config.globalProperties.$api = "http://localhost:3000/" // DEVELOPMENT

app.use(router);
app.mount('#app');