async function fetchJson(path: string) {
  const res = await fetch(path)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function renderMenu(container: HTMLElement) {
  const section = document.createElement('section')
  section.className = 'page page-menu'
  section.innerHTML = `
    <h1>Меню</h1>
    <p class="lead">Наше меню — їжа та напої.</p>
    <div id="menu-list">Завантаження...</div>
  `
  container.appendChild(section)

  const listEl = section.querySelector('#menu-list') as HTMLElement
  try {
    const data = await fetchJson('/api/menu/')
    const items = data.menu || []
    if (items.length === 0) {
      listEl.innerText = 'Меню порожнє.'
      return
    }
    const ul = document.createElement('div')
    ul.className = 'cards-grid'
    items.forEach((it: any) => {
      const card = document.createElement('article')
      card.className = 'card item-card'
      card.innerHTML = `
        <h3>${it.name} — <span class="muted">${it.price}₴</span></h3>
        <div class="muted">${it.category}${it.subcategory ? ' / ' + it.subcategory : ''}</div>
        <p>${it.description || ''}</p>
      `
      ul.appendChild(card)
    })
    listEl.innerHTML = ''
    listEl.appendChild(ul)
  } catch (err: any) {
    listEl.innerText = `Помилка: ${err.message}`
  }
}
