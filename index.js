function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(name) {
    return name = function(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}