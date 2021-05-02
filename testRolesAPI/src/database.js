import mongoose from 'mongoose'; // Se importa el módulo "mogoose"

// Se llama al método de conexión ".connect" para la conexión con la base de datos.
mongoose.connect('mongodb://localhost/testRolesDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB está conectada.'))
    .catch(e => console.log(e));