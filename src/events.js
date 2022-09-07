import { linkHome, linkOUniverso, linkExploracao } from './elements.js'

export function Events({ router }) {
  linkHome.addEventListener('click', () => {
    router.route()
  })

  linkOUniverso.addEventListener('click', () => {
    router.route()
  })

  linkExploracao.addEventListener('click', () => {
    router.route()
  })
}
