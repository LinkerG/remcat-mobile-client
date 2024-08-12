import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { setCategory, setDivision } from "../store/reducers/categories";

export const useCategory = () => {
    return useSelector((state: RootState) => state.category.category);
};

export const useDivision = () => {
    return useSelector((state: RootState) => state.category.division);
};

export const useSetCategory = () => {
    const dispatch: AppDispatch = useDispatch();
    return (category: string) => {
        dispatch(setCategory(category));
    };
};

export const useSetDivision = () => {
    const dispatch: AppDispatch = useDispatch();
    return (division: string) => {
        dispatch(setDivision(division));
    };
};