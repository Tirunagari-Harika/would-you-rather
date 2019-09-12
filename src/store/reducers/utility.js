export const Arr = (data) => {
    let Arr = [];
    for(let i in data){
        Arr.push(data[i]);
    }
    return Arr;
}
