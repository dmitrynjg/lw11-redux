import React from 'react';
import './ModalWindow.scss';
import PropTypes from 'prop-types';

function ModalWindow({ isOpen, closeModalWindow, children }) {
  return (
    <>
      {isOpen && (
        <div className="modal-window">
          <div className="modal-window-content">
            <div className="modal-window-content-header">
              <button
                onClick={closeModalWindow}
                type="button"
              >
                Закрыть
              </button>
            </div>
            <div className="modal-window-content-body">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ModalWindow.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeModalWindow: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
};
export default ModalWindow;
