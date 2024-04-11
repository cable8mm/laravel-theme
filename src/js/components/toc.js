import { $q } from '../helpers/dom'
import { parseHeadings, getHeadings } from '../helpers/headings'

const getContainer = () => $q('[data-autotoc]')

const generateTOCList = (headings) => {
  return headings
    .map((h) => {
      return h.tag === 'H2'
        ? `<li>
        <a href="${h.href}" class="block py-1 font-medium text-sky-500 dark:text-sky-400">
          ${h.text}
        </a>
      </li>`
        : `
      <li class="ml-4">
      <a href="${h.href}"
        class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
        <svg
          width="3" height="24" viewBox="0 -9 3 24"
          class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
          <path
            d="M0 0L3 3L0 6" fill="none" stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round">
          </path>
        </svg>${h.text}
      </a>
    </li>
      `
    })
    .join('')
}

const initialize = () => {
  const container = getContainer()
  const headings = getHeadings()

  if (!container || headings.length < 3) {
    return
  }

  const tocHTML = generateTOCList(parseHeadings(headings))

  const tocDOM = `
<h5
  class="text-gray-500 font-semibold mb-4 text-sm leading-6 md:text-sm lg:text-lg xl:text-sm">On
  this page
</h5>
<ul class="text-gray-500 text-sm leading-6">${tocHTML}
</ul>
`

  container.innerHTML = tocDOM
}

initialize()
