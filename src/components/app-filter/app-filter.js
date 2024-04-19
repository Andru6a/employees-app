import './app-filter.css';


const AppFilter = (props) => {
    const btnsData = [
        {
            name: 'all', label: 'Все сотрудники'
        },
        {
            name: 'empRise', label: 'На повышение'
        },
        {
            name: 'moreThen', label: 'З/П > 1000 $'
        },
    ];

    const buttons = btnsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterActive(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}

        </div>
    );
};

export default AppFilter;