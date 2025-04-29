$(document).ready(function () {

    tabla_lista_precios();

});



function tabla_lista_precios() {
    new DataTable('#tabla_productos', {
        ajax: 'datos.json',
        columns: [
            { data: 'nombre' },
            { data: 'marca' },
            { data: 'precio_unidad' },
            { data: 'precio_cantidad' },
            { data: 'precio_suelto' },
        ],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/2.2.2/i18n/es-ES.json',
        },
    });
}