import { useHistory } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';
import iconBack from './img/back.svg';

const PersonLinkBack = () => {
  const history = useHistory();

  const handleGoBack = (event) => {
    event.preventDefault();
    history.goBack();
  }

  return (
    <a
      href='#'
      onClick={handleGoBack}
      className={styles.link}
    >
      <img className={styles.link__img} src={iconBack} alt='Назад'/>
      <span>Назад</span>
    </a>
  )
}

export default PersonLinkBack;
