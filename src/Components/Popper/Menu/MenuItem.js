import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '`/Components/Button/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    let Cop = 'button';
    if (data.to) {
        Cop = Link;
    } else if (data.href) {
        Cop = 'a';
    }

    const classes = cx('menu-item', { separate: data.separate });
    return (
        <div className={classes}>
            <Cop className={cx('menu-button')} to={data.to} href={data.href} onClick={onClick}>
                <span className={cx('menu-icon')}>{data.icon}</span>
                {data.tittle}
            </Cop>
        </div>
    );
}

export default MenuItem;
