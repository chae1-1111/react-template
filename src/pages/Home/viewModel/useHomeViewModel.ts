import {useEffect, useState} from "react";
import {fetchInitialCount} from "../model/homeAPI.ts";

export const useHomeViewModel = () => {
    const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadInitialCount = async () => {
            const initialCount = await fetchInitialCount();
            setCount(initialCount ?? 0);
            setLoading(false);
        }
        loadInitialCount();
    }, []);

    const increaseCount = () => {
        setCount(prev => prev + 1);
    }

    const onIncrement = () => {
        increaseCount();
    };

    return {
        count,
        loading,
        onIncrement,
    };
};
