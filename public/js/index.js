var socket = io();

socket.on('connect', function () {
    console.log('Connect to server')

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'dsfsfasfasf'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('New message', message)
})