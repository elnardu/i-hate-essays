
module.exports = function(socket) {
    console.log('New connection');

    socket.emit('update_predictions', [
        'lol', 'kek'
    ])

    socket.on('text_change', (change) => {
        console.log(change)
        socket.emit('update_predictions', [
            change.text,
            change.text,
            change.text
        ])
    })
} 