import React from 'react';
import _ from 'lodash';
import { Table, TableHead, TableBody } from 'mdbreact';
import PropTypes from 'prop-types';

const SearchResult = ({ result }) => {
  return(
    <Table>
      <TableHead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Gender</th>
        </tr>
      </TableHead>
      <TableBody>
      {
        _.map(result, (data, index) => (
          <tr key={data._id}>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.gender}</td>
          </tr>
        ))
      }
      </TableBody>
    </Table>
  );
}

SearchResult.propTypes = {
  result: PropTypes.array
}

export default SearchResult;