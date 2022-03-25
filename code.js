
let input = prompt();

while ( input !== "stop") {

    if(input === "true") {

        array.push(Boolean(1))

    } else if (input === "false") {

        array.push(Boolean(0))

    } else if (isNaN(input) == false) {

        array.push(Number(input))

    }

    input = prompt();

}

console.log(array);

sumArr(array)



