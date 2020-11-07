import './assets/style.less'


import { createApp  } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const emitter = mitt()

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.sudoku = '010020300002003040050000006004700050000100003070068000300004090000600104006000000';

app.mount('#app')

