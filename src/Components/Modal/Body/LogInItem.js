import classNames from 'classnames/bind';
import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function LogInItem({ icon, tittle }) {
    return (
        <div className={cx('logInItem')}>
            {icon}
            <div className={cx('logInTittle')}>
                <h3 className={cx('tittle')}> {tittle}</h3>
            </div>
        </div>
    );
}

export default LogInItem;
