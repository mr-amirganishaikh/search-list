import React from 'react';
import { MDBRow, MDBCol, Button, MDBInput } from 'mdbreact';
import PropTypes from 'prop-types';

const SearchFilter = ({ onChangeHandler, onClickHandler, onResetHandler, searchKey }) => {
  return(
      <MDBRow>
        <MDBCol middle="true">
          <MDBInput className="form-control" type="text" name="searchFilter" label="Search here..." onChange={onChangeHandler} value={searchKey} />
        </MDBCol>
        <MDBCol middle="true" size="auto">
          <Button
            outline
            color="mdb-color"
            size="sm"
            onClick={onClickHandler}
          >
            Search
          </Button>
        </MDBCol>
        <MDBCol middle="true" size="auto">
          <Button
            outline
            color="black"
            size="sm"
            onClick={onResetHandler}
          >
            Reset
          </Button>
        </MDBCol>
      </MDBRow>
  );
};

SearchFilter.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  onResetHandler: PropTypes.func.isRequired,
  searchKey: PropTypes.string.isRequired
}

export default SearchFilter;