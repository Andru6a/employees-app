import './employees-list-item.css';

const EmploeesListItem = (props) => {
    console.log(props)
    const { name, salary, onDelete, onToggleProp, increase, rise, onChangeValue } = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise"
            >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}
                onChange={e => onChangeValue(name, parseInt(e.target.value))}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    title="Премия"
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}


export default EmploeesListItem;