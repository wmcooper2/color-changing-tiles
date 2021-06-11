const lookNorth = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    while ( id - gridSize >= 0 ) {
        id -= gridSize;
        let nextElement = document.getElementById(id);
        let nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            console.log("break");
            break;
        }
    }
    // console.log("final id", id)

    //need to keep track of the last square's color
    console.log(nextColor)
    // return id;
}

export {lookNorth};