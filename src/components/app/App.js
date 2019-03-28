import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { getList } from '../../services/actions';
import SortFilterPanel from '../sort-filter-panel';

class App extends Component {
  
  componentDidMount() {
    this.props.getList('https://api.github.com/search/repositories?q=sort=stars&order=desc');
  }

  transformDate(date) {
    let newdate = date.substring(0,10).replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1');
    return newdate;
  }

  sortFilterItems(list, language, sort) {
    let newList = [];

    if (language === "") { 
        newList = list; 
    }
    else {
        newList = list.filter(item => item.language === language);
    }
    
    if (sort) {
      newList = newList.sort((a,b) => {
        const DateA = new Date(this.transformDate(a.updated_at));
        const DateB = new Date(this.transformDate(b.updated_at));

              
      return DateA - DateB;
        });
    }
    else
    {
      newList = newList.sort((a,b) => b.score - a.score);
    }

    return newList;
  }
  
  render() {

    const { list, filter, sort } = this.props;
    
    console.log(this.props);

    const visibleItems = this.sortFilterItems(list, filter, sort);
    
    const elements = visibleItems.map((item) => {
      
      return (
      <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.owner.login}</td>
          <td><a href={item.html_url}>{item.html_url}</a></td>
          <td>{item.score}</td>
          <td>{item.language}</td>
          <td>{this.transformDate(item.updated_at)}</td>            
      </tr>
      );
      });

    return (
      <div className="App">
        <h2 className="text-center">Repositories</h2>
        <SortFilterPanel />
        <div className="mt-4">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Repository Name</th>
                <th>User Login</th>
                <th>Link</th>
                <th>Rating</th>
                <th>Language</th>
                <th>Last refresh date</th>
              </tr>  
            </thead>
            <tbody>
              {elements}
            </tbody> 
          </table>
        </div>
      </div>
    );
  }


};

const mapStateToProps = (state) => {
  return {
      list: state.List,
      error: state.ListHasErrored,
      loading: state.ListIsLoading,
      filter: state.ChangeFilter,
      sort: state.ChangeSort      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getList: (url) => dispatch(getList(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
