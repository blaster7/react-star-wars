import PropTypes from 'prop-types';
import styles from './PersonFoto.module.css';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

const PersonFoto = ({
  personId,
  personFoto,
  personName,
  personFavorite,
  setPersonFavorite
}) => {

  const dispatch = useDispatch();
  const dispatchFavoritPeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personFoto
        }
      }));
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.foto} src={personFoto} alt={personName} />
        <img
          className={styles.favorite}
          src={personFavorite
            ? iconFavoriteFill
            : iconFavorite
          }
          onClick={dispatchFavoritPeople}
          alt={personFavorite
            ? 'Удалить из избранного'
            : 'Добавить в избранное'
          }
        />
      </div>
    </>
  )
}

PersonFoto.propTypes = {
  personId: PropTypes.string,
  personFoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonFoto;
