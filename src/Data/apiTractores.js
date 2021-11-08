import deutz from '../img/tractores/deutz/deutzFahr.png';
import Serie6W from '../img/tractores/deutz/Serie6W.png';
import johnDeere from '../img/tractores/johnDeere/johnDeere.png';
import jd6100E from '../img/tractores/johnDeere/6100E.png';
import newHolla from '../img/tractores/newHolla/newHolla.png';
import T6130 from '../img/tractores/newHolla/T6130.png';

export const apiSimpleTractores = [
    {
        id: 798478,
        marca: 'Deutz',
        modelo: 'Serie 6W',
        img: Serie6W,
        imgMarca: deutz,
        descripcion: 'Deutz Serie 6W 2021'
    },
    {
        id: 366558,
        marca: 'John Deere',
        modelo: '6100E',
        img: jd6100E,
        imgMarca: johnDeere,
        descripcion: 'John Deere 6100E 2021'
    },
    {
        id: 491566,
        marca: 'New Holland',
        modelo: 'T6130',
        img: T6130,
        imgMarca: newHolla,
        descripcion: 'New Holland T6130 2021'
    }
];
export const apiDetalladaTractores = [
    {
        id: 8321753,
        marca: 'Deutz',
        modelo: 'Serie 6W',
        img: Serie6W,
        imgMarca: deutz,
        imgBanner: "banner Deutz",
        imgDescriptivas: 0,
        Titulo: 'Diseño moderno y mécanica fiable para una producción sin límites.',
        descripcion: 'La nueva serie 6W Profi de DEUTZ-FAHR Fase III A incluye 4 modelos con motores Deutz de 130 a 180 CV y 6 cilindros. Diseñados íntegramente en Italia para los mercados de exportación, se caracterizan por su eficiente transmisión sincronizada y por la posibilidad de elegir entre un modelo con cabina o con bastidor de seguridad de 4 montantes provisto de un práctico techo parasol. La nueva serie 6W Profi ofrece máquinas versátiles y productivas, dotadas no sólo de la potencia suficiente para llevar a cabo las típicas labores de la explotación agrícola, sino que además garantizan una productividad absoluta y un bajo consumo.'
    },
    {
        id: 1079015,
        marca: 'John Deere',
        modelo: '6100E',
        img: jd6100E,
        imgMarca: johnDeere,
        imgBanner: "banner John Deere",
        imgDescriptivas: 0,
        Titulo: 'El tractor ideal para el productor ganadero.',
        descripcion: `La nueva Serie de tractores 6E, de industria Argentina, está compuesta por tres modelos. 6100E , de 97 hp, 6110E, de 106 hp y 6125E, de 123 hp de potencia. Preparados para el trabajo con rotoenfardadoras y para la carga de mixers, son ideales para el productor ganadero y forrajero.
        Gracias a su nueva transmisión PowrReverser™ Plus con 24 marchas de avance y 12 de retroceso, es ideal también para el uso de cargadores frontales.`
    },
    {
        id: 8871466,
        marca: 'New Holland',
        modelo: 'T6130',
        img: T6130,
        imgMarca: newHolla,
        imgBanner: "banner New Holland",
        imgDescriptivas: 0,
        Titulo: 'Pura potencia y máxima eficioencia para los agricultores y ganaderos del mañana.',
        descripcion: `Resistencia y rendimiento que dan como resultado una alta productividad con un menor costo operativo. 
        Motor New Holland, con versiones de hasta 132 CV, turboalimentado con intercooler. Controles posicionados ergonómicamente para el operador con un diseño moderno.`
    }
];