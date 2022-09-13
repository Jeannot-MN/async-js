function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    let squared = square(n);

    console.log(`${n} squared yields ${squared}`);
}

printSquare(5);