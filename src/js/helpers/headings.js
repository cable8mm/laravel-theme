import { $qa } from '../helpers/dom'

const parseHeadings = headings => {
  return headings.map(heading => {
    const a = heading.querySelector('a')

    return {
      tag: `${heading.tagName}`,
      href: `${a.href}`,
      text: a.textContent.trim()
    }
  })
}

const getHeadings = () => $qa('#main-content h2[id], #main-content h3[id]')

export { parseHeadings, getHeadings }
