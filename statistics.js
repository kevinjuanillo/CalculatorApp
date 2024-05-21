function inputValidation(operation) {

    // get the array of input - call the function then assign to variable
    let arrayNums = getArrayOfNumbers();

    let isValid = true;

    // iterate over each item in the array
    for (let i = 0; i < arrayNums.length; i++ ) {
        if (checkInputNumberOnly(arrayNums[i])) { //check one by one if input is number only
            isValid = true;
        }
        else {
            isValid = false;
        alert("input invalid"); // set validation message
        break;
        }
    }

    if (isValid) {
        switch (operation) { // case operator for the 3 functions of the calculator
            case 1:
                getMean(1); // call getmean function pass parameter 1
                break;
            case 2:
                getVariance(1); // call getVariance function pass parameter 1
                break;
            case 3:
                getStandardDeviation(1); // call getStandardDeviation function pass parameter 1
                break;
        }
    }
}

function getStandardDeviation(x) {
    // create a variable for the standard deviation and initialize it
    let sd = 0;

    sd = Math.sqrt(getVariance(0)) //formula for sd
    
    if (x == 1) { // used to check if the call is coming from the button (parameter = 1) or if the call is needed for other functions 
        alert(sd) // display value
    }
    else 
    return sd; // return value
}

function getVariance(x) {
    // create a variable variance and initialize it
    let variance = 0;
    // create a variable for the sum and initialize it
    let sum = 0;
    // create a variable mean and initialize it
    let mean = getMean(0);

    let arrayNums = getArrayOfNumbers(0)

    // iterate over each item in the array
    for (let i = 0; i < arrayNums.length; i++ ) {
      sum = sum + ((parseInt(arrayNums[i]) - mean) ** 2); 
    }

    variance = sum/arrayNums.length //formula for variance
    if (x == 1) { // used to check if the call is coming from the button (parameter = 1) or if the call is needed for other functions
        alert(variance) // display value
    }
    else 
    return variance; // return value
}



function getMean(x) {
    // create a variable mean and initialize it
    let mean = 0;

    // create a variable for the sum and initialize it
    let sum = 0;

    // get the array of input - call the function then assign to variable
    let arrayNums = getArrayOfNumbers()

    // iterate over each item in the array
    for (let i = 0; i < arrayNums.length; i++ ) {
        if (checkInputNumberOnly(arrayNums[i])) {
            sum = sum + parseInt(arrayNums[i]); //we need to parse the items to int in the array since it's string
        }
        else {
        alert("input invalid"); 
        break;
        }
    }
    // get the summation of the array of numbers then divide it by how many numbers in the array
    mean = sum/arrayNums.length

    if (x == 1) { // used to check if the call is coming from the button (parameter = 1) or if the call is needed for other functions
        alert(mean) // display value
    }
    else 
    return mean; // return value

}

function getArrayOfNumbers() {
    var arrayOfNumbers = [];
    arrayOfNumbers = textControl.value.split(" "); // split inputs separated by a space " " and assign to arrray
    return arrayOfNumbers;
}

function checkInputNumberOnly(str) {
    
    return /^\d+$/.test(str); // use regex to check if input is number only 
}

