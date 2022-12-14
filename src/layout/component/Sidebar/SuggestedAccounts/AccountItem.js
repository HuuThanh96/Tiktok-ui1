import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper } from '`/Components/Popper';
import Button from '`/Components/Button';
import avatar from '`/assets/images/avatar.jpeg';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <Tippy
            interactive
            offset={[-30, 3]}
            delay="700"
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <div className={cx('profile-container')}>
                            <div className={cx('profile-heading')}>
                                <img className={cx('profile-avatar')} src={avatar} alt="avatar"></img>
                                <Button primary>Follow</Button>
                            </div>
                            <div className={cx('profile-body')}>
                                <h4 className={cx('profile-account-name')}>
                                    theanh28entertainment{' '}
                                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                </h4>
                                <p className={cx('profile-name')}>Theanh28entertaiment</p>
                            </div>
                            <div className={cx('profile-foodter')}>
                                <p className={cx('profile-followers')}>
                                    <span className={cx('follower-count')}>5M</span>
                                    Followers
                                </p>
                                <p className={cx('profile-likes')}>
                                    <span className={cx('like-count')}>5M</span>
                                    Likes
                                </p>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={avatar} alt="avatar"></img>
                <div className={cx('account-info')}>
                    <h4 className={cx('account-name')}>
                        theanh28entertainment <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <p className={cx('name')}>theanh28entertaiment</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
