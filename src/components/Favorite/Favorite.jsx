import { useSelector } from 'react-redux';
import styles from './Favorite.module.css';
import icon from './img/bookmark.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Favorite = () => {

  const [count, setCount] = useState(0);
  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    let lenght = Object.keys(storeDate).length;
    lenght.toString().length > 2 ? setCount('...') : setCount(lenght);

  }, [storeDate]);

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img
          className={styles.icon}
          src={icon}
          alt='Избранное'
        />
      </Link>
    </div>
  )
}

export default Favorite;
