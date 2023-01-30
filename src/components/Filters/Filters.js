import './Filters.scss';

function Filters({ onSetFilter }) {
  const buttonsData = [
    {
      label: 'Brazil',
    },
    {
      label: 'Kenya',
    },
    {
      label: 'Columbia',
    },
  ];

  const buttons = buttonsData.map(({ label }) => (
    <button className="choice-goods__filter-btn" key={label} onClick={() => onSetFilter(label)}>
      {label}
    </button>
  ));

  return <>{buttons}</>;
}

export default Filters;
