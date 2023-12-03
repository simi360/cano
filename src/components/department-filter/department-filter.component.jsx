import '../sorter/sorter.styles.css'

const DepartmentFilter = ({ selectedFilter, handleChangeFilter, filterOptions }) => {
  return (
    <div className='select'>
      <label htmlFor="filter">Filter By: </label>
      <select
        name='filter'
        onChange={handleChangeFilter}
        value={selectedFilter}
      >
        <option value="">--Select Department--</option>
        <option value="All Products">All Products</option>
        {filterOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentFilter;