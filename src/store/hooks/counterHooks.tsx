import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// import { useDispatch } from 'react-redux';
// import type { AppDispatch } from '@/store/store';
// import type { RootState } from '@/store/store';
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// // Use throughout your app instead of plain `useDispatch`
// import { useSelector, TypedUseSelectorHook } from 'react-redux';
// // Use throughout your app instead of plain `useSelector`
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
