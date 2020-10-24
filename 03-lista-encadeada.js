
const list = []
let maxSize = 0
let cursor = 0
let head = null
let tail = null



function main (sizeQueue) {
    
    if(isNaN(parseInt(sizeQueue) )){
        console.error("Error: Size Queue is not a Number")
        return
    }
    maxSize = sizeQueue
    log(`Starting with ${maxSize} positions reserved\n========================`)

    for (let index = 0; index < 5; index++) {
        insert(index*4)
        
    }



}

function insert(value) {

    const node = {
        data: value,
        next: head
    }

    if(head === null) 
        tail = node

    head = node
    cursor++

}


function remove () {

    
    if(cursor === 0) {
        log('Queue is empty... return')
        return
    }
    else {
        let current = head
        let previous = undefined
    

        while(current.next){
            previous = current
            current = current.next
        }

        if(cursor > 1) {
            previous.next = undefined
            tail = previous
        }
        else{
            head = undefined
            tail = undefined
        }
        cursor--
    }
}

function listAll() {
    if(head === null) {
        log('Head is empty... return')
        return
    }

    
    const arr = []
    let current = head

    for (let index = 0; index < cursor; index++) {
        arr[index] = current.data
        current = current.next
    }

    return arr
}


function peek(position){

    if(isNaN(parseInt(position) )){
        console.error("Error: 'index' parameter is not a Number")
        return
    }

    if(position > -1 && position < cursor){
        let current = head
        for (let index = 0; index < position; index++) {
           current = current.next
        }
        return current.data
    }
    return null
}


//Utils
function log(message){
    console.info(message)
}

main(10)