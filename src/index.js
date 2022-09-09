import { Events } from './events.js'
import { Router } from './router.js'
import { Scenario } from './scenario.js'

const router = new Router()
router.addRoute('/spa-universe/', '/spa-universe/pages/home.html')
router.addRoute('/spa-universe/the-universe', '/spa-universe/pages/the-universe.html')
router.addRoute('/spa-universe/exploration', '/spa-universe/pages/exploration.html')
router.addRoute('/spa-universe/404', '/spa-universe/pages/404.html')

const scenario = Scenario()

Events({ router, scenario })

router.fetchContent()

window.onpopstate = () => fetchContent()
window.route = () => route()
