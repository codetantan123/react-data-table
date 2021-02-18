import DataTable, { createTheme } from 'react-data-table-component';
import {React, Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDownward />;
const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 2, title: 'Conan the Barbie', year: '1981' },
    { id: 3, title: 'Conan the Baby', year: '1983' },
    { id: 4, title: 'Conan the Bibu', year: '1985' },
    { id: 5, title: 'Conan the Babablacksheep', year: '1984' },
    { id: 6, title: 'Conan the Bulbasaur', year: '1986' },
    { id: 7, title: 'Conan the Blabla', year: '1987' },
    { id: 8, title: 'Conan the Bleble', year: '1988' },
    { id: 9, title: 'Conan the Bubi', year: '1989' },
    { id: 10, title: 'Conan the Barbarian', year: '1990' },
    { id: 11, title: 'Conan the Budajigae', year: '1992' },
    { id: 12, title: 'Conan the Barbie', year: '1991' },
    { id: 13, title: 'Conan the Baby', year: '1993' },
    { id: 14, title: 'Conan the Bibu', year: '1995' },
    { id: 15, title: 'Conan the Babablacksheep', year: '1994' },
    { id: 16, title: 'Conan the Bulbasaur', year: '1996' },
    { id: 17, title: 'Conan the Blabla', year: '1997' },
    { id: 18, title: 'Conan the Bleble', year: '1998' },
    { id: 19, title: 'Conan the Bubi', year: '1999' },
];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];
createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

export default class DT extends Component {

    state = { 
        selectedRows : [],
        toggledClearRows: false
     }
    
    handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
    };

    handleClearRows = () => {
        this.setState({ toggledClearRows: !this.state.toggledClearRows})
      }
    selectProps = { indeterminate: isIndeterminate => isIndeterminate };
      
  render() {
    return (
        <DataTable
          title="Arnold Movies"
          columns={columns}
          data={data}
          selectableRows // add for checkbox selection
          Clicked
          highlightOnHover = {true}
          onRowClicked	={this.handleChange}
          Selected={this.handleChange}
          clearSelectedRows={this.state.toggledClearRows}
          selectableRowsHighlight={true}
          selectableRowsComponent={Checkbox} 
          selectableRowsComponentProps={{ inkDisabled: true }} 
          sortIcon={sortIcon}
          fixedHeader = {true}
          theme="solarized"
          // pagination = {true}
          // paginationPerPage = {3}
        />
    )
  }
};