import React, {Component} from 'react'

import { connect } from 'react-redux';

import { getLanguages, getNewFilter, getNewSort } from '../../services/actions';

class SortFilterPanel extends Component {

    componentDidMount() {
       this.props.getLanguages('https://api.github.com/languages');
    }

    onChangeFilter = (e) => {
        this.props.changeFilter(e.target.value);
    }

    render() {

        console.log('sort panel props is ', this.props);

        const languages = this.props.languages.map(item => {
            return <option key={item.name} value={item.name}>{item.name}</option> })

        return (
            <div>

            <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="#language">Language</label>
                <select onChange={this.onChangeFilter} className="custom-select mr-sm-2" name="Language">
                    <option key="0" value="">All</option>
                    {languages}
                </select>
            </div>

            <div className="form-group col-md-6">
                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    
                    <label className="form-check-label" htmlFor="#sort">
                        <input type="checkbox" className="form-check-input" name="sort"
                            onClick={this.props.changeSort}/>
                        
                        Sort by date</label>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.List,
        languages: state.Languages,
        error: state.LanguageHasErrored,
        loading: state.LanguageIsLoading,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
       getLanguages: (url) => dispatch(getLanguages(url)),
       changeFilter: (lang) => dispatch(getNewFilter(lang)),
       changeSort: () => dispatch(getNewSort())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SortFilterPanel);