import './style.css'
import { setupCounter } from './counter'
import { createHeader } from './components/header'
import { createFooter } from './components/footer'
import { initRouter } from './router'

const app = document.querySelector<HTMLDivElement>('#app')!

// Basic layout: header, main content, footer
app.innerHTML = `
  <div id="site-root">
    <header id="site-header"></header>
    <main id="content" aria-live="polite"></main>
    <footer id="site-footer"></footer>
  </div>
`

// Header + footer
const headerEl = document.getElementById('site-header')!
headerEl.appendChild(createHeader())
const footerEl = document.getElementById('site-footer')!
footerEl.appendChild(createFooter())

// A small counter included for playground
const counterBtn = document.createElement('button')
counterBtn.id = 'counter'
counterBtn.type = 'button'
counterBtn.style.margin = '0.5rem'
counterBtn.textContent = 'counter'
headerEl.appendChild(counterBtn)
setupCounter(counterBtn)

// Start the client-side router (hash-based)
initRouter(document.getElementById('content')!)
