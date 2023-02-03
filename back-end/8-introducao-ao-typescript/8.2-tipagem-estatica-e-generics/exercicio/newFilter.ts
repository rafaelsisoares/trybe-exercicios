function newFilter<T>(arr: Array<T>, callback: (item: T, index?: number, array?: Array<T>) => boolean): T[] {
    const newArray: Array<T> = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (callback(arr[i])) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

export default newFilter;