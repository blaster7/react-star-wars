import styles from './NotFoundPage.module.css';
import img from './img/not-found.png';
import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {

  let location = useLocation();

  return (
    <>
      <img className={styles.img} src={img} alt='Not found' />
      <p className={styles.text}>Нет страницы для <u>{location.pathname}</u></p>
    </>
  )
}

export default NotFoundPage;
