import './style.css'
import { site, biryanis, addons, groups } from './data.js'

const $ = (sel) => document.querySelector(sel)
const $$ = (sel) => document.querySelectorAll(sel)

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

// Links and contact details
const q = encodeURIComponent(site.address)
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`

$$('[data-order]').forEach((a) => (a.href = site.orderUrl))
$$('[data-phone]').forEach((a) => {
  a.href = site.phoneHref
  if (!a.dataset.keepText) a.textContent = site.phone
})
$$('[data-directions]').forEach((a) => (a.href = directionsUrl))
$('#map').src = `https://www.google.com/maps?q=${q}&output=embed`
$('#address').textContent = site.address
$('#hours').textContent = site.hours
$('#year').textContent = new Date().getFullYear()

// Menus
$('#biryani-list').innerHTML = biryanis
  .map((b) => `<li class="menu-row"><span class="menu-name">${esc(b.name)}</span><span class="menu-price">${esc(b.price)}</span></li>`)
  .join('')

$('#addon-list').innerHTML = addons
  .map((a) => `<li class="addon-row"><span>${esc(a.name)}</span><span class="addon-price">${esc(a.price)}</span></li>`)
  .join('')

$('#groups').innerHTML = groups
  .map(
    (g) => `
  <article class="group">
    <div class="group-media">
      <img src="${esc(g.img)}" alt="${esc(g.alt)}" loading="lazy" width="400" height="200" />
      <h3 class="group-name">${esc(g.name)}</h3>
    </div>
    <div class="group-body">
      <div class="group-head"><span>Item</span><span class="col-price">Price (₹)</span><span class="col-qty">Qty</span></div>
      <ul>
        ${g.items
          .map(
            (i) => `<li class="group-row"><span class="group-item">${esc(i.name)}</span><span class="col-price">${esc(i.price)}</span><span class="col-qty">${esc(i.qty)}</span></li>`,
          )
          .join('')}
      </ul>
    </div>
  </article>`,
  )
  .join('')

// Mobile menu
const toggle = $('#menu-toggle')
const mobileNav = $('#mobile-nav')
const setOpen = (open) => {
  toggle.setAttribute('aria-expanded', String(open))
  mobileNav.hidden = !open
}
toggle.addEventListener('click', () => setOpen(mobileNav.hidden))
mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)))
window.matchMedia('(min-width: 860px)').addEventListener('change', (e) => e.matches && setOpen(false))
