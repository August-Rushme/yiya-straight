import http from '../request/index.js';

const productApi = {
	productSuggest: '/product/getSuggestions',
	getSearchResult: '/product/list',
	getProductByType: '/product/type',
	getProductById: "/product"
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

export function getProductByType(data){
	return http.post(productApi.getProductByType,{
		...data
	})
}

export function getProductById(id){
	return http.get(productApi.getProductById + '/' + id)
}