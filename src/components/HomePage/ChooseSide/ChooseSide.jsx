import PropTypes from 'prop-types';
import styles from './ChooseSide.module.css';
import imgDarkSide from './img/dark-side.jpg';
import imgFlcon from './img/falcon.jpg';
import imgLightSide from './img/light-side.jpg';
import cn from 'classnames';

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL
} from '@context/ThemeProvider';

const elements = [
  {
    theme: THEME_LIGHT,
    text: 'Светлая сторона силы',
    img: imgLightSide,
    classes: styles.item__light,
  },
  {
    theme: THEME_DARK,
    text: 'Темная сторона силы',
    img: imgDarkSide,
    classes: styles.item__dark,
  },
  {
    theme: THEME_NEITRAL,
    text: 'Я Хан Соло',
    img: imgFlcon,
    classes: styles.item__neitral,
  }
];

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();
  return (
    <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  )
};
ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string
}


const ChooseSide = () => {
  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  )
}
export default ChooseSide;
