
const socketController=(socket) => {
    // send a message to the client
    // console.log('Cliente conectado',socket.id);

    socket.on('disconnect',()=>{
        // console.log('Cliente desconectado',socket.id);
    })

    socket.on('enviar-mensaje',(payload,callback)=>{

        const id=1212121;
        // console.log('Esto es una prueba');
        // console.log(payload);
        socket.broadcast.emit('enviar-mensaje',payload);
        callback(id);
    })
  };

module.exports={
    socketController
}