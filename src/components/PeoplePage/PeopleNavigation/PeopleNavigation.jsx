import PropTypes from 'prop-types';
import styles from './PeopleNavigation.module.css';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';

const PeopleNavigation = ({
  getResource,
  prevPage,
  nextPage,
  currentPage
}) => {

  const handleChangePrev = () => getResource(prevPage);
  const handleChangeNext = () => getResource(nextPage);

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${currentPage - 1}`} className={styles.buttons}>
        <UiButton
          text="Назад"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${currentPage + 1}`} className={styles.buttons}>
        <UiButton
          text="Вперед"
          onClick={handleChangeNext}
          disabled={!nextPage}
        />
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  currentPage: PropTypes.number
}

export default PeopleNavigation;
