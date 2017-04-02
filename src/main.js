import {app} from './root'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.

// actually mount to DOM
app.$mount('root')
