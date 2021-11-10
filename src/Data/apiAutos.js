import ford from '../img/autos/ford/ford.png';
import mondeo from '../img/autos/ford/mondeo/mondeo.jpg';
import bronco from '../img/autos/ford/bronco/bronco.jpg';
import ecosport from '../img/autos/ford/ecosport/ecosport.jpg';
import territory from '../img/autos/ford/territory/territory.jpg';
import fiat from '../img/autos/fiat/fiat.png';
import mobi from '../img/autos/fiat/mobi/mobi.png';
import toro from '../img/autos/fiat/toro/toro.png';
import uno from '../img/autos/fiat/uno/uno.png';
import peugeot from '../img/autos/peugeot/peugeot.png';
import p208 from '../img/autos/peugeot/208/208.png';
import p308 from '../img/autos/peugeot/308/308.png';
import p5008 from '../img/autos/peugeot/5008/5008.png';
import patagonica from '../img/autos/peugeot/patagonica/patagonica.png';
import renault from '../img/autos/renault/renault.png';
import captur from '../img/autos/renault/captur/captur.jpg';
import logan from '../img/autos/renault/logan/logan.jpg';
import sandero from '../img/autos/renault/sandero/sandero.jpg';
import steway from '../img/autos/renault/steway/steway.jpg';
import volkswagen from '../img/autos/volkswagen/volkswagen.png';
import gol from '../img/autos/volkswagen/gol/gol.png';
import polo from '../img/autos/volkswagen/polo/polo.png';
import virtus from '../img/autos/volkswagen/virtus/virtus.png';

import { imgFordMondeo, imgFordBronco, imgFordEcosport, imgFordTerritory  } from '../Data/imgAutos';


export const apiSimpleAutos= [
    {
        id: 179760,
        marca: 'Ford',
        modelo: 'Mondeo Híbrido',
        precio: '$ 11.000.000',
        img: mondeo,
        imgMarca: ford,
        descripcion: 'Ford Mondeo Híbrido 2021'
    },{
        id: 255882,
        marca: 'Ford',
        modelo: 'Bronco',
        precio: '$ 6.500.000',
        img: bronco,
        imgMarca: ford,
        descripcion: 'Ford Bronco 2021'
    },{
        id: 467051,
        marca: 'Ford',
        modelo: 'Ecosport',
        precio: '$ 3.400.000',
        img: ecosport,
        imgMarca: ford,
        descripcion: 'Ford Ecosport 2021'
    },{
        id: 894454,
        marca: 'Ford',
        modelo: 'Territory',
        precio: '$5.400.000',
        img: territory,
        imgMarca: ford,
        descripcion: 'Ford Territory 2021'
    },{
        id: 585811,
        marca: 'Fiat',
        modelo: 'Mobi',
        precio: '$ 1.300.000',
        img: mobi,
        imgMarca: fiat,
        descripcion: 'Fiat Mobi 2021'
    },{
        id: 335661,
        marca: 'Fiat',
        modelo: 'Toro',
        precio: '$ 2.800.000',
        img: toro,
        imgMarca: fiat,
        descripcion: 'Fiat Toro 2021'
    },{
        id: 173248,
        marca: 'Fiat',
        modelo: 'Uno Way',
        precio: '$ 1.200.000',
        img: uno,
        imgMarca: fiat,
        descripcion: 'Fiat Uno 2021'
    },{
        id: 892602,
        marca: 'Peugeot',
        modelo: '208',
        precio: '$ 2.700.000',
        img: p208,
        imgMarca: peugeot,
        descripcion: 'Peugeot 208 2021'
    },{
        id: 347439,
        marca: 'Peugeot',
        modelo: '308',
        precio: '$5.500.000',
        img: p308,
        imgMarca: peugeot,
        descripcion: 'Peugeot 308 2021'
    },{
        id: 158095,
        marca: 'Peugeot',
        modelo: '5008',
        precio: '$ 9.500.000',
        img: p5008,
        imgMarca: peugeot,
        descripcion: 'Peugeot 5008 2021'
    },{
        id: 11,
        marca: 'Peugeot',
        modelo: 'Partner Patagonica',
        precio: '$ 3.800.000',
        img: patagonica,
        imgMarca: peugeot,
        descripcion: 'Peugeot Partner Patagonica 2021'
    },{
        id: 704160,
        marca: 'Renault',
        modelo: 'Captur',
        precio: '$ 3.500.000',
        img: captur,
        imgMarca: renault,
        descripcion: 'Renault Captur 2021'
    },{
        id: 496303,
        marca: 'Renault',
        modelo: 'Logan',
        precio: '$ 3.800.000',
        img: logan,
        imgMarca: renault,
        descripcion: 'Renault Logan 2021'
    },{
        id: 496303,
        marca: 'Renault',
        modelo: 'Sandero',
        precio: '$ 2.700.000',
        img: sandero,
        imgMarca: renault,
        descripcion: 'Renault Sandero 2021'
    },{
        id: 247474,
        marca: 'Renault',
        modelo: 'Steway',
        precio: '$ 2.900.000',
        img: steway,
        imgMarca: renault,
        descripcion: 'Renault Steway 2021'
    },{
        id: 398579,
        marca: 'Volkswagen',
        modelo: 'Gol',
        precio: '$ 1.800.000',
        img: gol,
        imgMarca: volkswagen,
        descripcion: 'Volkswagen Gol 2021'
    },{
        id: 892280,
        marca: 'Volkswagen',
        modelo: 'Polo',
        precio: '$ 3.800.000',
        img: polo,
        imgMarca: volkswagen,
        descripcion: 'Volkswagen Polo 2021'
    },{
        id: 919775,
        marca: 'Volkswagen',
        modelo: 'Virtus',
        precio: '$ 4.600.000',
        img: virtus,
        imgMarca: volkswagen,
        descripcion: 'Volkswagen Virtus 2021'
    }
]
export const apiDetalladaAutos= [
    {
        id: 1718423,
        marca: 'Ford',
        modelo: 'Mondeo Híbrido',
        precio: ' $ 11.000.000',
        img: mondeo,
        imgMarca: ford,
        imgBanner: imgFordMondeo.banner,
        imgDescriptivas: [imgFordMondeo.img1, imgFordMondeo.img2, imgFordMondeo.img3, imgFordMondeo.img4],
        Titulo: 'Ford Mondeo Eficiencia y rendimiento',
        descripcion: 'Bajo el capót de un híbrido verán las mismas partes que en un vehículo convencional más una gran diferencia: un motor eléctrico. El motor de combustión interna y el motor eléctrico trabajan en conjunto para propulsar el vehículo.'
    },{
        id: 2558843,
        marca: 'Ford',
        modelo: 'Bronco',
        precio: '$ 6.500.000',
        img: bronco,
        imgMarca: ford,
        imgBanner: imgFordBronco.banner,
        imgDescriptivas: [imgFordBronco.img1, imgFordBronco.img2, imgFordBronco.img3, imgFordBronco.img4],
        Titulo: 'El icono de la aventura',
        descripcion: 'La Bronco Sport Wildtrak cuenta con un avanzado sistema de tracción 4WD con control vectorial de torque y bloqueo de diferencial trasero. Además, su Sistema de Gestión de Terrenos (GOAT) tiene hasta 7 modos de manejo.'
    },{
        id: 4670547,
        marca: 'Ford',
        modelo: 'Ecosport',
        precio: '$ 3.400.000',
        img: ecosport,
        imgMarca: ford,
        imgBanner: imgFordEcosport.banner,
        imgDescriptivas: [imgFordEcosport.img1, imgFordEcosport.img2, imgFordEcosport.img3, imgFordEcosport.img4],
        Titulo: 'Creara para transfornar tu imaginación.',
        descripcion: 'La Ecosport conserva los elementos que definen su identidad: transmite confianza, combina refinamiento urbano con espíritu aventurero y revela una alta calidad en su dinámica de manejo.'
    },{
        id: 8944585,
        marca: 'Ford',
        modelo: 'Territory',
        precio: '$ 5.400.000',
        img: territory,
        imgMarca: ford,
        imgBanner: imgFordTerritory.banner,
        imgDescriptivas: [imgFordTerritory.img1, imgFordTerritory.img2, imgFordTerritory.img3, imgFordTerritory.img4],
        Titulo: 'Entrentemos la rutina, enfrentemos el cambio',
        descripcion: 'La Territory incorpora Ford Co-Pilot 360, un avanzado sistema de asistencia a la conducción de vanguardia, que incluye camara 360, alerta de puntos ciego, Sistema antibloqueo de frenos (ABS), distribución electrónica de frenado (EBD) y asistencia electrónica al frenado de emergencia (EBA)​'
    },{
        id: 5858365,
        marca: 'Fiat',
        modelo: 'Mobi',
        precio: '$1.300.000',
        img: mobi,
        imgMarca: fiat,
        imgBanner: "bannerMobi",
        imgDescriptivas: 0,
        Titulo: 'Nuevo Fiat MOBI Like',
        descripcion: 'El FIAT Mobi mantiene su esencia pero ahora renueva su parrilla delantera y algunos otros detalles en línea con el resto de los modelos de FIAT. Este city car también agrega novedades en el equipamiento como la central multimedia de 7’’ con conectividad Android Auto & Carplay.'
    },{
        id: 3356634,
        marca: 'Fiat',
        modelo: 'Toro',
        precio: '$2.800.000',
        img: toro,
        imgMarca: fiat,
        imgBanner: "bannerToro",
        imgDescriptivas: 0,
        Titulo: 'Tienes todo lo que necesitás para una nueva aventura.',
        descripcion: 'De una, te va a fascinar el nuevo capot. Después, te vas a enamorar de la nueva parrilla, con el logo de Fiat y el detalle de la bandera italiana. Un diseño musculoso, que equilibra belleza y fuerza. El frente de la nueva Fiat Toro es increible.'
    },{
        id: 1732428,
        marca: 'Fiat',
        modelo: 'Uno Way',
        precio: '$1.200.000',
        img: uno,
        imgMarca: fiat,
        imgBanner: "bannerUno",
        imgDescriptivas: 0,
        Titulo: 'Varios autos en UNO solo.',
        descripcion: 'El Fiat Uno llama la atención. Además de su renovado diseño frontal –más moderno y lleno de personalidad–, el Uno cuenta con nuevos paragolpes y parrilla, que resaltan los contornos del modelo.'
    },{
        id: 8926023,
        marca: 'Peugeot',
        modelo: '208',
        precio: '$2.700.000',
        img: p208,
        imgMarca: peugeot,
        imgBanner: "banner208",
        imgDescriptivas: 0,
        Titulo: 'Unboring the future',
        descripcion: 'El diseño del 208 adopta el nuevo lenguaje de diseño de la marca Peugeot, con la nueva firma lumínica que se asemeja a los colmillos del León. En el frente, aparece el nombre del modelo para un toque distintivo y moderno. En el lateral, el juego de sombras le da un perfil dinámico. Y en la parte posterior, las luces traseras con forma de garra completan un diseño armonioso.'
    },{
        id: 34743923,
        marca: 'Peugeot',
        modelo: '308',
        precio: '$5.500.000',
        img: p308,
        imgMarca: peugeot,
        imgBanner: "banner308",
        imgDescriptivas: 0,
        Titulo: 'Estilo y Elegancia',
        descripcion: 'De nuevas líneas en su diseño exterior, el Peugeot 308 integra los últimos códigos estilísticos de la marca. A simple vista, un estilo moderno con detalles tecnológicos lumínicos impactantes, de frente felino, que conjuga lo dinámico y lo exclusivo.'
    },{
        id: 15809567,
        marca: 'Peugeot',
        modelo: 'SUV 5008',
        precio: '$9.500.000',
        img: p5008,
        imgMarca: peugeot,
        imgBanner: "banner5008",
        imgDescriptivas: 0,
        Titulo: 'SUV Peugeot 5008 ',
        descripcion: 'Dejate seducir por el nuevo SUV PEUGEOT 5008. Con un nuevo frente, este SUV tiene líneas elegantes y modernas que conjugan en un diseño sofisticado. Un vehículo pensado para disfrutar en familia gracias a sus 7 plazas.'
    },{
        id: 2347653,
        marca: 'Peugeot',
        modelo: 'Partner Patagonica',
        precio: '$3.800.000',
        img: patagonica,
        imgMarca: peugeot,
        imgBanner: "bannerPatagonica",
        imgDescriptivas: 0,
        Titulo: 'La Compañera para tu familia',
        descripcion: 'Con su aspecto que inspira robustez y dinamismo, Partner Patagonica afirma su pertenencia al universo de los monovolumenes. Sus faros de vidrio liso y las protecciones reforzadas imponen un carácter robusto de confianza y solidez. '
    },{
        id: 7046034,
        marca: 'Renault',
        modelo: 'Captur',
        precio: '$3.500.000',
        img: captur,
        imgMarca: renault,
        imgBanner: "bannerCaptur",
        imgDescriptivas: 0,
        Titulo: 'Renault Captur',
        descripcion: 'Inspirado en el concept car del mismo nombre, Renault CAPTUR representa un nuevo lenguaje en términos de diseño: moderno y sofisticado.'
    },{
        id: 4963043,
        marca: 'Renault',
        modelo: 'Logan',
        precio: '$3.800.000',
        img: logan,
        imgMarca: renault,
        imgBanner: "bannerLogan",
        imgDescriptivas: 0,
        Titulo: 'Un sedán para el momento en el que estás.',
        descripcion: 'El diseño renovado, el gran espacio interior junto con un baúl suficientemente grande para todo lo que querés llevar, son algunas de las características que hacen al Renault LOGAN, el vehículo que te merecés.'
    },{
        id: 4963355,
        marca: 'Renault',
        modelo: 'Sandero',
        precio: '$2.700.000',
        img: sandero,
        imgMarca: renault,
        imgBanner: "bannerSandero",
        imgDescriptivas: 0,
        Titulo: 'Sos urbano,sos alguien con caractér.',
        descripcion: 'Con un diseño completamente renovado, su nueva identidad lumínica, llantas diamantadas 16” y su caja CVT, el Renault SANDERO es el auto perfecto que se adapta a todo lo que sos.'
    },{
        id: 2447456,
        marca: 'Renault',
        modelo: 'Steway',
        precio: '$2.900.000',
        img: steway,
        imgMarca: renault,
        imgBanner: "bannerSteway",
        imgDescriptivas: 0,
        Titulo: 'Un vehículo con actitud para enfrentar cualquier camino.',
        descripcion: 'Su gran despeje del suelo y sus nuevos faros C-Shape le otorgan una actitud intrépida que junto a las luces LED traseras, trazan una línea que resalta el movimiento. Un auto diseñado a la altura de lo que te propongas .'
    },{
        id: 3957998,
        marca: 'Volkswagen',
        modelo: 'Gol',
        precio: '$1.800.000',
        img: gol,
        imgMarca: volkswagen,
        imgBanner: "bannerGol",
        imgDescriptivas: 0,
        Titulo: 'El auto que te mereces',
        descripcion: 'El Gol incorpora en su versión Trendline la caja automática Tiptronic de 6 velocidades para que disfrutes de tus viajes como nunca antes. Esta nueva característica se combina con el reconocido motor 1.6 l de 16 V y 110 CV.'
    },{
        id: 8925180,
        marca: 'Volkswagen',
        modelo: 'Polo',
        precio: '$3.800.000',
        img: polo,
        imgMarca: volkswagen,
        imgBanner: "bannerPolo",
        imgDescriptivas: 0,
        Titulo: 'Vas a querer llamarlo tu nuevo auto',
        descripcion: 'El nuevo Polo GTS se convierte en una referencia en deportividad dentro de su segmento gracias a su diseño imponente y exclusivo. Los detalles de calidad en rojo y negro brillante, los faros full LED y su frontal aguerrida nos muestran toda la deportividad en una sola mirada.'
    },{
        id: 9197791,
        marca: 'Volkswagen',
        modelo: 'Virtus',
        precio: '$4.600.000',
        img: virtus,
        imgMarca: volkswagen,
        imgBanner: "bannerVirtus",
        imgDescriptivas: 0,
        Titulo: 'La potencia que buscás, con la comodidad que necesitás.',
        descripcion: 'El Nuevo Virtus GTS se convierte en una nueva referencia en deportividad marcando diferencia con su gran espacio interno. Su diseño imponente exclusivo trae detalles de altísima calidad en color rojo y negro sumados a las líneas cromadas en su exterior. Su frontal aguerrido nos muestra toda la deportividad en una sola mirada.'
    }
]