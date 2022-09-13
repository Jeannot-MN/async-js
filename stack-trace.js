function foo() {
    throw new Error("Leksypooh");
}

function bar() {
    foo();
}

function buzz() {
    bar();
}

buzz();