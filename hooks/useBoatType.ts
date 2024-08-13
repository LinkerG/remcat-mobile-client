import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { setBoatType } from "../store/reducers/boatType";

export const useBoatType = () => {
    return useSelector((state: RootState) => state.boatType.boatType);
};

export const useSetBoatType = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (boatType: string) => dispatch(setBoatType(boatType));
};
