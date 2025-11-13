export function createFooter(): HTMLElement {
  const footer = document.createElement('div')
  footer.className = 'site-footer-content'
  footer.innerHTML = `
    <div class="footer-inner">
      <div>© ${new Date().getFullYear()} Простір Львів</div>
      <div class="footer-contacts">
        <a href="#/info">Контакти</a>
      </div>
    </div>
  `
  return footer
}
