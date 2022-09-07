export class Router {
  routes = {}

  addRoute(pathname, path) {
    this.routes[pathname] = path
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    history.pushState({}, '', event.target.href)

    this.fetchContent()
  }

  fetchContent() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector('#app').innerHTML = html
      })

    console.log(route)
  }
}
