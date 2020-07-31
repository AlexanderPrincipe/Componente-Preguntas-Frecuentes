<template>
  <div id="app">
    <componentePreguntasFrecuentes
    :preguntasFrecuentes=preguntasFrecuentes
    :rutaPrincipal=rutaPrincipal
    
    />
  </div>
</template>

<script>
import componentePreguntasFrecuentes from './components/componentePreguntasFrecuentes';

export default {
  name: 'App',
  components: {
    componentePreguntasFrecuentes
  },
  data () {
    return {
      rutaPrincipal:'/preguntas-frecuentes/',
      preguntasFrecuentes: {
        "Preguntas más frecuentes": [
          {
            id: "collapse-1",
            preg: "¿Cómo puedo comprar Viaje Seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">Debes ingresar al siguiente link: https://www.interseguro.com.pe/viajes/</p>',
              '<p class="parrafo omnes-medium ">Y luego seguir los tres pasos mostrados a continuación para proceder a adquirir el seguro en menos de 5 minutos:</p>',
            ],
          },
          {
            id: "collapse-2",
            preg: "¿Quién puede comprar el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">El <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> de Interseguro debe ser comprado por un adulto entre 18 y 80 años cumplidos. se puede sumar hasta 8 personas más al <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link>, incluyendo adultos y niños.</p>',
              '<p class="parrafo omnes-medium ">En el caso de de realizar un viaje, es decir, de 30 días o menos, los adultos adicionales deben tener entre 18 y 85 años. Para viajes de 31 días o más, los pasajeros adultos adicionales deben tener entre 18 y 65 años cumplidos.</p>',
            ],
          },
          {
            id: "collapse-3",
            preg: "¿Cuándo se considera pérdida total para un vehículo? ",
            resp: "Cuando los daños superan el 75% del valor del carro.",
          },
          {
            id: "collapse-4",
            preg: "¿Hasta dónde llega mi cobertura?",
            resp: "Cuentas con cobertura nacional.",
          },
          {
            id: "collapse-5",
            preg: "¿Cuáles son los límites geográficos de las asistencias?",
            resp: "Chosica, Cieneguilla, Ancón y 300 km al Sur.",
          },
        ],
        "Planes de Viaje Seguro": [
          {
            id: "collapse-1",
            preg: "¿Qué es un seguro de viaje?",
            resp: [
              '<p class="parrafo omnes-medium ">Un <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> tiene como objetivo asegurarte mientras te encuentres fuera de tu  país de residencia ante cualquier enfermedad, accidente o imprevisto ocurrido durante su viaje. Por otro lado, la asistencia al viajero o asistencia de viaje tiene como objetivo asistirte cuando te encuentres fuera de tu país de residencia, te cubre desde tratamientos médicos hasta la pérdida de equipaje en el aeropuerto.</p>',
              '<p class="parrafo omnes-medium ">Por otro lado, la asistencia al viajero o asistencia de viaje tiene como objetivo asistirte cuando te encuentres fuera de tu país de residencia, te cubre desde tratamientos médicos hasta la pérdida de equipaje en el aeropuerto.</p>',
            ],
          },
          {
            id: "collapse-2",
            preg: "¿Quién puede comprar el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">Hay muchas circunstancias que pueden ocurrir durante tu viaje, lo mejor es es que estés protegido contando con un seguro. Algunos de los incidentes pueden ser:</p>',
              '<p class="parrafo omnes-medium ">Algunos de los incidentes pueden ser:</p>',
              '<li class=" estiloparrafo omnes-medium">Perder tu vuelo</li>',
              '<li class=" estiloparrafo omnes-medium">Que te roben</li>',
              '<li class=" estiloparrafo omnes-medium">Perder tus documentos de viaje</li>',
              '<li class=" estiloparrafo omnes-medium">Enfermarte durante el viaje</li>',
              '<li class=" estiloparrafo omnes-medium">Sufrir un accidente inesperado</li>',
              '<li class=" estiloparrafo omnes-medium">Necesitar información/asistencia mientras te encuentras en otro país</li>',
            ],
          },
          {
            id: "collapse-3",
            preg: "¿Qué es la Central de Atención al Cliente?",
            resp: [
              '<p class="parrafo omnes-medium">Es la central encargada de atender cualquier consulta que puedas tener respecto a tu seguro viaje, así como una respuesta ante accidentes o emergencias.</p>',
              '<p class="parrafo omnes-medium">Para contactar con la Central de Asistencia deberás comunicarte a los siguientes números:</p>',
              '<li class=" estiloparrafo omnes-medium">(01) 500-0000 0-801-00165 (Provincias)</li>',
              '<p class="parrafo omnes-medium">O al correo</p>',
              '<li class=" estiloparrafo omnes-medium">servicios@interseguro.com.pe</li>',
              '<p class="parrafo omnes-medium">*Es importante recalcar que para asistencia de viaje, se deberán recurrir a los números descritos en la sección “asistencia de viaje”.</p>',
            ],
          },
          {
            id: "collapse-4",
            preg:
              "¿A qué se le considera una enfermedad o condición médica preexistente?",
            resp: [
              '<p class="parrafo omnes-medium ">Es la condición si es que tuvieras una enfermedad o una condición médica antes del inicio de la vigencia de tu seguro, puede ser de dos tipos:</p>',
              '<li class=" estiloparrafo omnes-medium">Preexistencia conocida: Ya tienes conciencia de haberte tratado médicamente de alguna forma. Ejm: Extirpación del apéndice antes de adquirir la póliza, padecimiento de enfermedad al corazón en la adolescencia, etc.s</li>',
              '<li class=" estiloparrafo omnes-medium">Preexistencia oculta/ asintomática: Es aquella enfermedad que desconocias que padecias al momento de tomar la póliza. Ejm: Cáncer, diabetes, hipertensión, etc.s</li>',
            ],
          },
          {
            id: "collapse-5",
            preg: "¿Qué es la repatriación/traslado sanitario?",
            resp: [
              '<p class="parrafo omnes-medium ">Se entiende por repatriación sanitaria el traslado del Beneficiario enfermo o accidentado desde el lugar en donde se encuentra hasta el aeropuerto de ingreso del país de residencia habitual y en el que debió ser emitido el voucher. En este caso sería desde cualquier país del mundo hasta el aeropuerto internacional Jorge Chávez.</p>',
            ],
          },
          {
            id: "collapse-6",
            preg: "¿A qué se le considera fallecimiento accidental?",
            resp: [
              '<p class="parrafo omnes-medium ">Es aquel fallecimiento producido por la acción imprevista, violenta, fortuita y/u ocasional, de un factor externo, que obra súbitamente sobre el Asegurado independientemente de su voluntad y que pueda ser determinada por los médicos.</p>',
            ],
          },
          {
            id: "collapse-7",
            preg: "¿A qué se le consideran accidentes?",
            respuesta: [
              '<p class="parrafo omnes-medium ">Para efectos de la póliza, se considera accidente todo suceso imprevisto, involuntario, repentino y fortuito, causado por factores externos, que afecte al organismo de Asegurado, ocasionándole una o más lesiones que se manifiesten por contusiones o heridas visibles así como lesiones internas o inmersión revelados por los exámenes correspondientes.</p>',
            ],
          },
          {
            id: "collapse-8",
            preg: "¿Cuáles son los planes de Viaje Seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">Interseguro te ofrece tres planes para que tú elijas el <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> que más se adecúa a tus necesidades:</p>',
              '<li class=" estiloparrafo omnes-medium">Plan Básico: Adecuado a ti  si viajas por tiempos cortos. Te ofrecemos una cobertura básica para Medicamentos, Equipajes, Adicionales y por fallecimiento para cualquier destino a excepción de Europa.</li>',
              '<li class=" estiloparrafo omnes-medium">Plan Europa: Ideal si optas por viajar al continente europeo ya que cuenta inclusive con los requisitos obligatorios requeridos por la Unión Europea. Ofrece una cobertura amplia que cumple con todos los requerimientos para alguien que desee viajar a este continente. Entre las coberturas que ofrece este plan se encuentran las de medicamentos, equipajes, adicionales y por fallecimiento.</li>',
              '<li class=" estiloparrafo omnes-medium">Plan Premium: Es tu  mejor elección si decides tomar viajes largos y a distintas partes del mundo. Su cobertura alta en cuanto medicamentos, equipaje, adicionales y por fallecimiento lo hace la opción perfecta para sentirse seguro y disfrutar de tu viaje en compañía de tus seres queridos sin preocupaciones. Este plan también cumple con los requisitos de seguro exigidos por la Unión Europea.</li>',
            ],
          },
          {
            id: "collapse-9",
            preg:
              "¿Puedo contratar un seguro de viaje anual? (plan de viajero frecuente)",
            resp: [
              '<p class="parrafo omnes-medium ">Claro, puedes contratar un <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> de hasta 365 días llamado “plan viajero frecuente”.</p>',
            ],
          },
        ],
        "Cómo comprar Viaje Seguro": [
          {
            id: "collapse-1",
            preg: "¿Cómo puedo comprar Viaje Seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">Debes ingresar al siguiente link: https://www.interseguro.com.pe/viajes/</p>',
              '<p class="parrafo omnes-medium ">Y luego seguir los tres pasos mostrados a continuación para proceder a adquirir el seguro en menos de 5 minutos:</p>',
            ],
          },
          {
            id: "collapse-2",
            preg: "¿Quién puede comprar el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">El <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> de Interseguro debe ser comprado por un adulto entre 18 y 80 años cumplidos. se puede sumar hasta 8 personas más al <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link>, incluyendo adultos y niños.</p>',
              '<p class="parrafo omnes-medium ">En el caso de de realizar un viaje, es decir, de 30 días o menos, los adultos adicionales deben tener entre 18 y 85 años. Para viajes de 31 días o más, los pasajeros adultos adicionales deben tener entre 18 y 65 años cumplidos.</p>',
            ],
          },
          {
            id: "collapse-3",
            preg: "¿Cuántos días como mínimo se puede solicitar el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">Puedes solicitar tu seguro por un plazo mínimo de dos (2) días hasta un máximo de 365 días.</p>',
            ],
          },
          {
            id: "collapse-4",
            preg: "¿Cuál es la edad mínima y/o máxima para comprar el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">La edad mínima de titular (entiéndase por titular la persona que adquiere el seguro) debe ser de 18 años y la edad máxima debe ser 80 años.</p>',
            ],
          },
          {
            id: "collapse-5",
            preg:
              "¿Cuáles son los medios de pago aceptados para la compra de Viaje Seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">Puedes pagar tu <router-link tag="a" to="/"><Strong>seguro de viajes</Strong></router-link> VIAJE SEGURO con cualquier tipo de tarjeta (Visa, MasterCard, American Express, Diners) sea crédito o débito. El pago se realiza a través de la pasarela de pagos de Culqui (Sistema rápido y 100% seguro de pagos por internet . Tan pronto finalices el pago Interseguro enviará el certificado de tu seguro a tu correo electrónico.</p>',
            ],
          },
          {
            id: "collapse-6",
            preg:
              "¿Tengo algún beneficio adicional por comprar un seguro de Viaje Seguro?",
            resp: [
              '<p class="parrafo omnes-medium "><router-link tag="a" to="/"><Strong>Viaje seguro</Strong></router-link> de Interseguro te da un programa exclusivo de beneficios, Mundo Beneficios. Podrás hacer uso de estos beneficios a partir de 15 días después de la compra de tu seguro hasta la fecha de vencimiento del mismo. Para mayor detalle de qué incluye el programa, entra a: https://www.interseguro.com.pe/mundobeneficios</p>',
            ],
          },
        ],
        "Cobertura de Viaje Seguro": [
          {
            id: "collapse-1",
            preg: "¿Qué cubre el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">Existen cuatro (4) grupos de coberturas incluidas en Viaje Seguro:</p>',
              '<li class=" estiloparrafo omnes-medium">Cobertura de vida: Fallecimiento accidental</li>',
              '<li class=" estiloparrafo omnes-medium">Asistencia de equipaje: Localización y rastreo de equipaje, compensación por demora de equipaje en línea aérea, compensación por pérdida de equipaje en línea aérea.</li>',
              '<li class=" estiloparrafo omnes-medium">Asistencia médica: Asistencia médica en caso de accidente o enfermedad, medicamentos recetados, emergencia dental, traslado sanitario/ repatriación sanitaria, repatriación funeraria, cobertura por deportes amateur, gastos de hotel por convalecencia.</li>',
              '<li class=" estiloparrafo omnes-medium">Otras asistencias: Compensación por vuelo demorado o cancelado, traslado y hospedaje de familiar por hospitalización, transmisión de mensajes urgentes, asistencia concierge.</li>',
              '<p class="parrafo omnes-medium ">Para mayor detalle sobre las coberturas, por favor visita la sección de condiciones generales: https://www.interseguro.com.pe/Archivo/download/1031/CG-Accidental-Modular-Viaje-Seguro</p>',
            ],
          },
          {
            id: "collapse-2",
            preg: "¿Dónde cubre el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">El seguro aplica cobertura en los países incluidos dentro del plan elegido, desde el momento en el que te encuentres en el país de destino hasta el momento de retorno. Siempre y cuando no caigan en ninguna de las exclusiones estipuladas en la sección de coberturas y exclusiones.</p> ',
            ],
          },
          {
            id: "collapse-3",
            preg: "¿A partir de qué momento y hasta cuándo me cubre el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">El seguro aplica desde el momento que llegas al país o primer país de varios países visitados, hasta el momento de retorno de tu viaje a tu país de origen.</p>',
            ],
          },
          {
            id: "collapse-4",
            preg: "¿El seguro cubre a mis acompañantes?",
            resp: [
              '<p class="parrafo omnes-medium ">El seguro solo te cubrirá a ti, que eres el beneficiario. Para que algún acompañante tuyo esté asegurado es necesario que cuente con su seguro propio.</p>',
            ],
          },
          {
            id: "collapse-5",
            preg:
              "¿Hay una edad mínima y/o máxima para que me cubra el seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">La edad mínima de cobertura es a partir de los 18 años hasta los 85 años.</p>',
            ],
          },
          {
            id: "collapse-6",
            preg: "¿Interseguro cubre en todos los países?",
            resp: [
              '<p class="parrafo omnes-medium ">Interseguro cubre en todos los países a excepción de:</p>',
              '<p class="parrafo omnes-medium ">Imagen imagen_paises_noincluidos.png.</p>',
            ],
          },
          {
            id: "collapse-7",
            preg: "¿Puedo usar Viaje Seguro para ir a la Unión Europea?",
            resp: [
              '<p class="parrafo omnes-medium ">Claro, el Plan Europa incluye todos los países que están considerados dentro de la Unión Europea:Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, Reino Unido, República Checa, Rumanía, Suecia.</p>',
            ],
          },
          {
            id: "collapse-8",
            preg:
              '¿Qué países están incluidos en el destino “América Latina y Caribe"?',
            resp: [
              '<p class="parrafo omnes-medium ">Imagen america_latina.png.</p>',
            ],
          },
          {
            id: "collapse-9",
            preg: "¿A qué se refieren con destino “Multidestino”?",
            resp: [
              '<p class="parrafo omnes-medium ">Se selecciona esta opción cuando deseas visitar más de un Continente, ya que es necesario contar con un seguro que lo cubra en cada uno de los países que visitarás durante su(s) viaje(s).</p>',
            ],
          },
          {
            id: "collapse-10",
            preg:
              "¿El seguro me cubre si aún no parto al país de destino pero ya me encuentro en las fechas activas del seguro?",
            resp: [
              '<p class="parrafo omnes-medium ">No, el seguro te cubre dentro de las fechas activas de la póliza y, a su vez, cuando ya te encuentras en el país de destino. A excepción de inconvenientes directos con la aerolínea.</p>',
            ],
          },
          {
            id: "collapse-11",
            preg: "¿A qué se le consideran accidentes?",
            resp: [
              '<p class="parrafo omnes-medium ">Para efectos de la póliza, se considera accidente todo suceso imprevisto, involuntario, repentino y fortuito, causado por factores externos, que afecte al organismo de Asegurado, ocasionándole una o más lesiones que se manifiesten por contusiones o heridas visibles así como lesiones internas o inmersión revelados por los exámenes correspondientes.</p>',
            ],
          },
          {
            id: "collapse-12",
            preg: "¿Qué se define como factor externo?",
            resp: [
              '<p class="parrafo omnes-medium ">Es aquel fallecimiento producido por la acción imprevista, violenta, fortuita y/u ocasional, de un factor externo, y tiene efecto inmediato sobre el asegurado independientemente de su voluntad y que pueda ser determinada por los médicos.</p>',
            ],
          },
          {
            id: "collapse-13",
            preg:
              "¿A qué se le considera una enfermedad o condición médica preexistente?",
            resp: [
              '<p class="parrafo omnes-medium ">Es la condición si es que tuvieras una enfermedad o una condición médica antes del inicio de la vigencia de tu seguro, puede ser de dos tipos:</p>',
              '<li class=" estiloparrafo omnes-medium">Preexistencia conocida: Ya tienes conciencia de haberte tratado médicamente de alguna forma. Ejm: Extirpación del apéndice antes de adquirir la póliza, padecimiento de enfermedad al corazón en la adolescencia, etc.</li>',
              '<li class=" estiloparrafo omnes-medium">Preexistencia oculta/ asintomática: Es aquella enfermedad que desconocias que padecias al momento de tomar la póliza. Ejm: Cáncer, diabetes, hipertensión, etc.</li>',
            ],
          },
          {
            id: "collapse-14",
            preg: "¿Qué es la repatriación/traslado sanitario?",
            resp: [
              '<p class="parrafo omnes-medium ">Se entiende por repatriación sanitaria el traslado del Beneficiario enfermo o accidentado desde el lugar en donde se encuentra hasta el aeropuerto de ingreso del país de residencia habitual y en el que debió ser emitido el voucher. En este caso sería desde cualquier país del mundo hasta el aeropuerto internacional Jorge Chávez.</p>',
            ],
          },
          {
            id: "15",
            preg:
              "¿Cuáles son los deportes amateur considerados dentro del seguro de viaje?",
            resp: [
              '<p class="parrafo omnes-medium ">En cuanto a deportes, el seguro te proporciona la cobertura de:</p>',
              '<li class=" estiloparrafo omnes-medium">Deportes ecuestres</li>',
              '<li class=" estiloparrafo omnes-medium">Deportes de nieve</li>',
              '<li class=" estiloparrafo omnes-medium">Deportes de equipo</li>',
              '<li class=" estiloparrafo omnes-medium">Deportes de invierno</li>',
              '<li class=" estiloparrafo omnes-medium">Deportes de fuerza</li>',
              '<li class=" estiloparrafo omnes-medium">Deportes acuáticos</li>',
              '<li class=" estiloparrafo omnes-medium">Artes marciales</li>',
              '<li class=" estiloparrafo omnes-medium">Campeonatos de tiro</li>',
              '<li class=" estiloparrafo omnes-medium">Esquí</li>',
              '<li class=" estiloparrafo omnes-medium">Surf</li>',
              '<li class=" estiloparrafo omnes-medium">Kitesurf recreativa</li>',
              '<li class=" estiloparrafo omnes-medium">Natación</li>',
              '<li class=" estiloparrafo omnes-medium">Patinaje</li>',
              '<li class=" estiloparrafo omnes-medium">Snowboard</li>',
            ],
          },
          {
            id: "collapse-16",
            preg: "Atletas profesionales",
            resp: [
              '<p class="parrafo omnes-medium ">Esta cobertura también se aplica a los atletas profesionales cuando son miembros de una federación, sólo en los casos de accidentes causados por la práctica de deportes de invierno en las pistas autorizadas.</p>',
            ],
          },
          {
            id: "collapse-17",
            preg:
              "¿Cuándo aplica el gasto de vuelo demorado o cancelado y qué cubre?",
            resp: [
              '<p class="parrafo omnes-medium ">Aplica si el vuelo del beneficiario estuviese demorado por más de 6 horas consecutivas a la programada originalmente y cuando no exista otra alternativa de transporte. Se reintegrará hasta el tope de cobertura en gastos de hotel, comidas y comunicaciones durante el periodo de espera.</p>',
            ],
          },
          {
            id: "collapse-18",
            preg: "¿A qué se le considera fallecimiento accidental?",
            resp: [
              '<p class="parrafo omnes-medium ">Es aquel fallecimiento producido por la acción imprevista, violenta, fortuita y/u ocasional, de un factor externo, que obra súbitamente sobre el Asegurado independientemente de su voluntad y que pueda ser determinada por los médicos.</p>',
            ],
          },
        ],
        "Modificación de Viaje Seguro": [
          {
            id: "collapse-1",
            preg:
              "¿Puedo extender mi cobertura si estoy de viaje por más tiempo?",
            resp: [
              '<p class="parrafo omnes-medium ">En caso se prolongue tu viaje en forma imprevista, deberás solicitar a Interseguro la emisión de una nueva póliza de Viaje Seguro a través de la web: <router-link tag="a" to="/"><Strong>https://www.interseguro.pe/viajes.</Strong></router-link></p>',
              '<p class="parrafo omnes-medium ">El nuevo plan de su <router-link tag="a" to="/"><Strong>seguro de viajes</Strong></router-link> y su correspondiente voucher correspondiente emitido en las condiciones referidas en esta cláusula no podrá ser utilizado bajo ningún concepto, para iniciar o continuar el tratamiento y/o asistencia de problemas que ya hubieran surgido durante la vigencia del primer voucher original y/o anteriores o antes de la vigencia del nuevo plan y/o voucher, independientemente de que las gestiones o tratamientos en curso hayan sido autorizados por Interseguro o por terceros. Toda asistencia médica tratada durante la vigencia del primer voucher pasará automáticamente a ser considerada como preexistencia durante la vigencia del segundo voucher y por lo tanto no será asumida por Interseguro. En caso de que se presente la solicitud ya habiendo terminado la vigencia del voucher inicial o el pasajero ya se encuentre por fuera de su país de origen al momento de la contratación, la renovación será expedida con 5 (cinco) días de carencia, únicamente tras haber recibido la agencia emisora/operadora turística y demás, autorización expresa de la Central de Servicios de Asistencia.</p>',
            ],
          },
          {
            id: "collapse-2",
            preg:
              "¿Cómo anulo mi póliza y cuánto tiempo tengo para realizarlo?",
            resp: [
              '<p class="parrafo omnes-medium ">Se puede solicitar la anulación de la póliza hasta los quince (15) días, desde la recepción de la solicitud/certificado por parte del asegurado sin necesidad de expresión de causa ni penalidad alguna. Para ello el cliente tiene que presentar una comunicación escrita junto con la copia del documento de identidad (DNI) en alguna de las plataformas de Atención al Cliente. Posterior a ello, la Compañía devolverá la prima recibida en un plazo de treinta (30) días contados desde el día siguiente de recibida la solicitud.</p>',
            ],
          },
        ],
        "Utilización del Seguro": [
          {
            id: "collapse-1",
            preg: "¿Qué hacer en caso de Emergencias?",
            resp: [
              '<p class="parrafo omnes-medium ">En caso necesites usar tu <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> durante por alguna emergencia durante tu viaje puedes reportar la emergencia dentro de las 24 horas de haber sucedido a:</p>',
              '<p class="parrafo omnes-medium ">Recuerda que siempre es tu obligación como titular del <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> y llamar para reportar la emergencia dentro de las 24 horas de ocurrido el evento. En el caso que el titular no pueda reportar la emergencia del <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> hacerlo personalmente, podrá hacerlo cualquier acompañante, amigo o familiar.</p>',
              '<p class="parrafo omnes-medium ">En caso que se cobrará la llamada a la Central de Asistencia, Interseguro le reembolsará al Titular del <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> el costo de la llamada. Para ello, el titular deberá presentar el comprobante o factura por el pago de dicha llamada donde esté reflejado el cobro a los teléfonos indicados en el voucher de asistencia.</p>',
              '<li class=" estiloparrafo omnes-medium">Para la cancelación del Viaje por Accidente, Muerte o Enfermedad el plazo para dar aviso de la ocurrencia del siniestro es de tres (3) días desde la ocurrencia del accidente, enfermedad de carácter súbito o fallecimiento.</li>',
            ],
          },
          {
            id: "collapse-2",
            preg: "¿Qué es la Central de Atención al Cliente?",
            resp: [
              '<p class="parrafo omnes-medium">Es la central encargada de atender cualquier consulta que puedas tener respecto a tu seguro viaje, así como una respuesta ante accidentes o emergencias.</p>',
              '<p class="parrafo omnes-medium">Para contactar con la Central de Asistencia deberás comunicarte a los siguientes números:</p>',
              '<li class=" estiloparrafo omnes-medium">(01) 500-0000 0-801-00165 (Provincias)</li>',
              '<p class="parrafo omnes-medium">O al correo</p>',
              '<li class=" estiloparrafo omnes-medium">servicios@interseguro.com.pe</li>',
              '<p class="parrafo omnes-medium">*Es importante recalcar que para asistencia de viaje, se deberán recurrir a los números descritos en la sección “asistencia de viaje”.</p>',
            ],
          },
          {
            id: "collapse-3",
            preg: "¿A partir de cuándo puedo hacer uso de las asistencias?",
            resp: [
              '<p class="parrafo omnes-medium ">A partir del momento de la fecha de vigencia del seguro podrás hacer uso de las asistencias.</p>',
            ],
          },
          {
            id: "collapse-4",
            preg:
              "¿Puedo solicitar el seguro si viajo por motivos no turísticos?",
            resp: [
              '<p class="parrafo omnes-medium ">El propósito de tu viaje tendrá que ser turístico. En ningún momento podrá garantizar a personas que ejerzan una actividad profesional en el exterior. Si el motivo del viaje del Beneficiario fuese la ejecución de trabajos o tareas que involucren un riesgo profesional, por realizar tareas de alta especialización en donde se exponga la vida, se esté expuesto a:</p>',
              '<li class=" estiloparrafo omnes-medium">Sustancias peligrosas</li>',
              '<li class=" estiloparrafo omnes-medium">Manejo de maquinarias pesadas o que funcionan con gases</li>',
              '<li class=" estiloparrafo omnes-medium">Presión de aire o fluidos hidroneumáticos, que requieran habilidades físicas especiales</li>',
              '<p class="parrafo omnes-medium ">o donde se vea expuesto a peligro y como consecuencia de ello sufra un accidente o una enfermedad consecuencial, Interseguro quedará eximido de toda responsabilidad de prestar sus servicios o asumir costos que se deriven de tales circunstancias, y en estos casos será obligación patronal de asumirlos a través de su plan de responsabilidad de riesgos profesionales.</p>',
            ],
          },
        ],
        Trámites: [
          {
            id: "collapse-1",
            preg:
              "¿Cuál es el lapso de tiempo en el que pueden ser obtenidos los beneficios indicados en el voucher?",
            resp: [
              '<p class="parrafo omnes-medium ">Se entiende por período de validez al lapso de tiempo durante el cual que pueden ser obtenidos los beneficios indicados en el voucher, que es el que transcurre desde las 00:00 horas de la fecha de salida al exterior del país de residencia permanente, hasta las 23:59 horas de la fecha de regreso al mismo indicadas en el voucher.</p>',
            ],
          },
          {
            id: "collapse-2",
            preg:
              "¿Cuáles son los documentos que debe presentar el asegurado por extravío de equipaje que estaba bajo supervisión de una aerolínea?",
            resp: [
              '<p class="parrafo omnes-medium ">El beneficiario debe presentar el Formulario P.I.R (Property Irregularity Report) y copia original del recibo de la indemnización de la línea aérea.</p>',
            ],
          },
          {
            id: "collapse-3",
            preg: "¿Cómo solicitar la cobertura de Fallecimiento accidental?",
            resp: [
              '<p class="parrafo omnes-medium ">En el caso que el Asegurado principal fallezca durante el viaje bajo la cobertura de Viaje Seguro, el(los) Beneficiario(s) deberán comunicar por escrito a Interseguro dentro de los 7 días siguientes a la fecha que se tenga conocimiento de la ocurrencia, según corresponda, en los Centros de Atención al Cliente de La Compañía.</p>',
              '<p class="parrafo omnes-medium ">Para solicitar la cobertura, el(los) Beneficiario(s) deberá(n) presentar la siguiente documentación:</p>',
              '<li class=" estiloparrafo omnes-medium">Carta simple dirigida a La Compañía solicitando el pago de la suma asegurada.</li>',
              '<li class=" estiloparrafo omnes-medium">Original o copia legalizada del Acta o Partida de Defunción del Asegurado.</li>',
              '<li class=" estiloparrafo omnes-medium">Copia simple del Documento de Identidad de cada Beneficiario, o partida de nacimiento según sea el caso.</li>',
              '<li class=" estiloparrafo omnes-medium">Original o copia legalizada de documento en que se designa al tutor o curador del Beneficiario, según corresponda.</li>',
              '<li class=" estiloparrafo omnes-medium">Original o copia legalizada del Certificado médico de defunción, en formato oficial completo.</li>',
              '<li class=" estiloparrafo omnes-medium">Original de la denuncia policial.</li>',
              '<li class=" estiloparrafo omnes-medium">Original o copia legalizada del Atestado policial completo o carpeta fiscal con las conclusiones de investigación del caso, según corresponda.</li>',
              '<li class=" estiloparrafo omnes-medium">Original o copia legalizada del Certificado y/o Protocolo de Necropsia completo, según corresponda.</li>',
              '<li class=" estiloparrafo omnes-medium">Original o copia legalizada del Resultado del examen de Dosaje Etílico, según corresponda.</li>',
              '<li class=" estiloparrafo omnes-medium">Original o copia legalizada del Resultado del examen Toxicológico y de Alcoholemia emitido por el Instituto de Medicina Legal, según corresponda.</li>',
              '<p class="parrafo omnes-medium ">Al Fallecimiento Accidental, el (los) beneficiario(s), acreditando su calidad de tales, mediante la presentación del documento indicado en el literal c), podrán exigir el pago de las Sumas Aseguradas presentando los documentos indicados, previa evaluación de los mismos.</p>',
              '<p class="parrafo omnes-medium ">De requerir La Compañía aclaraciones o precisiones adicionales respecto de la documentación e información presentada por el(los) Beneficiario(s), deberá solicitarlas dentro de los primeros veinte (20) días del plazo de treinta (30) días calendario con los que cuenta la Compañía para consentir el siniestro, lo que suspenderá el plazo para la evaluación del siniestro hasta que se presente la documentación e información solicitada.</p>',
              '<p class="parrafo omnes-medium ">En la presente póliza, entiéndase que la “copia legalizada” hace referencia a la certificación de reproducción notarial, de conformidad con el Artículo N° 110 del Decreto Legislativo N° 1049.</p>',
              '<p class="parrafo omnes-medium ">Cabe precisar que La Compañía no aplicará el derecho de reducción establecido en el Artículo N° 70 de la Ley de Contrato de Seguro, Ley N° 29946.</p>',
              '<p class="parrafo omnes-medium ">Las acciones fundadas en el contrato de seguro prescriben en el plazo de 10 años desde que ocurrió el siniestro. En caso de la cobertura de fallecimiento accidental, el plazo de prescripción para el beneficiario se computa desde que este tome conocimiento de la existencia del beneficio.</p>',
              '<p class="parrafo omnes-medium ">Cotiza de tu <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> <router-link tag="a" to="/"><Strong>Viajes Seguro</Strong></router-link> con Interseguro desde US$ 2 por día y disfruta de tu viaje sin preocupaciones.</p>',
            ],
          },
        ],
        "Sobre COVID-19 ": [
          {
            id: "collapse-1",
            preg:
              "¿Qué puedo hacer si me quedé en el extranjero y no puedo volver por el cierre de fronteras?",
            resp: [
              '<p class="parrafo omnes-medium ">Debido a la pandemia del COVID-19, muchos países han cerrado sus fronteras para frenar la curva de crecimiento de contagios. Para que puedas seguir protegido mientras estés en el extranjero, te recomendamos extender tu cobertura de <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> por el periodo que tengas que permanecer en el país en el que te encuentras. Puedes cotizar tu nuevo <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> <router-link tag="a" to="/">aquí</router-link>.</p>',
            ],
          },
          {
            id: "collapse-2",
            preg:
              "¿Puedo usar la asistencia de “Compensación por vuelo demorado o cancelado” si me quedé en el extranjero y la aerolínea me canceló el vuelo?",
            resp: [
              ' <p class="parrafo omnes-medium ">Si viajaste con tu Seguro de Viaje Interseguro activo, puedes llamar a la Central de Emergencias para solicitar la activación de la asistencia “Compensación por vuelo demorado o cancelado”.</p>',
            ],
          },
          {
            id: "collapse-3",
            preg:
              "¿Qué puedo hacer con mi seguro de viaje si la aerolínea canceló mi viaje antes de viajar por el Coronavirus (COVID-19)?",
            resp: [
              '<p class="parrafo omnes-medium ">Si la aerolínea canceló tu vuelo por el <strong>COVID-19</strong> y no había iniciado todavía, podemos modificar la vigencia de <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link>. En caso hayas reprogramado las fechas de tu viaje, con la misma duración, podemos modificar las fechas de viaje de tu <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link>.</p>',
              '<p class="parrafo omnes-medium ">En el caso que no hayas reprogramado tu viaje todavía, pero quieres mantener el <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> con Interseguro, podemos dejar la vigencia de tu póliza de <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> abierto hasta que lo vuelvas a planificar.</p>',
              '<p class="parrafo omnes-medium ">Te puedes contactar con nuestra Central de Atención al Cliente al 01 500 0000.</p>',
            ],
          },
          {
            id: "collapse-4",
            preg:
              "¿Qué puedo hacer con mi seguro de viaje si no pude viajar por el Coronavirus (COVID-19)?",
            resp: [
              '<p class="parrafo omnes-medium ">Si tu viaje aún no ha iniciado y ya tienes las fechas nuevas de tu viaje, contáctate con nuestra Central de Atención al Cliente al +51 500 0000 para modificar las fechas de tu <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link>. Si la fecha de tu viaje ya pasó, puedes solicitar la anulación de tu <router-link tag="a" to="/"><Strong>seguro de viaje</Strong></router-link> y te devolveremos el 100% de tu prima, sin penalidades.</p>',
            ],
          },
          {
            id: "collapse-5",
            preg:
              "¿El seguro de viaje me cubrirá los gastos médicos si contraigo el Coronavirus (COVID-19)?",
            resp: [
              '<p class="parrafo omnes-medium ">En caso de presentar algunos de los síntomas del <strong>COVID-19</strong>, te debes contactar inmediatamente con la Central de Emergencias al +1 954 370 0060 y pedir orientación médica para que te pueda derivar a algún centro médico y puedan diagnosticar la enfermedad.</p>',
            ],
          },
          {
            id: "collapse-6",
            preg: "¿Cuáles son los síntomas del COVID-19 (Coronavirus)?",
            resp: [
              ' <p class="parrafo omnes-medium ">Te detallamos los síntomas del COVID-19, la gripe y un resfrío. Si estás de viaje en el extranjero y presentas alguno de los síntomas, ponte en contacto con nuestra Central de Emergencias al +1 954 370 060 de inmediato para que te puedan atender.</p>',
            ],
          },
        ],
      },
    }
  }
}
</script>

<style>

</style>
