
//// feña si quieres usas esto para las id mentáneamente///
function getID() {
    return Math.floor(Math.random() * 1000000).toString;
}
///////////////////////////////////////////////////////////
//////////////// DATA /////////////////////////////////////

export const categories = [
    { id: 1, label: 'Conciertos' },
    { id: 2, label: 'Festivales' },
    { id: 3, label: 'Teatro' },
    { id: 4, label: 'Cine' },
    { id: 5, label: 'Deportes' },
    { id: 6, label: 'Arte y Cultura' },
    { id: 7, label: 'Fiestas' },
    { id: 8, label: 'Comedia' },
    { id: 9, label: 'Gastronomía' },
    { id: 10, label: 'Aventura' },
    { id: 11, label: 'Juegos' },
    { id: 12, label: 'Exposiciones' },
];

export const eventTags = [
    { id: 1, name: 'Estacionamiento' },
    { id: 2, name: 'Comida y bebida' },
    { id: 3, name: 'Zona de juegos' },
    { id: 4, name: 'Baños' },
    { id: 5, name: 'Accesibilidad' },
    { id: 6, name: 'Seguridad' },
    { id: 7, name: 'Guardería' },
    { id: 8, name: 'Área de descanso' },
    { id: 9, name: 'Wi-Fi' },
    { id: 10, name: 'Merchandising' },
];

export const users = [
    {
        id: getID(),
        name: 'Arnold',
        lastname: 'Schwarzenegger',
        org: 'Bar Los Bakanes',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Arnold_Schwarzenegger_by_Gage_Skidmore_4_%28cropped%29.jpg',
        coordinator: true,
        whatsappURL: 'https://web.whatsapp.com/arnold',
        instagramURL: 'https://instagram.com/arnold',
        personalURL: 'https://www.mycompany.com/arnold',
        password: '123456',
        email: 'arnold@email.com',

    },
    {
        id: getID(),
        name: 'Sylvester',
        lastname: 'Stallone',
        org: '',
        imgURL: 'https://www.alohacriticon.com/wp-content/uploads/2019/09/sylvester-stallone-biografia-foto.jpg',
        coordinator: false,
        whatsappURL: 'https://web.whatsapp.com/sylvester',
        instagramURL: 'https://instagram.com/sylvester',
        personalURL: 'https://www.mycompany.com/sylvester',
        password: '234567',
        email: 'sylvester@email.com',

    }
]
