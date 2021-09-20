function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    } 
    return x.trim
}

class MyRespons {
    header = 'response header'
    result = 'respons result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function hendle(res: MyRespons | MyError) {
    if(res instanceof MyRespons) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

// ========-========

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //...
}

setAlertType('success')
setAlertType('warning')
// setAlertType('default')

