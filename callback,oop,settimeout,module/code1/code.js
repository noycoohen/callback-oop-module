// const start = () => console.log('start');
// const start1 = () => {
//     console.log('start');
// }
/*function foo() {
    console.log('start');
}
function bar() {
    console.log('end');
}
function fn(start, end) {
    start();
    end();
}

fn(foo, bar);*/

/*function myOnClick() {
    alert('Clicked');
}
document.querySelector('#myButton')
    .addEventListener('click', myOnClick);*/

function callGoogleUsers(id, successCallback, failureCallback) {
    let msg;
    if (Math.random() > 0.5) {
        // הצלחה
        msg = successCallback(id);
    } else {
        // כשלון
        msg = failureCallback(id);
    }
    console.log(msg);
}
function onSuccess(id) {
    return `The user information for ${id} has been retrieved`;
}
function onFailure(id) {
    return `Failure to retrieve user information for ${id}`;
}

callGoogleUsers(57, onSuccess, onFailure);
callGoogleUsers(undefined, onSuccess, onFailure);