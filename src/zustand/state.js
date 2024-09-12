import { create } from 'zustand';

const store = create((set) => ({
    currency: 'usd',

    setCurrency: (newCurrency) => set((state) => {
        return {
            ...state,
            currency : newCurrency
        }
    }),

    items: [],
    setItems: (newItems) => set((state) => {
        return {
            ...state,
            items: [...state.items, ...newItems],
        };
    }),

    page : 1,
    setPage : (newPage) => set((state) => {
        return{
            ...state,
            page : newPage,
        }
    }),

    displayedValue : "",
    setDisplayedValue : (newValue) => set((state) => {
        return {
            displayedValue : newValue,
        }
    }),

}));

export default store;

