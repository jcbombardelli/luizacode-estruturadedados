
let cursor = 0
let first = null
let last = null



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
    log(listAll())

    remove()

    log(listAll())

    insert("Palmeiras")
    
    log(listAll())


}

function insert(value, index) {

    if(isNaN(parseInt(index) )){
        console.error("Error: 'index' parameter is not a Number")
        return
    }

    if (index === 0){
        const node = {
            data : value,
            next: first
        }

        first = node
        cursor++;
        return 
    }

    if (index > -1 && index < cursor){
        
        const node = {
            data: data,
            next: null
        }

        let previous = null
        let current = first
        
        
        let aux = 0
        while(aux++ < index){
            previous = current
            current = current.next
        }

        previous.next = node;
        node.prox = current;

        cursor++

    }
    else{
        console.warn('Invalid Index ....')
    }
}


function remove (index) {

    if(isNaN(parseInt(index) )){
        console.error("Error: 'index' parameter is not a Number")
        return
    }

    if(index === 0) {
        
        if(first !== null){
            const exit = first
            first = first.next

            if(cursor > 0) cursor--
            return exit.data
        }

        return null
    }

    if (index > -1 && index < cursor) {

        const current = first
        const previous = null;
        const aux = 0
        while(aux++ < index){
            previous = current
            current = current.next
        }

        previous.next = current.next
        cursor--
        return current.data
    }

    else{
        console.warn('Invalid Index ....')
    }   
}

//TODO: Desafio: Implementar Listage de TODOS
//TODO: Desafio: Immentar 'data' a partir de um indice existente



//Utils
function log(message){
    console.info(message)
}

main(10)