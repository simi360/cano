import './search-input.styles.css'

const SearchInputBox = ({searchChange}) => {
	return (
		<div className='search-box-container'>
			<input 
			type='search' 
			placeholder='Search Products' 
			onChange = {searchChange}
			/>
		</div>
		);
}

export default SearchInputBox;