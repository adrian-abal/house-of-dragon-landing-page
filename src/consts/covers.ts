import type { Thumbnail } from "../types/Thumbnail"

interface Cover {
    name: string
    url_page: string
    thumbnail: Thumbnail
}

const RESOURCE_BASE_URL = 'entertaiment_covers/'


export const COVERS: Cover[] = [{
    name: 'The Last of Us',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GYyofRQHeuJ6fiQEAAAEy
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'the_last_of_us.avif',
        alternative_text: 'The Last of Us'
    }

},
{
    name: 'The White Lotus',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GYLD3_ArixL1sggEAAAHk
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'the_white_lotus.avif',
        alternative_text: 'The White Lotus'
    }

},

{
    name: 'Animales fantásticos: Los Secrtetos de Dumbledore',
    url_page: '#', // https://www.hbomax.com/es/es/feature/urn:hbo:feature:GYij31wBohZA3MQEAAAKa
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'animales_fantasticos_los_secretos_de_dumbledore.avif',
        alternative_text: 'Animales fantásticos: Los Secrtetos de Dumbledore'
    }

},
{
    name: 'The Batman',
    url_page: '#', // https://www.hbomax.com/es/es/feature/urn:hbo:feature:GYiDbSAmIpMNvYAEAAAAI
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'the_batman.avif',
        alternative_text: 'The Batman'
    }

},

{
    name: 'The Staircase',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GYk93MwWuH4BJoAEAAABu
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'the_staircase.avif',
        alternative_text: 'The Staircase'
    }

},
{
    name: 'Dune',
    url_page: '#', // https://www.hbomax.com/es/es/feature/urn:hbo:feature:GYUjdLgBiJp5otAEAAAAJ
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'dune.avif',
        alternative_text: 'Dune'
    }

}, {
    name: 'The Flight Attendant',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GX5MHsQzwwIuLwgEAAACp
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'the_flight_attendant.avif',
        alternative_text: 'The Flight Attendant'
    }

},
{
    name: 'The Matrix Resurrections',
    url_page: '#', // https://www.hbomax.com/es/es/feature/urn:hbo:feature:GYbD1_wnm3mDCwgEAAAPM
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'the_matrix_resurrections.avif',
        alternative_text: 'The Matrix Resurrections'
    }

},
{
    name: 'Chernobyl',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GXJvkMAU0JIG6gAEAAAIo
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'chernobyl.avif',
        alternative_text: 'Chernobyl'
    }

},

{
    name: 'El Pacificador',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GYb0FKQLsGIyPfQEAAAAM
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'el_pacificador.avif',
        alternative_text: 'El Pacificador'
    }

},
{
    name: 'La Materia Oscura',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GXYUhuQ6aq6nCVgEAAAlR
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'la_materia_oscura.avif',
        alternative_text: 'La Materia Oscura'
    }

},
{
    name: 'Euphoria',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GXKN_xQX5csPDwwEAAABj
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'euphoria.avif',
        alternative_text: 'Euphoria'
    }

}, {
    name: 'True Blood',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GVU2cMgPp_VFvjSoJATyY
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'true_blood.avif',
        alternative_text: 'True Blood'
    }

}, {
    name: 'Roma',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GVU2wKADG81FvjSoJAVPU
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'roma.avif',
        alternative_text: 'Roma'
    }

}, {
    name: 'Harry Potter: Regreso a Hogwarts',
    url_page: '#', // https://www.hbomax.com/es/es/feature/urn:hbo:feature:GYbzrRAvf-ZPCKQEAAAAX
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'harry_potter_regreso_a_hogwarts.avif',
        alternative_text: 'Harry Potter: Regreso a Hogwarts'
    }

},
{
    name: 'Crónicas Vampiricas',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GYGT8zAx-rsLDcwEAAAAs
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'cronicas_vampiricas.avif',
        alternative_text: 'Crónicas Vampiricas'
    }

}, {
    name: 'True detective: Noche Polar',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GVU2xlQZIxY7DwvwIAVgK
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'true_detective_noche_polar.avif',
        alternative_text: 'True detective: Noche Polar'
    }

}, {
    name: 'The Wire',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GVU2gkAgT4oNJjhsJAUDk
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'the_wire.avif',
        alternative_text: 'The Wire'
    }

}, {
    name: 'Rick y Morty',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'rick_y_morty.avif',
        alternative_text: 'Rick y Morty'
    }

}, {
    name: 'Legacies',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GX9j4sw88eFy8eAEAAACn
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'legacies.avif',
        alternative_text: 'Legacies'
    }

}, {
    name: 'El Señor de los Anillos: La Comunidad del AnilloMare of Easttown',
    url_page: '#', // https://www.hbomax.com/es/es/feature/urn:hbo:feature:GXdu2ZAglVJuAuwEAADbA
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'el_señor_de_los_anillos_la_comunidad_del_anillo.avif',
        alternative_text: 'El Señor de los Anillos: La Comunidad del AnilloMare of Easttown'
    }

}, {
    name: 'Mare of Easttown',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GYCiC1Q8picLCfAEAAAAC
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'mare_of_easttown.avif',
        alternative_text: 'Mare of Easttown'
    }

}, {
    name: 'Tokio Vice',
    url_page: '#', // https://www.hbomax.com/es/es/series/urn:hbo:series:GYilRbQBlfrurwgEAAAH0
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'tokio_vice.avif',
        alternative_text: 'Tokio Vice'
    }

}, {
    name: 'Elvis',
    url_page: '#', // https://www.hbomax.com/es/es/feature/urn:hbo:feature:GYuwmqAnwQZa8kAEAAAE-
    thumbnail: {
        url_resource: RESOURCE_BASE_URL + 'elvis.avif',
        alternative_text: 'Elvis'
    }
}

] as const

