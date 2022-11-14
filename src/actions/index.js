export const increment = (nr=5) => {
    return{
        type: 'INCREMENT',
        payload: nr
    };
};
export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}