export const datePipe = (date, period) => {
    switch (period) {
        case 'day':
            return date.toLocaleTimeString();
        case 'hour':
            return `${date.getHours()}:${date.getMinutes()}`;
        default:
            return date.toLocaleDateString();
    }
}