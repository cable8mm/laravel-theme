import '../css/app.css'

import Alpine from 'alpinejs'
import Focus from '@alpinejs/focus'

import './clipboard'
import './components/search'

import SetTab from './tabbed_code.js'

window.Alpine = Alpine

Alpine.plugin(Focus)
Alpine.start()

window.setTab = SetTab

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#docsScreen')) {
    import('./docs.js')
    import('./components/toc')
  }

  import('./components/accessibility')
})
