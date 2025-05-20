import { useSelector } from "react-redux";
import type { RootReducerState } from "@/common/store";

const useAppSelector = useSelector.withTypes<RootReducerState>();

export default useAppSelector;
