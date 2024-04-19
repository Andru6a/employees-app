import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmploeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Andrey P.", salary: 800, increase: true, rise: true, id: 1 },
        {
          name: "Polina T.",
          salary: 3000,
          increase: false,
          rise: false,
          id: 2,
        },
        { name: "Ilon M.", salary: 15000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    if (name.length < 2 || salary.length === 0) return;
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      return {
        data: data.concat(newItem),
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    // this.setState({term: term})
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "empRise":
        return items.filter((item) => item.rise);
      case "moreThen":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterActive = (filter) => {
    this.setState({ filter });
  };

  onChangeValue = (name, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.name === name) {
          return { ...item, salary: salary };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data, term, filter } = this.state;

    const employees = data.length;
    const increased = data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterActive={this.onFilterActive} />
        </div>

        <EmploeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeValue={this.onChangeValue}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
