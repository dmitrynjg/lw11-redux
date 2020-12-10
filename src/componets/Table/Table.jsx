import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRows/TableRow';

function Table({ children, headerList }) {
  return (
    <div className="table">
      <TableRow listData={headerList} isTableHeader />
      {children}
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   adsdUser: (newUser) => dispatch(addUser(newUser)),
// });
Table.propTypes = {
	children: PropTypes.element.isRequired,
	headerList: PropTypes.arrayOf.isRequired,
};
export default Table;
