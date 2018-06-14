import axios from 'axios';
import { BACKEND_URL } from './config';
import { clearSession } from './session';

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
		.catch((error) => {
			// TODO: More sane error handling. Currently, assuming that
			// the access token has expired, and hence sending to / to
			// ask user to log in again
			if (error.response && error.response.status === 401) {
				clearSession();
			}
			throw error;
		});
};
