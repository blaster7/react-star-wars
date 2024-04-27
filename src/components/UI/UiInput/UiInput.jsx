import PropTypes from 'prop-types';
import styles from './UiInput.module.css';
import '../index.css';
import cn from 'classnames';
import icon from './img/cancel.svg';

const UiInput = ({
  value, handelInputChange, placeholder, classes
}) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type='text'
      value={value}
      onChange={(e) => handelInputChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img
      src={icon}
      onClick={() => value && handelInputChange('')}
      className={cn(styles.clear, !value && styles.clear__disabled)}
      alt='Очистить'
    />
  </div>
)

UiInput.propTypes = {
  value: PropTypes.string,
  handelInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
}

export default UiInput;
