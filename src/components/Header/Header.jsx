import Favorite from '@components/Favorite';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL
} from '@context/ThemeProvider'
import { useEffect, useState } from 'react';

const Header = () => {
  const isTheme = useTheme();
  const [icon, setIcon] = useState(imgDroid);

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgDroid);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src={icon}
        alt='Logo'
      />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" exact >Главная</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1" >Персонажи</NavLink >
        </li>
        <li>
          <NavLink to="/search" >Поиск</NavLink >
        </li>
        <li>
          <NavLink to="/not-found" exact >Нет страницы</NavLink >
        </li>
        <li>
          <NavLink to="/fail" exact >Ошибка</NavLink >
        </li>
      </ul>
      <Favorite />
    </div>
  )
}

export default Header;