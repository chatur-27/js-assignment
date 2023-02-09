let arr1 = [];
let arr2 = [];

function enqueue(ele) {
    arr1.push(ele);
    console.log(arr1);
}

function dequeue() {
    if (arr1.length === 0) {
        console.log("queue is empty");
    }
    while (arr1.length > 0) {
        let x = arr1.pop();
        arr2.push(x);
    }
    console.log(stack2.pop());
}