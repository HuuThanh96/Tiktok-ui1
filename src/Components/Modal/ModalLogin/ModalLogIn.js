import classNames from 'classnames/bind';
import styles from './ModalLogIn.module.scss';

import Modal from '../Modal';
import LogInItem from './LogInItem';

function ModalLongin({ itemsLogIn }) {
    return (
        <Modal>
            {itemsLogIn.map((item) => (
                <LogInItem icon={item.icon} tittle={item.tittle} />
            ))}
        </Modal>
    );
}

export default ModalLongin;
