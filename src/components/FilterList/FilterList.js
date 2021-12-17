import style from './FilterList.module.css';
import PropTypes from 'prop-types';


export default function FilterList ({filter, onFilterHandleChange}) {
    const onHandleChange = event => {
        onFilterHandleChange(event.target.value)
    }
    return (
        <label className={style.label}>
         Find contact by name
         <input type="text" value={filter} name="filter" onChange={onHandleChange}/>
        </label>
    )
}


FilterList.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterHandleChange: PropTypes.func.isRequired
}
