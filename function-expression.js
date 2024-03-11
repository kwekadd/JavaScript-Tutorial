// setTimeout(function(){
//     console.log('I waited 2 seconds');},2000);

let counter = 0;
function timeout(){
    setTimeout(function(){
        console.log('hello '+ counter++);
        timeout()
    },100);
}
timeout();
// ctrl + c

