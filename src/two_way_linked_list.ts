class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T){
        this.data = data;
        this.next = null;
    }
}

class linkedList<T> {
    top: Node<T> | null;
    bottom: Node<T> | null;

    constructor() {
        this.top = null;
        this.bottom = null;
    }


    isEmpty(): boolean{
        return this.top === null; 
    }

    prepend(data:T): boolean {
        const addedNode = new Node(data);
        if (this.isEmpty()) {
            this.top = addedNode;
        }
        else {
            addedNode.next = this.top
            this.top=addedNode
           }

        return true;
    }

    append(data: T): boolean {
        const addedNode = new Node(data);
        if (this.isEmpty()) {
            this.top = addedNode;
        }
        else {
            let current = this.top;
            if(current){
                while(current.next){
                    current = current.next
                }
                current.next = addedNode;
            }
        }
        return true;
    }

    toArray(): T[] {
        let result: T[] = []
        let current = this.top;       
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result
    }

}


const myList = new linkedList<number>;
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.prepend(5);


console.log(myList.toArray());

