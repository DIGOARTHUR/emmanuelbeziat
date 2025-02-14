import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App'
import router from './router'
import store from './store.js'
import sequentialEntrance from 'vue3-sequential-entrance'
import './registerServiceWorker'

store.dispatch('codes/init')
store.dispatch('posts/init')
store.dispatch('projects/init')
store.dispatch('portfolio/init')

const app = createApp(App)
const head = createHead()

app.use(store)
app.use(router)
app.use(head)
app.use(sequentialEntrance)
app.mount('#app')

/* eslint-disable no-debugger, no-console */
console.log('%c Made with 🕑 by Emmanuel Béziat', 'background: #c3e88d; color: #233238; padding: .5em 1em;')
