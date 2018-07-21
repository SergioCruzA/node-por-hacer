
const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
    },
}

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada la tarea',
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado a completado de una tarea', optsActualizar)
    .command('borrar', 'Borrar una tarea especifica', opts)
    .help()
    .argv;

module.exports = {
    argv,
}