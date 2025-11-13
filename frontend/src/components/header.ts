export function createHeader(): HTMLElement {
  const header = document.createElement('div')
  header.className = 'site-header'

  const title = document.createElement('div')
  title.className = 'site-title'
  title.innerHTML = `<a href="#/">Простір Львів</a>`

  const nav = document.createElement('nav')
  nav.className = 'site-nav'
  nav.innerHTML = `
    <a href="#/">Головна</a>
    <a href="#/movies">Фільми</a>
    <a href="#/events">Події</a>
    <a href="#/menu">Меню</a>
    <a href="#/info">Інфо</a>
  `

  header.appendChild(title)
  header.appendChild(nav)
  return header
}
