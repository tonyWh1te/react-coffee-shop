import './Beans.scss';

function Beans({ classes, imageUrl }) {
  const clazz = classes.length > 0 ? classes.join(' ') : '';
  return (
    <div className={`beans ${clazz}`}>
      <img className="beans__img" src={imageUrl} alt="beans" />
    </div>
  );
}

export default Beans;
