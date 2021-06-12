const belowNorthEdge = (id, gridSize) => {
    return id - gridSize >= 0;
}

const aboveSouthEdge = (id, gridSize) => {
    return (id + gridSize) < (gridSize**2);
}

const leftOfEastEdge = (id, gridSize) => {
    return (id % gridSize) < (gridSize - 1)
}

const rightOfWestEdge = (id, gridSize) => {
    return (id % gridSize) > 0 
}

const lookNorth = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
    while (belowNorthEdge(id, gridSize)) {
        id -= gridSize;
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeNorth = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos -= gridSize;
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}


const lookSouth = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
    while (aboveSouthEdge(id, gridSize)) {
        id += gridSize;
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeSouth = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos += gridSize;
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}

const lookEast = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
        while (leftOfEastEdge(id, gridSize)){
        id += 1;
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeEast = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos += 1;
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}




const lookWest = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
    while (rightOfWestEdge(id, gridSize)){
        id -= 1;
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeWest = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos -= 1;
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}

const lookNorthEast = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
    while (belowNorthEdge(id, gridSize) && leftOfEastEdge(id, gridSize)) {
        id -= gridSize; //north
        id += 1; //east
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeNorthEast = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos -= gridSize; //north
        curPos += 1; //east
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}

const lookSouthEast = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
    while (aboveSouthEdge(id, gridSize) && leftOfEastEdge(id, gridSize)) {
        id += gridSize;//south
        id += 1; //east
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeSouthEast = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos += gridSize;//south
        curPos += 1; //east
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}

const lookSouthWest = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
    while (aboveSouthEdge(id, gridSize) && rightOfWestEdge(id, gridSize)) {
        id += gridSize;//south
        id -= 1; //west
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeSouthWest = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos += gridSize;//south
        curPos -= 1; //west
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}


const lookNorthWest = (id, gridSize) => {
    const square = document.getElementById(id);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    id = Number(id);
    while (belowNorthEdge(id, gridSize) && rightOfWestEdge(id, gridSize)) {
        id -= gridSize;//north
        id -= 1; //west
        nextElement = document.getElementById(id);
        nextColor = nextElement.classList[1];
        if ( nextColor === currentColor ) {
            break;
        }
    }
    return nextColor === currentColor ? id : null;
}

const changeNorthWest = (curPos, end, gridSize) => {
    const square = document.getElementById(curPos);
    const currentColor = square.classList[1]
    let nextColor;
    let nextElement;
    curPos = Number(curPos);
    while (curPos !== end) {
        curPos -= gridSize;//north
        curPos -= 1; //west
        nextElement = document.getElementById(curPos);
        nextColor = nextElement.classList[1];
        nextElement.classList.remove(nextColor)
        nextElement.classList.add(currentColor)
    }
}





export {
    lookNorth,
    lookSouth,
    lookEast,
    lookWest,
    lookNorthEast,
    lookSouthEast,
    lookSouthWest,
    lookNorthWest,
    changeNorth,
    changeSouth,
    changeEast,
    changeWest,
    changeNorthEast,
    changeSouthEast,
    changeSouthWest,
    changeNorthWest};
