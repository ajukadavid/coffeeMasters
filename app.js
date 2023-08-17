import Store from './services/Store.js'
import API from './services/API.js'
import { loadData } from './services/Menu.js'
import Router from './services/Router.js'

//Link web component
import { MenuPage } from './components/MenuPage.js'

window.app = {}
app.store = Store
app.router = Router

window.addEventListener("DOMContentLoaded", () => {
    loadData()
    app.router.init()
})

