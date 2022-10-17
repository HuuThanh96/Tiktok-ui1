import classNames from 'classnames/bind';
import styles from './Recomend.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeartIcon, CommentIcon, ShareIcon } from '`/Components/Icon';
import { faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import avatarRecomend from '`/assets/images/avatar2.jpeg';
import poster from '`/assets/images/poster.jpeg';

const cx = classNames.bind(styles);
function Recomend() {
    return (
        <div className={cx('recomend')}>
            <img className={cx('recomend-avatar')} src={avatarRecomend} alt=""></img>
            <div className={cx('recomend-container')}>
                <div className={cx('wrapper-info')}>
                    <h3 className={cx('recomend-name')}>maiphuongthuy8</h3>
                    <p className={cx('recomend-status')}>#thinh hanh</p>
                    <span className={cx('recomend-music')}>
                        <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                        <span className={cx('music-name')}>Nhạc nền</span>
                    </span>
                </div>
                <div className={cx('wrapper-video')}>
                    <img src={poster} className={cx('recomend-img')} alt="video"></img>
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
