import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIO  from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'

const app = createApp(App)
app.use(router)
app.use(new VueSocketIO({
    connection: SocketIO('http://localhost:3032')
}))
app.mount('#app')