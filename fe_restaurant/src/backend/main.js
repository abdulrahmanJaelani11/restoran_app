import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Router untuk backend

const app = createApp(App);

app.config.globalProperties.$api = "http://localhost:3000/" // DEVELOPMENT

app.use(router);
app.mount('#app');
