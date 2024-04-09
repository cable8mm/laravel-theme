import docsearch from '@docsearch/js'

docsearch({
  container: '#docsearch',
  // eslint-disable-next-line camelcase, no-undef
  appId: algolia_app_id,
  // eslint-disable-next-line camelcase, no-undef
  apiKey: algolia_search_key,
  indexName: 'laravel',
  searchParameters: {
    facetFilters: ['version:' + window.version]
  }
})
