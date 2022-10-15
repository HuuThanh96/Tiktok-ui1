import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from '../Search/Search.module.scss';

import { Wrapper as PopperWrapper } from '`/Components/Popper';
import useDebounce from '`/hooks/useDebounce';
import AccountItem from '`/Components/AccoutItem';
import * as searchService from '`/services/serchService';

const cx = classNames.bind(styles);

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [showIcon, setShowIcon] = useState(false);
    const [showLoad, setShowload] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const debounced = useDebounce(inputValue, 500);

    const inputElement = useRef();
    const handleInput = (e) => setInputValue(e.target.value);
    const handleClear = () => {
        setInputValue('');
        inputElement.current.focus();
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setShowload(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setShowload(false);
        };

        fetchApi();

        // axios
        //     .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res);
        //         setSearchResult(res.data.data);
        //         setShowload(false);
        //     });
    }, [debounced]);

    return (
        <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search accounts and videos"
                    ref={inputElement}
                    spellCheck={false}
                    value={inputValue}
                    onChange={handleInput}
                />
                {inputValue && !showLoad && !showIcon && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {showLoad && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
