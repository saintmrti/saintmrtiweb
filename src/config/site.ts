// Todo lo que cambia de vez en cuando vive aquí: datos de contacto, redes y formularios.

export const site = {
  nombre: 'Saint-Martín Méndez',
  usuario: 'saintmrti',
  linea: 'Desarrollador web & automatización con IA',
  url: 'https://saintmrti.com',
  portafolio: 'https://portafolio.saintmrti.com',
  correo: 'saintmartindev@gmail.com',
  whatsapp: '525653211904',
  whatsappVisible: '+52 56 5321 1904',
  redes: {
    instagram: 'https://www.instagram.com/saintmrtidev/',
    facebook: 'https://www.facebook.com/saintmrtidev',
    x: 'https://x.com/saintmrti',
    linkedin: 'https://www.linkedin.com/in/saintmartin',
    github: 'https://github.com/saintmrti',
    // TODO(Saint): usuario de TikTok. Mientras esté vacío, no se muestra.
    tiktok: '',
  },
  moneyManager: 'https://moneymanager.saintmrti.com',
  formularios: {
    // Google Form actual de clases personalizadas de IA (se conserva en /registro).
    registro:
      'https://docs.google.com/forms/d/e/1FAIpQLSfLllgBoCyVUIVqgEc3-Vx1enRWAGeypMDBCav6FCeWLAuNIw/viewform',
    // TODO(Saint): Google Form NUEVO de lista de espera. Pásame el enlace prellenado para sacar los entry.XXXX.
    listaEspera: {
      verForm: '',
      formResponse: '',
      entradas: { nombre: '', correo: '', whatsapp: '', aprender: '' },
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
