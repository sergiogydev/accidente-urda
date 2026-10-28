// Revisión editorial MANUAL. Cambiar la fecha solo después de revisar las fuentes.
// Todos los contactos y enlaces de la página se mantienen en este archivo.
export const review = {
  date: "2026-10-28",
  label: "28 de octubre de 2026",
  short: "28 oct 2026",
};

export const navigation = [
  { href: "#asistencia", label: "Teléfonos de ayuda" },
  { href: "#comunicados", label: "Comunicados oficiales" },
  { href: "#servicio", label: "Estado del servicio" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
];

const sources = {
  adif: "https://www.adif.es/viajeros/estado-de-la-red",
  renfe: "https://www.renfe.com/es/es",
  renfePress: "https://grupo.renfe.com/es/es/sala-de-prensa",
  renfeHelp: "https://www.renfe.com/es/es/ayuda/faqs/compra-billetes",
  iryoHelp: "https://iryo.eu/es/atencion-al-cliente",
  civil: "https://www.proteccioncivil.es/",
  region: "https://112.castillalamancha.es/112/comunicacion/gobierno-regional-activa-el-platecam-en-fase-de-emergencia-situacion-operativa-2",
  emergency: "https://www.dgt.es/muevete-con-seguridad/viaja-seguro/consejos-extranjeros/en-caso-de-emergencia/",
};

export const emergency = {
  phone: "112",
  href: "tel:112",
  source: sources.emergency,
  sourceLabel: "Fuente: DGT",
};

export const incident = {
  label: "Accidente ferroviario · Urda, Toledo · 28 de octubre de 2026",
  text: "Adif ha publicado teléfonos de atención a familiares por el accidente de Urda (Toledo). Aquí encontrarás esos contactos y los canales oficiales de información.",
  source: sources.adif,
};

export const contacts = [
  {
    name: "Renfe",
    category: "Atención a familiares",
    phone: "900 10 10 20",
    href: "tel:900101020",
    description: "Línea de atención a familiares habilitada por el accidente de Urda.",
    source: sources.renfe,
    sourceLabel: "Renfe · Aviso sobre Urda",
    note: "Contacto específico del accidente",
  },
  {
    name: "Iryo",
    category: "Atención a familiares",
    phone: "900 001 403",
    href: "tel:900001403",
    description: "Teléfono de atención a familiares de Iryo publicado por Adif para este accidente.",
    source: sources.adif,
    sourceLabel: "Adif · Atención a familiares",
    note: "Contacto específico del accidente",
  },
  {
    name: "Castilla-La Mancha",
    category: "Información a familiares y amigos",
    phone: "900 122 112",
    href: "tel:900122112",
    description: "Línea de información para familiares y amigos de posibles afectados, habilitada por Emergencias.",
    source: sources.region,
    sourceLabel: "112 Castilla-La Mancha · Comunicado",
    note: "Contacto específico del accidente",
  },
];

export const officialLinks = [
  { name: "Renfe", label: "Sala de prensa", description: "Noticias y comunicaciones de la operadora.", href: sources.renfePress, type: "Canal oficial", initials: "R" },
  { name: "Adif", label: "Información sobre el accidente", description: "Aviso de Urda, asistencia y estado de la red.", href: sources.adif, type: "Aviso sobre Urda", initials: "A" },
  { name: "Iryo", label: "Atención e información oficial", description: "Canal de atención de la operadora para consultas.", href: sources.iryoHelp, type: "Canal oficial", initials: "i" },
  { name: "Protección Civil", label: "Portal de Protección Civil", description: "Información pública y recomendaciones oficiales.", href: sources.civil, type: "Canal oficial", initials: "PC" },
  { name: "Gobierno de Castilla-La Mancha", label: "Comunicado de Emergencias 112", description: "Información del dispositivo de atención por el accidente.", href: sources.region, type: "Comunicado sobre Urda", initials: "CLM" },
];

export const serviceLinks = [
  { name: "Estado de la red · Adif", description: "Consulta los avisos de circulación de la infraestructura ferroviaria.", href: sources.adif },
  { name: "Información de viajes · Renfe", description: "Comprueba los avisos de la operadora antes de desplazarte.", href: sources.renfe },
  { name: "Atención al viajero · Iryo", description: "Consulta tu viaje y las opciones disponibles con la compañía.", href: sources.iryoHelp },
];

export const faqs = [
  {
    question: "¿Dónde puedo solicitar información?",
    answer: "Para información sobre familiares, utiliza las líneas específicas de Renfe, Iryo o Emergencias de Castilla-La Mancha que aparecen en esta página. Si necesitas asistencia inmediata ante una emergencia, llama al 112.",
    links: [{ label: "Ver teléfonos de ayuda", href: "#asistencia" }, { label: "Fuente: Adif", href: sources.adif }],
  },
  {
    question: "¿Cómo puedo saber si mi tren está afectado?",
    answer: "Consulta los avisos de Adif y confirma con la compañía que figura en tu billete la situación de tu tren concreto. Pregunta a la operadora por cancelaciones y alternativas de transporte antes de desplazarte a la estación.",
    links: [{ label: "Consultar Adif", href: sources.adif }, { label: "Consultar Renfe", href: sources.renfe }, { label: "Contactar con Iryo", href: sources.iryoHelp }],
  },
  {
    question: "¿Cómo solicitar un cambio o reembolso?",
    answer: "Contacta con la operadora o con el canal donde compraste el billete y ten a mano el localizador. Consulta qué condiciones se aplican a tu reserva y cómo realizar la gestión. Esta página no confirma reembolsos ni condiciones especiales para billetes concretos.",
    links: [{ label: "Ayuda de Renfe", href: sources.renfeHelp }, { label: "Atención de Iryo", href: sources.iryoHelp }],
  },
  {
    question: "¿Dónde consultar los comunicados oficiales?",
    answer: "En la sección de comunicados encontrarás accesos a Renfe, Adif, Iryo, Protección Civil y el Gobierno de Castilla-La Mancha. Los enlaces distinguen los avisos específicos del accidente de los canales generales de información.",
    links: [{ label: "Ir a comunicados oficiales", href: "#comunicados" }],
  },
];
