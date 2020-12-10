import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toggleModalWindow from './actions/modalWindow';
import {
  selectUser, deleteUser, addUser, editUser,
} from './actions/user';

import './App.css';
import Form from './componets/Form/Form';
import ModalWindow from './componets/ModalWindow/ModalWindow';
import Table from './componets/Table/Table';
import TableRow from './componets/TableRows/TableRow';
import TableToolbar from './componets/TableToolbar/TableToolbar';

function App({
  selectMethod,
  deleteUserId,
  sendForm,
  toggleModalWindowCallback,
  setUserData,
  isOpenModalWindow,
  list,
}) {
  const [isEdit, setEditMode] = useState(false);
  const [userID, setUserId] = useState(false);
  return (
    <div className="app">
      <ModalWindow isOpen={isOpenModalWindow} closeModalWindow={toggleModalWindowCallback}>
        <Form submit={isEdit ? (data) => (setUserData({ ...data, id: userID })) : sendForm} />
      </ModalWindow>
      <TableToolbar addButtonCallback={() => {
        setEditMode(false);
        toggleModalWindowCallback();
      }}
      />
      <Table headerList={['Имя', 'Email', 'Роль', 'Статус']}>
        {list.map((user) => (
          <TableRow
            listData={[user.name, user.email, user.role, user.status]}
            isSelected={user.isSelected}
            selectMethod={() => {
              selectMethod(user.id);
            }}
            doubleClickCallback={() => {
              setEditMode(true);
              setUserId(user.id);
              toggleModalWindowCallback();
            }}
            key={user.id}
          >

            {
              user.isSelected && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      deleteUserId(user.id);
                    }}
                  >
                    Удалить

                  </button>
                </>
              )
            }

          </TableRow>
        ))}
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isOpenModalWindow: state.modalWindowReducer.isOpen,
  list: state.usersTableReducer.usersList,
});

const mapDispatchToProps = (dispatch) => ({
  selectMethod: (id) => dispatch(selectUser(id)),
  deleteUserId: (id) => dispatch(deleteUser(id)),
  sendForm: (data) => dispatch(addUser(data)),
  toggleModalWindowCallback: () => dispatch(toggleModalWindow()),
  setUserData: (data) => dispatch(editUser(data)),
});
App.propTypes = {
  selectMethod: PropTypes.func.isRequired,
  deleteUserId: PropTypes.func.isRequired,
  sendForm: PropTypes.func.isRequired,
  toggleModalWindowCallback: PropTypes.func.isRequired,
  list: PropTypes.arrayOf.isRequired,
  setUserData: PropTypes.func.isRequired,
  isOpenModalWindow: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
