import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, SetDebouncedValue] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => SetDebouncedValue(value), delay);
        return () => clearTimeout(handle);
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
