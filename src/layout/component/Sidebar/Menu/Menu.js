import classNames from 'classnames/bind';
import { HomeIcon, FollowIcon, LiveIcon } from '`/Components/Icon';
import styles from './Menu.module.scss';
import routes from '`/config/routes';

import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('Menu')}>
            <MenuItem to={routes.home}>
                <HomeIcon className={cx('icon')} />
                <h4 className={cx('menu-label')}> For you</h4>
            </MenuItem>
            <MenuItem to={routes.following}>
                <FollowIcon className={cx('icon')} />
                <h4 className={cx('menu-label')}> Following</h4>
            </MenuItem>
            <MenuItem to={routes.profile}>
                <LiveIcon className={cx('icon')} />
                <h4 className={cx('menu-label')}> Live</h4>
            </MenuItem>
        </div>
    );
}

export default Menu;
