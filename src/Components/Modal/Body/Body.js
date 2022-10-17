import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import { useState } from 'react';
import LogInItem from './LogInItem';

const cx = classNames.bind(styles);

function Body({ data }) {
    const [heading, setHeading] = useState('Log in to Tiktok');
    return (
        <div className={cx('wrap-body')}>
            <h1 className={cx('heading')}>{heading} </h1>
            {data.map((item, index) => {
                return <LogInItem key={index} icon={item.icon} tittle={item.tittle} />;
            })}
        </div>
    );
}

export default Body;
