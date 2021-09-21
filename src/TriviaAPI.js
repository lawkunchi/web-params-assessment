/**
 * @description This file contains helper functions to interact with the Trivia  API.
 *
 */

const API_URL = 'https://api.trivia.willfry.co.uk';

/**
 * @description Get questions request.
 */
export const getQuestions = async (amount=10, category=-1) => {

	const url = `${API_URL}/questions?limit=${amount}` + ((category !== -1) ? `&categories=${category}` : '') ;
	
	return fetch(url)
	.then(res => {
		if (res.status !== 200) {
			return res;
		}
		return res.json();
	})
	.then(data => {
		if (data) {
			return data;
		}
	});
}
/**
 * @description Get all avalailables categories.
 */
export const getCategories = async () => {

	let categories = [
		{"id":"general_knowledge","name":"General Knowledge"},
		{"id":"food_and_dribk","name":"Food and Drink"},
		{"id":"geography","name":"Geography"},
		{"id":"history","name":"History"},
		{"id":"art_and_literature","name":"Art and Literature"},
		{"id":"music","name":"Movies"},
		{"id":"music","name":"Music"},
		{"id":"science","name":"Science"},
		{"id":"society_and_culture","name":"Society and Culture"},
		{"id":"sport_and_leisure","name":"Sport and Leisure"}
	];
	return categories;

	
}
