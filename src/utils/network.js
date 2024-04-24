import { HTTP, HTTPS } from '@constants/api';

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const chaneHTTP = url => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(res.status);
      return false;
    }
    return await res.json();

  } catch (error) {
    console.error(error.message)
    return false;

  }
}

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body)
// })();

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//   .then(body => console.log(body))