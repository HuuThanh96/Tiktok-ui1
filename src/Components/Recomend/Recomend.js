import classNames from 'classnames/bind';
import styles from './Recomend.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeartIcon, CommentIcon, ShareIcon, SoundIcon, StopIcon, StartIcon } from '`/Components/Icon';
import {
    faComment,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeDown,
    faVolumeHigh,
    faVolumeLow,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';

import avatarRecomend from '`/assets/images/avatar2.jpeg';
import poster from '`/assets/images/poster.jpeg';
import video from '`/assets/videos/video1.mp4';
import { useState, useRef } from 'react';

const cx = classNames.bind(styles);
function Recomend() {
    //handle volume
    const plVolume = useRef(null);
    const [showVolume, setShowVolume] = useState(true);
    const handleShowVolume = () => {
        setShowVolume(!showVolume);
    };

    const handlMuteVolume = () => {
        plVideo.current.volume = 0;
    };
    const handlPlayVolume = () => {
        plVideo.current.volume = 0.5;
    };

    //handle player video
    const plVideo = useRef(null);

    const [showPlayer, setShowPlayer] = useState(false);
    const handleShowPlayer = () => {
        setShowPlayer(!showPlayer);
    };

    const handleStopVideo = () => {
        plVideo.current.pause();
    };
    const handleStartVideo = () => {
        plVideo.current.play();
    };

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
                    {/* <img src={poster} className={cx('recomend-img')} alt="video"></img> */}
                    <div className={cx('recomend-video')}>
                        <video src={video} className={cx('video')} autoPlay loop ref={plVideo}></video>

                        <div className={cx('stop-start-icon')} onClick={handleShowPlayer}>
                            {showPlayer && (
                                <FontAwesomeIcon icon={faPause} className={cx('stop-icon')} onClick={handleStopVideo} />
                            )}
                            {!showPlayer && (
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    className={cx('start-icon')}
                                    onClick={handleStartVideo}
                                />
                            )}
                        </div>
                        <div className={cx('sound-icon')} onClick={handleShowVolume}>
                            {showVolume && (
                                <FontAwesomeIcon
                                    icon={faVolumeHigh}
                                    className={cx('volume-icon')}
                                    onClick={handlMuteVolume}
                                />
                            )}
                            {!showVolume && (
                                <FontAwesomeIcon
                                    icon={faVolumeXmark}
                                    className={cx('mute-icon')}
                                    onClick={handlPlayVolume}
                                />
                            )}
                        </div>
                    </div>

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
