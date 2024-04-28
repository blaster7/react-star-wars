import UiVideo from '@ui/UiVideo';
import styles from './ErrorMessage.module.css';
import hanSolo from './video/han-solo.mp4';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        Темная сторона силы победила.<br />
        Мы не можем отобразить данные.<br />
        Возвращайтесь, когда мы все исправим!
      </p>
      <UiVideo src={hanSolo} classes={styles.video} playbackRate={1.0} />
    </>
  )
}

export default ErrorMessage;
