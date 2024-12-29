import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../shared/store/store.ts";
import {useEffect} from "react";
import {increment, setCount, setLoading} from "../model/homeSlice.ts";
import {fetchInitialCount} from "../model/homeAPI.ts";

export const useHomeViewModel = () => {
    const dispatch = useDispatch();
    const {count, loading} = useSelector((state: RootState) => state.home);

    useEffect(() => {
        const loadInitialCount = async () => {
            dispatch(setLoading(true));
            const initialCount = await fetchInitialCount();
            dispatch(setCount(initialCount));
            dispatch(setLoading(false));
        }
        loadInitialCount();
    }, [dispatch]);

    const onIncrement = () => {
        dispatch(increment());
    };

    return {
        count,
        loading,
        onIncrement,
    };
};
