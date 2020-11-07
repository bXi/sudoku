import './assets/style.less'


import { createApp  } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

import { makePuzzle } from './sudoku.js'


const emitter = mitt()
const app = createApp(App)


app.config.globalProperties.emitter = emitter;
app.config.globalProperties.sudoku = makePuzzle();
//003016000006570302040002001010000500005007240607000080300000000000000020200000870
//010020300002003040050000006004700050000100003070068000300004090000600104006000000
app.mount('#app')

