import css from './Button.module.css';

function Button({ onClick }) {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;