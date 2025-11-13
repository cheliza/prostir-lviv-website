async function fetchJson(path: string) {
  const res = await fetch(path)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function renderMovies(container: HTMLElement) {
  const section = document.createElement('section')
  section.className = 'page page-movies'
  section.innerHTML = `
    <h1>Фільми</h1>
    <p class="lead">Список фільмів та їх показів.</p>
    <div id="movies-list">Завантаження...</div>
  `
  container.appendChild(section)

  const listEl = section.querySelector('#movies-list') as HTMLElement
  try {
    const data = await fetchJson('/api/movies/')
    const movies = data.movies || []
    if (movies.length === 0) {
      listEl.innerText = 'Фільми не знайдено.'
      return
    }
    const ul = document.createElement('div')
    ul.className = 'cards-grid'
    movies.forEach((m: any) => {
      const card = document.createElement('article')
      card.className = 'card item-card'
      card.innerHTML = `
        ${m.image ? `<img src="${m.image}" alt="${m.title}" class="thumb"/>` : ''}
        <h3>${m.title}</h3>
        <div class="muted">${m.date} ${m.time || ''}</div>
        <p>${m.description || ''}</p>
      `
      ul.appendChild(card)
    })
    listEl.innerHTML = ''
    listEl.appendChild(ul)
  } catch (err: any) {
    listEl.innerText = `Помилка: ${err.message}`
  }
}
