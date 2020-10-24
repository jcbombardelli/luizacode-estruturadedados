const stack = []
let memory = 0
let cursor = -1


function main (sizeMemory) {

    if(isNaN(parseInt(sizeMemory) )){
        console.error("Error: Size Memory is not a Number")
        return
    }
    memory = sizeMemory
    log(`Starting with ${memory} memory\n========================`)



}


function push (value) {
    if(cursor+1 === memory){
        log('Stack is full... return')
        return
    }

    stack[++cursor] = value
}


function pop () {
    if(cursor < 0) {
        log('Stack is empty... return')
        return
    }

    const unstacked = stack[cursor]
    stack[cursor--] = undefined
    return unstacked

}


function top () {
    if(cursor >= 0){
        const value = stack[cursor]
        log(`The value of the top is ${value}`)
    }
    else
        console.warn("This stack is empty...")

}

function size () {
    const memoryOccucpied = cursor+1
    const percentMemoryOccupied = (memoryOccucpied*(100/memory))
    log(`The size of memory occupied is ${memoryOccucpied} of ${memory} (${percentMemoryOccupied}%)`)
}



//Utils

function log(message){
    console.info(message)
}


main(40);