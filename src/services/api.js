import axios from 'axios';
import Router from 'next/router';
import { BACKEND_URL } from './config';

export const fetchApi = (endpoint, payload, headers, method = 'get') => {
	const axiosConfig = {
		method: method.toLowerCase(),
		headers,
	};
	if (axiosConfig.method === 'get') {
		axiosConfig.params = payload;
	} else {
		axiosConfig.data = payload;
	}
	return axios(`${BACKEND_URL}${endpoint}`, axiosConfig)
		.catch((response) => {
			// TODO: More sane error handling. Currently, assuming that
			// the access token has expired, and hence sending to / to
			// ask user to log in again
			if (response.code === '401') {
				Router.replace('/');
			}
		});
};
