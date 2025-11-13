async function fetchJson(path: string) {
  const res = await fetch(path)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function renderInfo(container: HTMLElement) {
  const section = document.createElement('section')
  section.className = 'page page-info'
  section.innerHTML = `
    <h1>Контакти та інформація</h1>
    <div id="info-block">Завантаження...</div>
  `
  container.appendChild(section)

  const infoEl = section.querySelector('#info-block') as HTMLElement
  try {
    const data = await fetchJson('/api/info/')
    const info = (data.info && data.info[0]) || null
    if (!info) {
      infoEl.innerText = 'Інформація відсутня.'
      return
    }
    infoEl.innerHTML = `
      <div class="card contact-card">
        ${info.image ? `<img src="${info.image}" class="thumb" alt="logo"/>` : ''}
        <h2>${info.title}</h2>
        <p>${info.description}</p>
        <p><strong>Адреса:</strong> ${info.address || '—'}</p>
        <p><strong>Телефон:</strong> ${info.phone || '—'}</p>
        <p><strong>Email:</strong> <a href="mailto:${info.email}">${info.email}</a></p>
        <p><a href="${info.instagram}" target="_blank">Instagram</a></p>
      </div>
    `
  } catch (err: any) {
    infoEl.innerText = `Помилка: ${err.message}`
  }
}
