const lookNorth = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    id = Number(id);
    while ( id - gridSize >= 0 ) {
        id -= gridSize;
        let nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    if (nextColor === currentColor) {
        console.log("NORTH matches");
        return Number(id);
    }else {
        return null;
    }
}

const lookSouth = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    id = Number(id);
    while ( id + gridSize < gridSize**2 ) {
        id += gridSize;
        // console.log("south id:", id);
        let nextElement = document.getElementById(id);
        // console.log("south nextelement:", nextElement);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    if (nextColor === currentColor) {
        console.log("SOUTH matches");
        return Number(id);
    }else {
        return null;
    }
}

const lookEast = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    id = Number(id);
    while ( (id % gridSize) < (gridSize - 1) ) {
        id += 1;
        // console.log("east id:", id);
        let nextElement = document.getElementById(id);
        // console.log("east nextelement:", nextElement);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    if (nextColor === currentColor) {
        console.log("EAST matches");
        return Number(id);
    }else {
        return null;
    }
}

const lookWest = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    id = Number(id);
    //
    while ( (id % gridSize) > 0 ) {
        id -= 1;
        // console.log("west id:", id);
        let nextElement = document.getElementById(id);
        // console.log("west nextelement:", nextElement);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    if (nextColor === currentColor) {
        console.log("WEST matches");
        return Number(id);
    }else {
        return null;
    }
}




export {lookNorth, lookSouth, lookEast, lookWest};
