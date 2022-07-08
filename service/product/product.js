import http from '../request/index.js';

const productApi = {
	productSuggest: '/product/getSuggestions',
	getSearchResult: '/product/list'
}

export function getProductSuggest(data){
	return http.get(productApi.productSuggest,{
		...data
	})
}

export function getSearchResult(data){
	return http.post(productApi.getSearchResult,{
		...data
	})
}