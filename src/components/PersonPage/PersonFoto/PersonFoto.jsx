import PropTypes from 'prop-types';
import styles from './PersonFoto.module.css';

const PersonFoto = ({ personFoto, personName }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.foto} src={personFoto} alt={personName} />
      </div>
    </>
  )
}

PersonFoto.propTypes = {
  personFoto: PropTypes.string,
  personName: PropTypes.string,
}

export default PersonFoto;
