async function fetchJson(path: string) {
  const res = await fetch(path)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function renderEvents(container: HTMLElement) {
  const section = document.createElement('section')
  section.className = 'page page-events'
  section.innerHTML = `
    <h1>Події</h1>
    <p class="lead">Список всіх подій.</p>
    <div id="events-list">Завантаження...</div>
  `
  container.appendChild(section)

  const listEl = section.querySelector('#events-list') as HTMLElement
  try {
    const data = await fetchJson('/api/events/')
    const events = data.events || []
    if (events.length === 0) {
      listEl.innerText = 'Події не знайдено.'
      return
    }
    const ul = document.createElement('div')
    ul.className = 'cards-grid'
    events.forEach((e: any) => {
      const card = document.createElement('article')
      card.className = 'card item-card'
      card.innerHTML = `
        ${e.image ? `<img src="${e.image}" alt="${e.title}" class="thumb"/>` : ''}
        <h3>${e.title}</h3>
        <div class="muted">${e.date} ${e.time || ''}</div>
        <p>${e.description || ''}</p>
      `
      ul.appendChild(card)
    })
    listEl.innerHTML = ''
    listEl.appendChild(ul)
  } catch (err: any) {
    listEl.innerText = `Помилка: ${err.message}`
  }
}
