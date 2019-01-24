import React from 'react';
import { MDBRow, MDBCol, Button, MDBInput } from 'mdbreact';
import PropTypes from 'prop-types';

const ButtonUI = ({ onClick, text }) => (
  <Button
    outline
    color="mdb-color"
    size="sm"
    onClick={onClick}
  >
    {text}
   </Button>
);

const SearchFilter = ({ onChangeHandler, onClickHandler, onResetHandler, searchKey }) => {
  return(
      <MDBRow>
        <MDBCol middle="true">
          <MDBInput className="form-control" type="text" name="searchFilter" label="Search here..." onChange={onChangeHandler} value={searchKey} />
        </MDBCol>
        <MDBCol middle="true" size="auto">
          <ButtonUI onClick={onClickHandler} text="Search" />
        </MDBCol>
        <MDBCol middle="true" size="auto">
          <ButtonUI onClick={onResetHandler} text="Reset" />
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
