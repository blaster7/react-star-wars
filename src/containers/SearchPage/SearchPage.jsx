import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { debounce } from 'lodash';
import UiInput from '@ui/UiInput';
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {

  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async (params) => {
    const res = await getApiResource(API_SEARCH + params);

    if (res) {

      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return { id, name, img };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {

      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResponse('');
  }, []);

  const debounceGetResponse = useCallback(
    debounce(value => getResponse(value), 300),
    []
  );

  const handelInputChange = value => {
    setInputSearchValue(value);
    debounceGetResponse(value);
  };

  return (
    <>
      <h1 className='header__text'>Поиск</h1>
      <UiInput
        value={inputSearchValue}
        handelInputChange={handelInputChange}
        placeholder='Введите имя персонажа'
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);
