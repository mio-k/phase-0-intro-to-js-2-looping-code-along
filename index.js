// Code your solutions in this file
function writeCards(name, event){
    const messages = [];
for ( let i=0; i < name.length; i++ ){
    messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
}
return messages;
}
function countDown(num) {
    let countDown = num;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}