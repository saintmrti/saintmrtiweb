// Todo lo que cambia de vez en cuando vive aquí: datos de contacto, redes y formularios.

export const site = {
  nombre: 'Saint-Martín Méndez',
  usuario: 'saintmrti',
  linea: 'Desarrollador web & automatización con IA',
  url: 'https://saintmrti.com',
  portafolio: 'https://work.saintmrti.com',
  correo: 'saintmartindev@gmail.com',
  whatsapp: '525653211904',
  whatsappVisible: '+52 56 5321 1904',
  redes: {
    instagram: 'https://www.instagram.com/saintmrtidev/',
    facebook: 'https://www.facebook.com/saintmrtidev',
    x: 'https://x.com/saintmrti',
    linkedin: 'https://www.linkedin.com/in/saintmartin',
    github: 'https://github.com/saintmrti',
    tiktok: 'https://www.tiktok.com/@saintmrti',
  },
  moneyManager: 'https://moneymanager.saintmrti.com',
  formularios: {
    // Google Form de la lista de espera de la Clase 1. Solo tiene dos preguntas obligatorias
    // (Nombre y Correo). Si se agrega otra obligatoria, Google rechaza el envío sin avisar.
    listaEspera: {
      verForm:
        'https://docs.google.com/forms/d/e/1FAIpQLSdUDVXV_yu62avUz6lHwg7_chELYW5LEJyLvY2bzHSQMKAA7A/viewform',
      formResponse:
        'https://docs.google.com/forms/d/e/1FAIpQLSdUDVXV_yu62avUz6lHwg7_chELYW5LEJyLvY2bzHSQMKAA7A/formResponse',
      // whatsapp y aprender no existen en el formulario; la página solo envía nombre y correo.
      entradas: { nombre: 'entry.1669067578', correo: 'entry.1686189979', whatsapp: '', aprender: '' },
    },
  },
} as const;

/** Enlace de WhatsApp con el mensaje ya escrito. */
export function whatsappUrl(mensaje: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** Verdadero cuando el Google Form de la lista de espera ya está conectado. */
export const listaEsperaConfigurada = Boolean(
  site.formularios.listaEspera.formResponse && site.formularios.listaEspera.entradas.correo,
);
