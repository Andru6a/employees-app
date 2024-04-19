import EmploeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeValue }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            // <EmploeesListItem name={item.name} salary={item.salary}/>
            <EmploeesListItem
                key={id}
                onDelete={() => onDelete(id)}
                {...itemProps}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeValue={(name, salary) => onChangeValue(name, salary)}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;