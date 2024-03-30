import type { Thumbnail } from "../types/Thumbnail"

interface Episode {
    season: number
    episode_number: number
    title: string
    synopsis: string
    thumbnail: Thumbnail
}

export const EPISODES: Episode[][] = [
    [
        {
            season: 1,
            episode_number: 1,
            title: 'Los herederos del Dragón',
            synopsis: 'Viserys prepara un torneo para celebrar el nacimiento de su segundo hijo. Rhaenyra le da la bienvenida a su tío Daemon cuando vuelve a la Fortaleza Roja.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_1.avif',
                alternative_text: 'Rey Viserys'
            }
        },
        {
            season: 1,
            episode_number: 2,
            title: 'El Príncipe Canalla',
            synopsis: 'Rhaenyra se excede en el Consejo Privado. Viserys debe afianzar la sucesión mediante el matrimonio. Daemon anuncia sus intenciones.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_2.avif',
                alternative_text: 'Corlys Velaryon, la Serpiente Marina'
            }
        },
        {
            season: 1,
            episode_number: 3,
            title: 'El segundo de su nombre',
            synopsis: 'Daemon y la Serpiente Marina se enfrentan al Benefactor de los Cangrejos. El reino celebra la segunda onomástica de Aegon. Rhaenyra afronta la posibilidad de casarse.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_3.avif',
                alternative_text: 'Daemon y la Serpiente Marina'
            }
        },
        {
            season: 1,
            episode_number: 4,
            title: 'El rey del mar Angosto',
            synopsis: 'Rhaenyra vuelve pronto de su viaje por Poniente. Daemon lleva a la princesa a visitar la calle de la Seda al anochecer.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_4.avif',
                alternative_text: 'Rhaenyra Targaryen'
            }
        },
        {
            season: 1,
            episode_number: 5,
            title: 'Iluminamos el camino',
            synopsis: 'Daemon visita a su esposa. Viserys y Rhaenyra negocian acuerdos con los Velaryons. Alicent investiga la verdad sobre la princesa.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_5.avif',
                alternative_text: 'Otto Hightower y Alicent Hightower'
            }
        },
        {
            season: 1,
            episode_number: 6,
            title: 'La princesa y la reina',
            synopsis: 'Han pasado diez años. Rhaenyra se enfrenta a las continuas especulaciones de Alicent sobre sus hijos, mientras Daemon y Laena sopesan una oferta en Pentos.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_6.avif',
                alternative_text: 'La reina Alicent Hightower'
            }
        },
        {
            season: 1,
            episode_number: 7,
            title: 'Marcaderiva',
            synopsis: 'Cuando las familias se reúnen en Marcaderiva para un funeral, Viserys pide que las luchas internas se acaben y Alicient exige justicia.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_7.avif',
                alternative_text: 'Ser Criston Cole'
            }
        },
        {
            season: 1,
            episode_number: 8,
            title: 'El señor de las mareas',
            synopsis: 'Seis años después. Cuando la sucesión de Marcaderiva se vuelve crítica, Rhaenyra intenta ponerse de acuerdo con Rhaenys.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_8.avif',
                alternative_text: 'Rhaenys Targaryen'
            }
        },
        {
            season: 1,
            episode_number: 9,
            title: 'El consejo verde',
            synopsis: 'Alicent les pide a Aemond y a Cole que localicen a Aegon. Otto reúne a las grandes casas de Poniente para confirmar su lealtad.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_9.avif',
                alternative_text: 'Mysaria, el Gusano Blanco'
            }
        },
        {
            season: 1,
            episode_number: 10,
            title: 'La reina negra',
            synopsis: 'Mientras llora una trágica muerte, Rhaenyra intenta que el reino se mantenga unido y Daemon se prepara para la guerra.',
            thumbnail:
            {
                url_resource: 's1_thumbnails/s1_episode_10.avif',
                alternative_text: 'La reina Rhaenyra Targaryen'
            }
        },

    ]
] as const