import { fetchApi } from '../../../src/services/api';

export const selectLanguage = (language) => ({
    type:'SELECT_LANGUAGE',
    language
});

export const login = () => ({
    type:'LOGIN',
});

const fetchAPI = (language, userId) => {
    console.log(language, userId, "Sab kuch hai")
    return (dispatch) => {
        // dispatch(selectLanguage(language))
        fetchApi(`/users/${userId}/selected_language`, {selected_language: language}, {}, 'POST')
        .then((res) => {
            dispatch(selectLanguage(language))
        });
     }
}

export {fetchAPI}