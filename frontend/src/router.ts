import { renderHome } from './pages/home'
import { renderMovies } from './pages/movies'
import { renderEvents } from './pages/events'
import { renderMenu } from './pages/menu'
import { renderInfo } from './pages/info'

type RouteHandler = (container: HTMLElement) => void

const routes: Record<string, RouteHandler> = {
  '/': renderHome,
  '/movies': renderMovies,
  '/events': renderEvents,
  '/menu': renderMenu,
  '/info': renderInfo,
}

function parseLocation(): string {
  const hash = location.hash || '#/'
  // strip leading #
  const path = hash.slice(1)
  return path
}

export function initRouter(container: HTMLElement) {
  function render() {
    const path = parseLocation()
    const handler = routes[path] || routes['/']
    // clear
    container.innerHTML = ''
    handler(container)
  }

  window.addEventListener('hashchange', render)
  // initial
  render()
}
