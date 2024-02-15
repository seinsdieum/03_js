(function () {
    let oldLog = console.log;
    let logger = document.getElementById('log');
    console.log = function (message) {
        oldLog(message)
        let isHeader = message[0] === '#' && message[1] === 'h' && message[2] === '#'
        if(isHeader) message = message.slice(3)

        let logObject = isHeader ? document.createElement('h2') : logger
        if (typeof message == 'object') {
            logObject.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logObject.innerHTML += message + '<br />';
        }

        if(isHeader) logger.appendChild(logObject)
    }
})();