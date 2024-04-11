export const scrollspy = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id')

      if (entry.intersectionRatio > 0) {
        document.querySelector(`#autotoc li a[href="#${id}"]`)
          .classList
          .remove('text-gray-500', 'dark:text-gray-400')
        document.querySelector(`#autotoc li a[href="#${id}"]`)
          .classList
          .add('text-gray-900', 'dark:text-gray-100', 'bg-red')
      } else {
        document.querySelector(`#autotoc li a[href="#${id}"]`)
          .classList
          .remove('text-gray-900', 'dark:text-gray-100')
        document.querySelector(`#autotoc li a[href="#${id}"]`)
          .classList
          .add('text-gray-500', 'dark:text-gray-400', 'bg-green')
      }
    })
  })

  // Track all sections that have an `id` applied
  document.querySelectorAll('#main-content h2[id], #main-content h3[id]').forEach((section) => {
    observer.observe(section)
  })
}
