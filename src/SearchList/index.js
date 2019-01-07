import React, { Component } from 'react'
import _ from 'lodash';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import { appData } from '../appData';

import SearchResult from './components/SearchResult';
import SearchFilter from './components/SearchFilter';

export default class SearchList extends Component {
  constructor(props){
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
  }

  state = {
    data: appData,
    searchKey: ''
  }

  onClickHandler = (evt) => {
    evt.preventDefault();
    const filteredData = _.filter(appData, ({ name }) => _.toLower(name).includes(this.state.searchKey));
    this.setState({
      data: filteredData
    })
  }

  onResetHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      data: appData,
      searchKey: ''
    });
  }

  onChangeHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      searchKey: _.toLower(evt.target.value)
    });
  }

  render() {
    return (
        <MDBContainer>
          <MDBRow center>
            <MDBCol middle="true" xs="12" md="6">
              <h3>
                <strong>Search </strong>
                <small className="text-muted">Filter</small>
              </h3>
              <h5>
                <small className="text-muted">
                { this.state.data.length === 0 && 'No result found' }
                { this.state.data.length === 1 && '1 result found' }
                { this.state.data.length > 1 && `${this.state.data.length} results found` }
                </small>
              </h5>
            </MDBCol>
            <MDBCol xs="12" md="6">
              <SearchFilter 
                onChangeHandler={this.onChangeHandler.bind(this)}
                onClickHandler={this.onClickHandler.bind(this)}
                onResetHandler={this.onResetHandler.bind(this)}
                searchKey={this.state.searchKey}
              />
            </MDBCol>
            <MDBCol xs="12">
              <SearchResult result={this.state.data} />
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    )
  }
}
