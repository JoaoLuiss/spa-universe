import { Events } from './events.js'
import { Router } from './router.js'

const router = new Router()
router.addRoute('/', '/pages/home.html')
router.addRoute('/the-universe', '/pages/the-universe.html')
router.addRoute('/exploration', '/pages/exploration.html')
router.addRoute(404, '/pages/404.html')

Events({ router })

router.fetchContent()

window.onpopstate = () => fetchContent()
window.route = () => route()
