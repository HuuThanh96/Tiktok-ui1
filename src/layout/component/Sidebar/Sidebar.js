import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import SuggestedAccounts from './SuggestedAccounts/SuggestedAcounts';

function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <Menu />
            <SuggestedAccounts tittle="Suggested Accounts" />
            <SuggestedAccounts tittle="Following Accounts" />
            <SuggestedAccounts tittle="Following Accounts" />
            <SuggestedAccounts tittle="Following Accounts" />
            <SuggestedAccounts tittle="Following Accounts" />
        </div>
    );
}

export default Sidebar;
