import { useEffect, useState } from 'react';
import styles from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList';

const FavoritesPage = () => {
  const [people, setPeople] = useState([]);

  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(() => {

    const arr = Object.entries(storeDate);
    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1]
        }
      });

      setPeople(res);
    }

  }, []);

  return (
    <>
      <h1 className='header__text'>Избранное</h1>
      {people.length
        ? <PeopleList people={people} />
        : <h2 className={styles.comment}>Список пуст</h2>
      }
    </>
  )
}

export default FavoritesPage;
