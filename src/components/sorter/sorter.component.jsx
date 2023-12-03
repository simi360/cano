import './sorter.styles.css'

const Sorter = ({ selectedSort, handleChangeSort }) => {
  return (
    <div className='select'>
      <label htmlFor='sort'>Sort By: </label>
      <select
        name='sort'
        onChange={handleChangeSort}
        value={selectedSort}
      >
        <option value="">-- Please Select --</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
};

export default Sorter;