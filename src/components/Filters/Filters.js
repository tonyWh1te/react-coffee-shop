import './Filters.scss';

function Filters({ onSetFilter, filter }) {
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

  const buttons = buttonsData.map(({ label }) => {
    const active = label === filter;
    return (
      <button
        className={`choice-goods__filter-btn ${active ? ' choice-goods__filter-btn--active' : ''}`}
        key={label}
        onClick={() => onSetFilter(label)}
      >
        {label}
      </button>
    );
  });

  return <>{buttons}</>;
}

export default Filters;
