import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, primary = false, text = false, leftIcon, onClick, to, href, className, ...passProps }) {
    let Cop = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Cop = Link;
    } else if (href) {
        props.href = href;
        Cop = 'a';
    }

    const classes = cx('wrapper', { [className]: className, primary, text });
    return (
        <Cop className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('tittle')}>{children}</span>
        </Cop>
    );
}

export default Button;
