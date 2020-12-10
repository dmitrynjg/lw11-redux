import React from 'react';
import PropTypes from 'prop-types';

function TableToolbar({ addButtonCallback }) {
  return (
    <div className="toolbar">
      <h2>Таблица</h2>
      <button
        type="button"
        onClick={() => {
          addButtonCallback();
        }}
      >
        Добавить
      </button>
    </div>
  );
}
TableToolbar.propTypes = {
  addButtonCallback: PropTypes.func.isRequired,
};
export default TableToolbar;
