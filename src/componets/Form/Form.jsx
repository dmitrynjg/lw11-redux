import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

function Form({ submit }) {
    const [userData, setUserData] = useState({
        name: '', email: '', role: 'user', status: 'Активный',
    });

    return (
        <div className="form">
            <div className="form-item">
                <input
                  className="form-item__input"
                  onChange={(e) => {
                        setUserData({ ...userData, name: e.target.value });
                    }}
                  placeholder="Имя"
                />
            </div>
            <div className="form-item">
                <input
                  className="form-item__input"
                  onChange={(e) => {
                        setUserData({ ...userData, email: e.target.value });
                    }}
                  placeholder="email"
                />
            </div>
            <div className="form-item">
                <div>Роль:</div>
                <select
                  className="form-item__select"
                  onChange={(e) => { setUserData({ ...userData, role: e.target.value }); }}
                >
                    <option value="user">Пользователь</option>
                    <option value="admin">Админ</option>
                </select>
            </div>
            <div className="form-item">
            <div>Статус:</div>
                <select
                  className="form-item__select"
                  onChange={(e) => { setUserData({ ...userData, status: e.target.value }); }}
                >
                    <option value="Активный">Активный</option>
                    <option value="Неактивный">Неактивный</option>
                </select>
            </div>
            <div className="form-item">
                <button
                  className="form-item__button"
                  onClick={() => {
                        submit(userData);
                    }}
                  type="button"
                >
                    Отправить

                </button>
            </div>
        </div>
    );
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
};
export default Form;
