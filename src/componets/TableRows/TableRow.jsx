import React from 'react';
import './TableRow.scss';
import PropTypes from 'prop-types';

const TableRow = ({
  listData = [],
  isTableHeader = false,
  isSelected = false,
  children,
  doubleClickCallback,
  selectMethod,
}) => (
    <div
      onClickCapture={selectMethod}
      onDoubleClickCapture={doubleClickCallback}
      className={isSelected ? ('table-row table-row_selected') : ('table-row')}
      role="button"

    >

      { listData.map((td) => (
        <div
          className="table-row-td"

        >
          {isTableHeader ? (<b>{td}</b>) : (td)}

        </div>
      ))}
      {children}
    </div>
  );
TableRow.propTypes = {
  listData: PropTypes.arrayOf.isRequired,
  isTableHeader: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  doubleClickCallback: PropTypes.func.isRequired,
  selectMethod: PropTypes.func.isRequired,
};
export default TableRow;
