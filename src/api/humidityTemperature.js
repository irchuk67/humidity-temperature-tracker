const getRoomsList = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => resolve(['r1', 'r2', 'livingroom']), 300);
        });
}

export {getRoomsList};