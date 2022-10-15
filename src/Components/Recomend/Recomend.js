import classNames from 'classnames/bind';
import styles from './Recomend.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeartIcon, CommentIcon, ShareIcon } from '`/Components/Icon';
import { faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Recomend() {
    return (
        <div className={cx('recomend')}>
            <img
                className={cx('recomend-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/145f6265cbd458c4f35e717acf1164fe~c5_100x100.jpeg?x-expires=1665540000&x-signature=4p5ZnTKIZrHhR91tQ9JK3MxaM3c%3D"
                alt=""
            ></img>
            <div className={cx('recomend-container')}>
                <div className={cx('wrapper-info')}>
                    <h3 className={cx('recomend-name')}>theanh28entertaiment</h3>
                    <p className={cx('recomend-status')}>#thinh hanh</p>
                    <span className={cx('recomend-music')}>
                        <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                        <span className={cx('music-name')}>Nhạc nền</span>
                    </span>
                </div>
                <div className={cx('wrapper-video')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/6c75809f21774f9ba7dd7ca32c2ce414~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1665392400&amp;x-signature=QrI74CPpQLpCyP5jzZlcHXwIvqQ%3D"
                        className={cx('recomend-img')}
                        alt="video"
                    ></img>
                    <div className={cx('action')}>
                        <div className={cx('wrapper-action')}>
                            <button className={cx('action-btn')}>
                                <span className={cx('wrapper-icon')}>
                                    <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
                                </span>
                            </button>
                            <br></br>
                            <span className={cx('heart-count')}>100k</span>
                        </div>
                        <div className={cx('wrapper-action')}>
                            <button className={cx('action-btn')}>
                                <span className={cx('wrapper-icon')}>
                                    <FontAwesomeIcon className={cx('action-icon')} icon={faComment} />
                                </span>
                            </button>
                            <br></br>
                            <span className={cx('comment-count')}>100k</span>
                        </div>
                        <div className={cx('wrapper-action')}>
                            <button className={cx('action-btn')}>
                                <span className={cx('wrapper-icon')}>
                                    <FontAwesomeIcon className={cx('action-icon')} icon={faShare} />
                                </span>
                            </button>
                            <br></br>

                            <span className={cx('share-count')}>100k</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('follow-btn')}>Follow</button>
        </div>
    );
}

export default Recomend;
