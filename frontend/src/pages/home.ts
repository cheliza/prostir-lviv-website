async function fetchJson(path: string) {
  const res = await fetch(path)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function renderHome(container: HTMLElement) {
  const section = document.createElement('section')
  section.className = 'page page-home'

  section.innerHTML = `
    <h1>Вітаємо у Простір Львів</h1>
    <p class="lead">Затишний простір для подій, фільмів і кави.</p>
    <div class="home-grid">
      <div id="home-info" class="card"></div>
      <div id="home-upcoming" class="card"></div>
    </div>
  `

  container.appendChild(section)

  // Info
  const infoEl = section.querySelector('#home-info') as HTMLElement
  infoEl.innerText = 'Завантаження інформації...'
  try {
    const data = await fetchJson('/api/info/')
    const info = (data.info && data.info[0]) || null
    if (info) {
      infoEl.innerHTML = `
        <h2>Про нас</h2>
        <p>${info.description}</p>
        <p><strong>Адреса:</strong> ${info.address || '—'}</p>
        <p><strong>Телефон:</strong> ${info.phone || '—'}</p>
        <p><a href="${info.instagram || '#'}" target="_blank">Instagram</a></p>
      `
    } else {
      infoEl.innerText = 'Інформація відсутня.'
    }
  } catch (err: any) {
    infoEl.innerText = `Не вдалося завантажити інформацію: ${err.message}`
  }

  // Upcoming events preview
  const upEl = section.querySelector('#home-upcoming') as HTMLElement
  upEl.innerText = 'Завантаження майбутніх подій...'
  try {
    const events = await fetchJson('/api/events/upcoming/')
    if (events.events && events.events.length > 0) {
      upEl.innerHTML = '<h2>Найближчі події</h2>'
      const list = document.createElement('ul')
      list.className = 'list-compact'
      events.events.slice(0, 5).forEach((e: any) => {
        const li = document.createElement('li')
        li.innerHTML = `<strong>${e.title}</strong> — ${e.date} ${e.time || ''}<div class="muted">${e.location || ''}</div>`
        list.appendChild(li)
      })
      upEl.appendChild(list)
      upEl.appendChild(document.createElement('hr'))
      const more = document.createElement('a')
      more.href = '#/events'
      more.textContent = 'Дивитися всі події →'
      upEl.appendChild(more)
    } else {
      upEl.innerText = 'Немає запланованих подій.'
    }
  } catch (err: any) {
    upEl.innerText = `Не вдалося завантажити події: ${err.message}`
  }
}
