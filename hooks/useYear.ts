import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { setYear, resetYear } from "../store/reducers/year";

export const useYear = () => {
    return useSelector((state: RootState) => state.year.year);
};

export const useSetYear = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (year: number) => dispatch(setYear(year));
};

export const useResetYear = () => {
    const dispatch = useDispatch<AppDispatch>();
    return () => dispatch(resetYear());
};
