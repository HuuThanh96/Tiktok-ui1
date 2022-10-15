import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../component/Header';
import Sidebar from '`/layout/component/Sidebar';
import Recomend from '`/Components/Recomend';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('wrapper-sidebar')}>
                        <Sidebar />
                    </div>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
