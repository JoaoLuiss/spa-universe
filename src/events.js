import { linkHome, linkOUniverso, linkExploracao } from './elements.js'

export function Events({ router, scenario }) {
  linkHome.addEventListener('click', () => {
    scenario.homeBackground()
    router.route()
  })

  linkOUniverso.addEventListener('click', () => {
    scenario.theUniverseBackground()
    router.route()
  })

  linkExploracao.addEventListener('click', () => {
    scenario.explorationBackground()
    router.route()
  })
}
