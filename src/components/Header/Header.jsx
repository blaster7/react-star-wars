import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" exact >Главная</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1" >Персонажи</NavLink >
        </li>
        <li>
          <NavLink to="/not-found" exact >Нет страницы</NavLink >
        </li>
      </ul>
    </div>
  )
}

export default Header;
