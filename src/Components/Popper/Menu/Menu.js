import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '`/Components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    function handleMenuItem() {
        return current.data.map((item, index) => {
            const isParent = !!item.subMenu;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.subMenu]);
                        }
                    }}
                />
            );
        });
    }

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Tippy
            placement="bottom-end"
            interactive
            delay={[200, 300]}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header tittle={current.tittle} onBack={handleBack} />}
                        {handleMenuItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
