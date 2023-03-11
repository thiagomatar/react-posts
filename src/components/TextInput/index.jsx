import './styles.css'
export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input
        className="textInput"
        onChange={handleChange}
        type="search"
        placeholder="Type your search"
        value={searchValue}/>
    )
}