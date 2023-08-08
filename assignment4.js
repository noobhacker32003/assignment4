function cubeNumber(number) {
    if (typeof(number) !== "number"){
        return "It isn't a number this function can't work"

    }
    else{
        const cube = Math.pow(number,3);
        return cube
    }
}


function matchFinder(string1, string2) {
    if (typeof(string1) !== "string" || typeof(string2) !== "string") {
        return "both input aren't a string this function can't work"
        
    }
    else{
        const answer = string1.includes(string2);
        return answer
    }

}


function sortMaker(arr) {
    const array = arr;
    
    if (array[0] < 0 || array[1] < 0) {
        return "Invalid Input"
        
    }
    else if (array[0] === array[1] ) {
        return "equal"
    }
    else{
        if (array[0] < array[1]) {
            const temp = array[0];
            array.splice(0,1);
            array.push(temp);
            return array
        }
        else{
            return array
        }
    }
}


function findAddress(obj) {
    let answer = "";
    const key = Object.keys(obj);
    if (key.includes("street") == true) {
        answer = obj.street + ",";
    }
    else if(key.includes("street") == false){
        answer = "__" + "," ;

    }
    if (key.includes("house") == true) {
        answer = answer + obj.house + ",";
    }
    else if(key.includes("house") == false){
        answer =answer+ "__" + "," ;

    }
    if (key.includes("society") == true) {
        answer =answer + obj.society;
    }
    else if(key.includes("society") == false){
        answer =answer + "__";

    }
    return answer
}




function canPay(changeArray, totalDue) {
    let sum = 0;
    if (changeArray.length ==0) {
        return "It is an empty list, so this function will not work"
        
    }
    for (let i = 0; i < changeArray.length; i++) {
     sum += changeArray[i] ;
        
    }
    return sum>totalDue
}
