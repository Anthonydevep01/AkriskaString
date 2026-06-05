export type PortfolioItem = {
  id: string
  title: string
  description: string
  videoUrl?: string
  youtubeUrl?: string
  posterPath: string
  tags: string[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'perfect',
    title: 'Perfect',
    description:
      'Perfect es una balada pop romántica multiplatino escrita e interpretada por el cantautor inglés Ed Sheeran. Lanzada el 3 de marzo de 2017, fue el cuarto sencillo de su aclamado tercer álbum de estudio, ÷ (Divide). La canción se convirtió en un fenómeno mundial, alcanzando los primeros puestos de las listas de éxitos en todo el mundo y consolidándose como una canción esencial para bodas y noviazgos modernos.',
    youtubeUrl: 'https://www.youtube.com/watch?v=kGWkm0i1uQw',
    posterPath: 'https://i.ytimg.com/vi/kGWkm0i1uQw/hqdefault.jpg',
    tags: ['Bodas', 'Pop', 'Romántica'],
  },
  {
    id: 'senorita',
    title: 'Señorita',
    description:
      '"Señorita" es un gran éxito mundial que alcanzó la cima de las listas de popularidad, lanzado el 21 de junio de 2019 como un dueto colaborativo entre la estrella del pop canadiense Shawn Mendes y la cantautora cubanoamericana Camila Cabello. La sensual canción de pop latino se volvió viral por su apasionado video musical y el romance real que surgió entre los dos artistas.',
    youtubeUrl: 'https://www.youtube.com/watch?v=hfuSAotT4qk',
    posterPath: 'https://i.ytimg.com/vi/hfuSAotT4qk/hqdefault.jpg',
    tags: ['Pop latino', 'Eventos', 'Moderno'],
  },
  {
    id: 'soy-tico',
    title: 'Soy Tico',
    description:
      '"Soy Tico" es una de las canciones más icónicas y representativas de Costa Rica, considerada por muchos como un segundo himno nacional debido a su profunda descripción de la identidad, los paisajes y los valores del pueblo costarricense. Fue compuesta e interpretada originalmente por el cantautor nacional Carlos Guzmán Bermúdez, director del reconocido Grupo Gaviota.',
    youtubeUrl: 'https://www.youtube.com/shorts/FsJrgMih7G0',
    posterPath: 'https://i.ytimg.com/vi/FsJrgMih7G0/hqdefault.jpg',
    tags: ['Costa Rica', 'Tradicional', 'Cultura'],
  },
  {
    id: 'perfume-de-gardenias',
    title: 'Perfume de Gardenias',
    description:
      '"Perfume de Gardenias" es un icónico bolero clásico compuesto originalmente por el puertorriqueño Rafael Hernández Marín ("El Jibarito"), el cual se convirtió en uno de los temas más emblemáticos de la música latina, especialmente inmortalizado en México por la legendaria agrupación La Sonora Santanera.',
    youtubeUrl: 'https://www.youtube.com/watch?v=0YXzms_jSxQ',
    posterPath: 'https://i.ytimg.com/vi/0YXzms_jSxQ/hqdefault.jpg',
    tags: ['Bolero', 'Clásicos', 'Elegante'],
  },
  {
    id: 'por-una-cabeza',
    title: 'Por una Cabeza',
    description:
      'Por una cabeza es uno de los tangos más famosos de la historia, compuesto en 1935 por el legendario cantante Carlos Gardel (quien creó la música) y el escritor Alfredo Le Pera (quien escribió la letra). La obra fue grabada originalmente en la ciudad de Nueva York para formar parte de la banda sonora de la película cinematográfica Tango Bar.',
    youtubeUrl: 'https://www.youtube.com/shorts/hV_HLXqozCQ',
    posterPath: 'https://i.ytimg.com/vi/hV_HLXqozCQ/hqdefault.jpg',
    tags: ['Tango', 'Clásicos', 'Instrumental'],
  },
  {
    id: 'con-te-partiro',
    title: 'Con te partirò',
    description:
      '"Con te partirò" (en español: "Contigo me iré") es una icónica canción de crossover clásico italiana interpretada por el aclamado tenor lírico Andrea Bocelli. Presentada originalmente en el Festival de Sanremo de 1995, se convirtió en uno de los mayores éxitos de la música comercial en todo el mundo.',
    youtubeUrl: 'https://www.youtube.com/watch?v=fpUDGGUsu8I',
    posterPath: 'https://i.ytimg.com/vi/fpUDGGUsu8I/hqdefault.jpg',
    tags: ['Crossover clásico', 'Romántica', 'Bodas'],
  },
  {
    id: 'danubio-azul',
    title: 'El Danubio Azul',
    description:
      'El Danubio azul (título original en alemán: An der schönen blauen Donau) es el vals más famoso del mundo, compuesto por el músico austriaco Johann Strauss II en 1866. Originalmente concebida como una pieza para coro masculino con letra de Josef Weyl, su versión puramente instrumental se convirtió en un éxito global masivo y hoy es considerada el himno oficial de Viena.',
    youtubeUrl: 'https://www.youtube.com/watch?v=XPNv2wSSdTo',
    posterPath: 'https://i.ytimg.com/vi/XPNv2wSSdTo/hqdefault.jpg',
    tags: ['Vals', 'Clásico', 'Vienna'],
  },
  {
    id: 'waltz-no-2',
    title: 'Waltz No. 2',
    description:
      'El Waltz No. 2 (o Vals No. 2) es una de las obras de música clásica más célebres del siglo XX, compuesta por el músico soviético Dmitri Shostakovich. Es una pieza estrictamente instrumental (orquestal) que destaca por su melodía melancólica, pegadiza y de aire circense. Aunque originalmente no tiene letra para ser cantada, su inmensa popularidad ha hecho que muchas personas la busquen erróneamente como una "canción".',
    youtubeUrl: 'https://www.youtube.com/watch?v=aAJaN9WnJoU',
    posterPath: 'https://i.ytimg.com/vi/aAJaN9WnJoU/hqdefault.jpg',
    tags: ['Vals', 'Clásico', 'Instrumental'],
  },
]

