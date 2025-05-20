import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/common/store";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
