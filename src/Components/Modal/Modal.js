import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Body from './Body';

const cx = classNames.bind(styles);
function Modal(data) {
    const [showModal, setShowModal] = useState(data.show);
    data.handleShowModal(showModal);
    function handleShow() {
        setShowModal((pre) => !pre);
    }
    return (
        showModal && (
            <div className={cx('modal-wrapper')}>
                <div className={cx('modal-container')}>
                    <div className={cx('header')}></div>
                    <button className={cx('close')} onClick={handleShow}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    {/* Show data */}
                    <Body data={data.itemsLogIn} />
                    <div className={cx('foodter')}>
                        <p className={cx('foodter-tittle')}>
                            Don’t have an account?<a className={cx('signup-tittle')}>Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    );
}

export default Modal;
