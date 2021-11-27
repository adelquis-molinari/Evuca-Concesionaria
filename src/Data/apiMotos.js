import corven from '../img/motos/corven/corven.png';
import hunter150rt from '../img/motos/corven/hunter/Hunter150rt.png';
import newEnergy110 from '../img/motos/corven/new energy/New-Energy-110.png';
import touringTriax250 from '../img/motos/corven/touring triax/touring-triax-250.png';
import honda from '../img/motos/honda/honda.png';
import wave from '../img/motos/honda/wave/wave.jpg';
import twister from '../img/motos/honda/twister/twister.jpg';
import cbr1000 from '../img/motos/honda/cbr/cbr1000.jpg';
import yamaha from '../img/motos/yamaha/yamaha.png';
import cripton from '../img/motos/yamaha/cripton/cripton.jpg';
import fz25 from '../img/motos/yamaha/fz25/fz25.jpg';
import YZFR1 from '../img/motos/yamaha/yzf-r1/YZF-R1.jpg';

import { imgCorvenHunter, imgCorvenEnergy, imgCorvenTouringTriax } from '../Data/imgMotos';
import { imgHondaWave, imgHondaTwister, imgHondaCBR } from '../Data/imgMotos';
import { imgYamahaCripton, imgYamahaFz25, imgYamahaYzf } from '../Data/imgMotos';

export const apiSimpleMotos = [
    {
        id: 228835,
        marca: 'Corven',
        modelo: 'Hunter 15 rt',
        precio : 160000,
        stock: 4,
        cantCart: 1,
        img: hunter150rt,
        imgMarca: corven,
        descripcion: 'Corven Hunter 150 Rt 2021',
        tipo: 'moto',
        imgBanner: imgCorvenHunter.banner,
        imgDescriptivas: [imgCorvenHunter.img1, imgCorvenHunter.img2, imgCorvenHunter.img3, imgCorvenHunter.img4],
        Titulo: 'Ágil y rendidora.',
        descripcionDetallada: 'Con su renovado diseño, la Hunter 150 RT combina agilidad, rendimiento y prestaciones con una ideal economía de uso. Se presenta con un diseño moderno, deportivo y con detalles de calidad en todos sus componentes. Con baulera incorporada, brinda practicidad y comodidad para todos tus viajes.',
    },{
        id: 676590,
        marca: 'Corven',
        modelo: 'New Energy 110',
        precio : 120000,
        stock: 4,
        cantCart: 1,
        img: newEnergy110,
        imgMarca: corven,
        descripcion: 'Corven NewEnergy 110 2021',
        tipo: 'moto',
        imgBanner: imgCorvenEnergy.banner,
        imgDescriptivas: [imgCorvenEnergy.img1, imgCorvenEnergy.img2, imgCorvenEnergy.img3, imgCorvenEnergy.img4],
        Titulo: 'Ágil y versátil.',
        descripcionDetallada: 'La Energy 110 RT es la mejor opción a la hora de elegir una motocicleta ágil y fácil de conducir, que te aporte la libertad que necesitas para tu movimiento cotidiano.',
    },{
        id: 426733,
        marca: 'Corven',
        modelo: 'Touring Triax 250',
        precio : 710000,
        stock: 4,
        cantCart: 1,
        img: touringTriax250,
        imgMarca: corven,
        descripcion: 'Corven Touring Triax 250 2021',
        tipo: 'moto',
        imgBanner: imgCorvenTouringTriax.banner,
        imgDescriptivas: [imgCorvenTouringTriax.img1, imgCorvenTouringTriax.img2, imgCorvenTouringTriax.img3, imgCorvenTouringTriax.img4],
        Titulo: 'Comodidad y movilidad.',
        descripcionDetallada: 'Una moto de diseño exclusivo, que incorpora un completo equipamiento pensado para quienes desean recorrer grandes distancias, deseando vivir un viaje aventurero, pero sobre todo cómodo y seguro.',
    },{
        id: 455972,
        marca: 'Honda',
        modelo: 'Wave',
        precio : 210000,
        stock: 4,
        cantCart: 1,
        img: wave,
        imgMarca: honda,
        descripcion: 'Honda Wave 2021',
        tipo: 'moto',
        imgBanner: imgHondaWave.banner,
        imgDescriptivas: [imgHondaWave.img1, imgHondaWave.img2, imgHondaWave.img3, imgHondaWave.img4],
        Titulo: 'El más versátil de los motocicletas.',
        descripcionDetallada: 'Cuenta con una excelente maniobrabilidad gracias a su cuerpo ligero, que sumado a su asiento doble, la convierten en la opción ideal para moverte por la ciudad todos los días.',
    },{
        id: 441901,
        marca: 'Honda',
        modelo: 'Twister',
        precio : 640000,
        stock: 4,
        cantCart: 1,
        img: twister,
        imgMarca: honda,
        descripcion: 'Honda Twister 2021',
        tipo: 'moto',
        imgBanner: imgHondaTwister.banner,
        imgDescriptivas: [imgHondaTwister.img1, imgHondaTwister.img2, imgHondaTwister.img3, imgHondaTwister.img4],
        Titulo: 'La siempre confiable.',
        descripcionDetallada: 'Moderno e innovador, el panel es totalmente digital y te brinda todo lo que necesitás para una visualización óptima en todo momento. Incluye velocímetro, odómetro total y parcial, indicador de nivel de combustible y un reloj. Además, se incorpora la función de autonomía en el tablero (kilómetros por combustible disponible).',
    },{
        id: 947310,
        marca: 'Honda',
        modelo: 'CBR 1000',
        precio : 6400000,
        stock: 4,
        cantCart: 1,
        img: cbr1000,
        imgMarca: honda,
        descripcion: 'Honda Cbr 1000 2021',
        tipo: 'moto',
        imgBanner: imgHondaCBR.banner,
        imgDescriptivas: [imgHondaCBR.img1, imgHondaCBR.img2, imgHondaCBR.img3, imgHondaCBR.img4],
        Titulo: 'Más liviana, más poderosa.',
        descripcionDetallada: 'Más liviana, más poderosa, más control. La nueva CBR1000RR SP1 tiene un motor de 16 válvulas DOHC con 10 caballos de fuerza más y contribuyendo una disminución en su peso total. Tiene una mejora de 14% en potencia sobre peso. La nueva SP mantiene al usuario amigable, dado a su gran paquete electrónico que es lo principal de su concepto de control total.',
    },{
        id: 531023,
        marca: 'Yamaha',
        modelo: 'Cripton',
        precio : 270000,
        stock: 4,
        cantCart: 1,
        img: cripton,
        imgMarca: yamaha,
        descripcion: 'Yamaha Cripton 2021',
        tipo: 'moto',
        imgBanner: imgYamahaCripton.banner,
        imgDescriptivas: [imgYamahaCripton.img1, imgYamahaCripton.img2, imgYamahaCripton.img3, imgYamahaCripton.img4],
        Titulo: 'Movilidad urbana.',
        descripcionDetallada: 'Con un andar cómodo y sencillo, es una excelente opción para la movilidad urbana diaria. Posee un motor 4 tiempos que optimiza el consumo y brinda un andar suave y con excelentes prestaciones. Por su estética y dimensiones es un vehículo versátil y fácil de conducir en trayectos cortos y medianos. Además posee un completo tablero, caballete central y lateral así como baúl portaobjetos bajo el asiento.',
    },{
        id: 674599,
        marca: 'Yamaha',
        modelo: 'FZ 25',
        precio : 650000,
        stock: 4,
        cantCart: 1,
        img: fz25,
        imgMarca: yamaha,
        descripcion: 'Yamaha Fz 25 2021',
        tipo: 'moto',
        imgBanner: imgYamahaFz25.banner,
        imgDescriptivas: [imgYamahaFz25.img1, imgYamahaFz25.img2, imgYamahaFz25.img3, imgYamahaFz25.img4],
        Titulo: 'ADN FZ.',
        descripcionDetallada: `Siendo el mayor exponente de la serie, FZ25 combina diseño y rendimiento de una forma única. Sus líneas brindan un carácter urbano desafiante, deportivo y bien diferenciado, mientras que su comodidad y rendimiento le permiten un uso cómodo tanto en ciudad como en ruta. 
        Diseñado bajo el concepto Blue Core, ofrece gran rendimiento y eficiencia de consumo de combustible, que sumado a su chasis tipo diamante y al escape Mid-ship este modelo es una opción equilibrada y ágil para la conducción urbana.`,
    },{
        id: 603092,
        marca: 'Yamaha',
        modelo: 'FZ FR1',
        precio : 6200000,
        stock: 4,
        cantCart: 1,
        img: YZFR1,
        imgMarca: yamaha,
        descripcion: 'Yamaha Fz fr1 2021',
        tipo: 'moto',
        imgBanner: imgYamahaYzf.banner,
        imgDescriptivas: [imgYamahaYzf.img1, imgYamahaYzf.img2, imgYamahaYzf.img3, imgYamahaYzf.img4],
        Titulo: 'Espíritu deportivo.',
        descripcionDetallada: `Con la tecnología “CROSSPLANE” derivada de la YZR-M1 que utiliza el equipo Yamaha Factory de MotoGP y un diseño realizado de principio a fin por el icono del motociclismo: Valentino Rossi, llega la nueva YZF-R1 para crear experiencias con sensaciones únicas. 
        Un referente de la marca que ha evolucionado para mantener su liderazgo tanto en la pista como en las calles.`,
    }
]

