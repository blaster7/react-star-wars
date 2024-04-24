import PropTypes from 'prop-types';
import { getApiResource } from '@utils/network';
import styles from './PersonPage.module.css';
import React, { Suspense, useEffect, useState } from 'react';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonFoto from '@components/PersonPage/PersonFoto/PersonFoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import UiLoading from '@ui/UiLoading';

//import PersonFilms from '@components/PersonPage/PersonFilms/PersonFilms';
const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({ match, setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personFoto, setPersonFoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {

    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setErrorApi(false);
        setPersonInfo([
          { title: 'Рост', data: res.height },
          { title: 'Вес', data: res.mass },
          { title: 'Цвет волос', data: res.hair_color },
          { title: 'Цвет глаз', data: res.eye_color },
          { title: 'Цвет кожи', data: res.skin_color },
          { title: 'Дата рождения', data: res.birth_year },
          { title: 'Пол', data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonFoto(getPeopleImage(id));
        res.films.length && setPersonFilms(res.films);


      } else {
        setErrorApi(true);
      }

    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonFoto
            personFoto={personFoto}
            personName={personName}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match: PropTypes.object
}

export default withErrorApi(PersonPage);
