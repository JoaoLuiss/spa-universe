import { Events } from './events.js'
import { Router } from './router.js'
import { Scenario } from './scenario.js'

const router = new Router()
router.addRoute('/', '/pages/home.html')
router.addRoute('/the-universe', '/pages/the-universe.html')
router.addRoute('/exploration', '/pages/exploration.html')
router.addRoute(404, '/pages/404.html')

const scenario = Scenario()

Events({ router, scenario })

router.fetchContent()

window.onpopstate = () => fetchContent()
window.route = () => route()
