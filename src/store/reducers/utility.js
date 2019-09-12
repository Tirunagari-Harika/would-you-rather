// converts object {i:{},j:{}} into an array [{},{}]
export const getArray = (data) => {
    let Arr = [];
    for(let i in data){
        Arr.push(data[i]);
    }
    return Arr;
}

// finds out '1' in [1,2,3]
export const checkSingleEleInArr = (arr,ele) => {
    if(arr.length){       
        if(arr.indexOf(ele) !== -1){
            return true;
        }
    }
    return false;    
}
