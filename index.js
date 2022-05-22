function myEach(collection, callback) {
    return processCollection(collection, myEachProcess, callback);
}

function processCollection(collection, processCallback, callback) {
    let convertedArray = getConvertedArray(collection);
    return processCallback(convertedArray, collection, callback);
}

function getConvertedArray(collection) {
    let convertedArray = [];
    if(Array.isArray(collection)) {
        convertedArray = collection;
    }
    else if(typeof collection === 'object') {
        convertedArray = Object.values(collection);
    }
    else {
        throw 'Collection is not an array or object.';
    }
    return convertedArray;
}

function myEachProcess(collection, originalCollection, callback) {
    collection.forEach(element => callback(element));
    return originalCollection;
}

function myMap(collection, callback) {
    return processCollection(collection, myMapProcess, callback);
}

function myMapProcess(collection, originalCollection, callback) {
    return collection.map(element => callback(element));
}

function myReduce(collection, callback, startValue) {
    let convertedArray = getConvertedArray(collection);
    let reducedValue;
    if (startValue === undefined) {
        reducedValue = convertedArray.reduce(callback);
    }
    else {
        reducedValue = convertedArray.reduce(callback, startValue);
    }
    return reducedValue;
}

function myFind(collection, predicate) {
    return processCollection(collection, myFindProcess, predicate);
}

function myFindProcess(collection, originalCollection, callback) {
    return collection.find(callback);
}

function myFilter(collection, predicate) {
    return processCollection(collection, myFilterProcess, predicate);
}

function myFilterProcess(collection, originalCollection, callback) {
    return collection.filter(callback);
}

function mySize(collection) {
    return processCollection(collection, mySizeProcess);
}

function mySizeProcess(collection, originalCollection, callback) {
    return collection.length;
}

function myFirst(array, numberOfElements) {
    let element;
    if (numberOfElements === undefined) {
        element = array[0];
    }
    else {
        element = array.slice(0, numberOfElements);
    }
    return element;
}

function myLast(array, numberOfElements) {
    let element;
    if (numberOfElements === undefined) {
        element = array[array.length - 1];
    }
    else {
        element = array.slice(-numberOfElements);
    }
    return element;
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}