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
        precio : '$ 160.000',
        img: hunter150rt,
        imgMarca: corven,
        descripcion: 'corven hunter 150 rt 2021',
        tipo: 'moto'
    },{
        id: 676590,
        marca: 'Corven',
        modelo: 'New Energy 110',
        precio : '$ 120.000',
        img: newEnergy110,
        imgMarca: corven,
        descripcion: 'corven newEnergy 110 2021',
        tipo: 'moto'
    },{
        id: 426733,
        marca: 'Corven',
        modelo: 'Touring Triax 250',
        precio : '$ 710.000',
        img: touringTriax250,
        imgMarca: corven,
        descripcion: 'corven touring Triax 250 2021',
        tipo: 'moto'
    },{
        id: 455972,
        marca: 'Honda',
        modelo: 'Wave',
        precio : '$ 210.000',
        img: wave,
        imgMarca: honda,
        descripcion: 'honda wave 2021',
        tipo: 'moto'
    },{
        id: 441901,
        marca: 'Honda',
        modelo: 'Twister',
        precio : '$ 640.000',
        img: twister,
        imgMarca: honda,
        descripcion: 'honda twister 2021',
        tipo: 'moto'
    },{
        id: 947310,
        marca: 'Honda',
        modelo: 'CBR 1000',
        precio : '$ 6.400.000',
        img: cbr1000,
        imgMarca: honda,
        descripcion: 'honda cbr 1000 2021',
        tipo: 'moto'
    },{
        id: 531023,
        marca: 'Yamaha',
        modelo: 'Cripton',
        precio : '$ 270.000',
        img: cripton,
        imgMarca: yamaha,
        descripcion: 'yamaha cripton 2021',
        tipo: 'moto'
    },{
        id: 674599,
        marca: 'Yamaha',
        modelo: 'FZ 25',
        precio : '$ 650.000',
        img: fz25,
        imgMarca: yamaha,
        descripcion: 'yamaha fz 25 2021',
        tipo: 'moto'
    },{
        id: 603092,
        marca: 'Yamaha',
        modelo: 'FZ FR1',
        precio : '$ 6.200.000',
        img: YZFR1,
        imgMarca: yamaha,
        descripcion: 'yamaha fz fr1 2021',
        tipo: 'moto'
    }
]

export const apiDetalladaMotos = [
    {
        id: 228835,
        marca: 'Corven',
        modelo: 'Hunter 15 rt',
        precio : '$ 160.000',
        img: hunter150rt,
        imgMarca: corven,
        imgBanner: imgCorvenHunter.banner,
        imgDescriptivas: [imgCorvenHunter.img1, imgCorvenHunter.img2, imgCorvenHunter.img3, imgCorvenHunter.img4],
        Titulo: 'Ágil y rendidora.',
        descripcion: 'Con su renovado diseño, la Hunter 150 RT combina agilidad, rendimiento y prestaciones con una ideal economía de uso. Se presenta con un diseño moderno, deportivo y con detalles de calidad en todos sus componentes. Con baulera incorporada, brinda practicidad y comodidad para todos tus viajes.',
        tipo: 'moto'
    },{
        id: 676590,
        marca: 'Corven',
        modelo: 'New Energy 110',
        precio : '$ 120.000',
        img: newEnergy110,
        imgMarca: corven,
        imgBanner: imgCorvenEnergy.banner,
        imgDescriptivas: [imgCorvenEnergy.img1, imgCorvenEnergy.img2, imgCorvenEnergy.img3, imgCorvenEnergy.img4],
        Titulo: 'Ágil y versátil.',
        descripcion: 'La Energy 110 RT es la mejor opción a la hora de elegir una motocicleta ágil y fácil de conducir, que te aporte la libertad que necesitas para tu movimiento cotidiano.',
        tipo: 'moto'
    },{
        id: 426733,
        marca: 'Corven',
        modelo: 'Touring Triax 250',
        precio : '$ 710.000',
        img: touringTriax250,
        imgMarca: corven,
        imgBanner: imgCorvenTouringTriax.banner,
        imgDescriptivas: [imgCorvenTouringTriax.img1, imgCorvenTouringTriax.img2, imgCorvenTouringTriax.img3, imgCorvenTouringTriax.img4],
        Titulo: 'Comodidad y movilidad.',
        descripcion: 'Una moto de diseño exclusivo, que incorpora un completo equipamiento pensado para quienes desean recorrer grandes distancias, deseando vivir un viaje aventurero, pero sobre todo cómodo y seguro.',
        tipo: 'moto'
    },{
        id: 455972,
        marca: 'Honda',
        modelo: 'Wave',
        precio : '$ 210.000',
        img: wave,
        imgMarca: honda,
        imgBanner: imgHondaWave.banner,
        imgDescriptivas: [imgHondaWave.img1, imgHondaWave.img2, imgHondaWave.img3, imgHondaWave.img4],
        Titulo: 'El más versátil de los motocicletas.',
        descripcion: 'Cuenta con una excelente maniobrabilidad gracias a su cuerpo ligero, que sumado a su asiento doble, la convierten en la opción ideal para moverte por la ciudad todos los días.',
        tipo: 'moto'
    },{
        id: 441901,
        marca: 'Honda',
        modelo: 'Twister',
        precio : '$ 640.000',
        img: twister,
        imgMarca: honda,
        imgBanner: imgHondaTwister.banner,
        imgDescriptivas: [imgHondaTwister.img1, imgHondaTwister.img2, imgHondaTwister.img3, imgHondaTwister.img4],
        Titulo: 'La siempre confiable.',
        descripcion: 'Moderno e innovador, el panel es totalmente digital y te brinda todo lo que necesitás para una visualización óptima en todo momento. Incluye velocímetro, odómetro total y parcial, indicador de nivel de combustible y un reloj. Además, se incorpora la función de autonomía en el tablero (kilómetros por combustible disponible).',
        tipo: 'moto'
    },{
        id: 947310,
        marca: 'Honda',
        modelo: 'CBR 1000',
        precio : '$ 6.400.000',
        img: cbr1000,
        imgMarca: honda,
        imgBanner: imgHondaCBR.banner,
        imgDescriptivas: [imgHondaCBR.img1, imgHondaCBR.img2, imgHondaCBR.img3, imgHondaCBR.img4],
        Titulo: 'Más liviana, más poderosa.',
        descripcion: 'Más liviana, más poderosa, más control. La nueva CBR1000RR SP1 tiene un motor de 16 válvulas DOHC con 10 caballos de fuerza más y contribuyendo una disminución en su peso total. Tiene una mejora de 14% en potencia sobre peso. La nueva SP mantiene al usuario amigable, dado a su gran paquete electrónico que es lo principal de su concepto de control total.',
        tipo: 'moto'
    },{
        id: 531023,
        marca: 'Yamaha',
        modelo: 'Cripton',
        precio : '$ 270.000',
        img: cripton,
        imgMarca: yamaha,
        imgBanner: imgYamahaCripton.banner,
        imgDescriptivas: [imgYamahaCripton.img1, imgYamahaCripton.img2, imgYamahaCripton.img3, imgYamahaCripton.img4],
        Titulo: 'Movilidad urbana.',
        descripcion: 'Con un andar cómodo y sencillo, es una excelente opción para la movilidad urbana diaria. Posee un motor 4 tiempos que optimiza el consumo y brinda un andar suave y con excelentes prestaciones. Por su estética y dimensiones es un vehículo versátil y fácil de conducir en trayectos cortos y medianos. Además posee un completo tablero, caballete central y lateral así como baúl portaobjetos bajo el asiento.',
        tipo: 'moto'
    },{
        id: 674599,
        marca: 'Yamaha',
        modelo: 'FZ 25',
        precio : '$ 650.000',
        img: fz25,
        imgMarca: yamaha,
        imgBanner: imgYamahaFz25.banner,
        imgDescriptivas: [imgYamahaFz25.img1, imgYamahaFz25.img2, imgYamahaFz25.img3, imgYamahaFz25.img4],
        Titulo: 'ADN FZ.',
        descripcion: `Siendo el mayor exponente de la serie, FZ25 combina diseño y rendimiento de una forma única. Sus líneas brindan un carácter urbano desafiante, deportivo y bien diferenciado, mientras que su comodidad y rendimiento le permiten un uso cómodo tanto en ciudad como en ruta. 
        Diseñado bajo el concepto Blue Core, ofrece gran rendimiento y eficiencia de consumo de combustible, que sumado a su chasis tipo diamante y al escape Mid-ship este modelo es una opción equilibrada y ágil para la conducción urbana.`,
        tipo: 'moto'
    },{
        id: 603092,
        marca: 'Yamaha',
        modelo: 'YFZ FR1',
        precio : '$ 6.200.000',
        img: YZFR1,
        imgMarca: yamaha,
        imgBanner: imgYamahaYzf.banner,
        imgDescriptivas: [imgYamahaYzf.img1, imgYamahaYzf.img2, imgYamahaYzf.img3, imgYamahaYzf.img4],
        Titulo: 'Espíritu deportivo.',
        descripcion: `Con la tecnología “CROSSPLANE” derivada de la YZR-M1 que utiliza el equipo Yamaha Factory de MotoGP y un diseño realizado de principio a fin por el icono del motociclismo: Valentino Rossi, llega la nueva YZF-R1 para crear experiencias con sensaciones únicas. 
        Un referente de la marca que ha evolucionado para mantener su liderazgo tanto en la pista como en las calles.`,
        tipo: 'moto'
    }
]