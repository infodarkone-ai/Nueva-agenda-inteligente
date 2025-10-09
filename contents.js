// --- CONSTANTES Y CONFIGURACIÓN GENERAL ---
const CALENDAR_LOCATION = 'DARK ONE / TATUAJES & PIERCINGS';
const TATUAJE_CALENDAR_SRC = 'Citas WEBTatuajes';
const PIERCING_CALENDAR_SRC = 'Citas WEBPiercing';
const TIMEZONE_CTZ = 'America/Santiago';
const REMINDER_MINUTES = 180;
const CUIDADOS_URL = 'https://darkone.cl/cuidados/';

// ** URL de Reseñas ACTUALIZADA **
const REVIEWS_URL = 'https://g.page/r/Cag5XmHF8-QOEAE/review'; 

const getFormLink = (url) => url; 

// --- CONSTANTES DE UTILIDAD ---
const TRANSFER_DATA = `
Dark One
77722038-1
Mercado Pago
Cuenta Vista
1035883846
darkonecl@gmail.com
`.trim();

const TEMPLATE_MESSAGE = `
🙂 ¡Perfecto! Para agendar, por favor envíame los siguientes datos.
📝 Copia este mensaje y rellena después de los dos puntos (:)

Nombre: 
Número WhatsApp: 
Correo electrónico:
`.trim();

// ** Mensaje a copiar para la invitación de opiniones **
const REVIEWS_MESSAGE = `Te invitamos a que nos deje tu opinión ⭐⭐⭐⭐⭐ y el enlace ${REVIEWS_URL}`;

// --- ABONOS POR DEFECTO ---
const DEFAULT_ABONOS = {
    'Tratamiento Granuloma': 7500,
    'Piercing': 15000,
    'Piercing Menor de Edad': 15000,
    'Tatuaje': 0, 
    'Reserva de Retoques': 0,
};

// --- DEFINICIÓN DE TEXTOS LARGOS (Mantenidos para Calendar) ---

const PIERCING_DETAILS = `
*INFORMACIÓN ESENCIAL – PIERCING (DARK ONE)*
---
⚠️ *LECTURA Y FORMULARIO OBLIGATORIO:*
Rellene el Formulario exigido por el Ministerio de Salud para piercing aquí: ➡️ ${getFormLink('https://forms.gle/z4opFbEPE3Q5h72B8')}

*RESERVA, PAGO Y CONDICIONES*
Atendemos solo *mayores de 18 años*.
*Abono no reembolsable:* Asegura su reserva (cubre preparación de joyas, material estéril y asesoría).
*Puntualidad:* Si llega tarde, perderá el tiempo asignado. Podría necesitar agendar con *otro abono*.
*Cambios:* Avise con *24 horas* de anticipación.
*Tiempo del procedimiento:* *30 minutos* (contemplar retrasos).
*GiftCard:* Se descontarán *$15.000* del monto como adelanto.

*PREPARACIÓN Y SALUD*
Debe asistir *sin maquillaje, cremas, ni lesiones* en la zona. No aplique maquillaje, bloqueador o cremas en la zona a perforar.
*Coma e hidrátese* antes. *No consuma alcohol ni aspirinas 24 horas antes*.
*Avisar si padece o consume:* Debe notificar si tiene alergias (anestésicos), hemofilia, diabetes, hipertensión, enfermedad autoinmune, o si consume *anticoagulantes* o medicamentos para el *acné*.

*ACOMPAÑANTES Y GARANTÍA*
Los acompañantes esperan *fuera de la sala de procedimientos*.
*No asistir con niños;* por normativa de salud, no pueden ingresar a la sala de procedimientos.
*Garantía y Controles:* Incluye *1 control gratuito* a los *30 días* (aprox.). Si no asiste, *perderá su garantía*.

*RIESGOS Y CUIDADOS POSTERIORES*
Todos los procedimientos tienen *riesgos* (infecciones, queloides, etc.). Estos *aumentan* si:
- No sigue los cuidados indicados (verbalmente y por escrito).
- Toca con manos sucias, no limpia *2 veces al día* (con NeilMed o suero fisiológico).
- Sufre golpes, duerme sobre la joya, o se expone a ambientes inadecuados (saunas, solárium, piscinas).
En caso de complicaciones, *dé aviso inmediato* a Dark One / Santiago Ink y *asista a un centro médico*.

🔗 *CUIDADOS Y GARANTÍA DETALLADOS:* ${CUIDADOS_URL}
Productos de la más alta calidad – DARK ONE / DARK CANDLES & SANTIAGO INK TATUAJES® Desde 2010
`.trim();

const TATUAJE_DETAILS = `
*INFORMACIÓN ESENCIAL – TATUAJES (DARK ONE)*
---
⚠️ *LECTURA Y FORMULARIO OBLIGATORIO:*
Rellene el Formulario exigido por el Ministerio de Salud para tatuajes aquí: ➡️ ${getFormLink('https://forms.gle/ksEmp5LmUzeCKvs39')}

*RESERVA, PAGO Y CONDICIONES*
Atendemos solo *mayores de edad*.
Las citas incluyen tiempo para montaje, revisión y modificaciones parciales de diseño.
*Abonos no reembolsables:* Son para reservar un tiempo específico de trabajo (diseño y asesoría), por lo cual *no tienen devolución*.
*Cambios:* Avísenos hasta con *24 horas* de anticipación.
*Puntualidad:* Si llega tarde, perderá tiempo de su sesión; podría necesitar agendar tiempo extra. *Si no asiste, pierde el abono de la reserva*.
*Procedimientos extras:* Necesitan ser agendados, *abonados* e implican cobros adicionales (materiales, tiempo).
*Reservas con GiftCard:* Se consideran *$25.000* del monto como *abono* de reserva. Aplican todos los puntos de este informativo.

*PREPARACIÓN Y SALUD*
*Preparación:* Use ropa cómoda. Se recomienda llegar con la *zona depilada* para evitar irritaciones.
*Consumo:* *Coma e hidrátese* al menos *2 horas* antes. *NO consuma alcohol ni aspirinas 24 horas antes*.
*Avisar si padece de:* alergias, hemofilia, dermatosis, diabetes, epilepsia, hipertensión o ansiedad.
*Avisar si consume medicamentos* *anticoagulantes* o para *acné*.

*CONSEJOS*
Evite acompañantes.
Para el cuidado de su tatuaje *NO recomendamos bephantol*.

*RIESGOS Y CUIDADOS POSTERIORES*
*Riesgos:* Todos los procedimientos presentan *risgos* (lesiones dérmicas, infecciones, pérdida de color y alergias).
Estos riesgos *aumentan* si:
- No sigue nuestros cuidados (se informarán verbalmente y por escrito en www.darkone.cl).
- Toca con manos sucias, sufre falta de hidratación, o se expone a ambientes inadecuados (saunas, solárium, piscinas).
*Complicaciones:* Debe dar aviso al estudio Dark One / Santiago Ink (Contacto +56932237670) y *asistir a un centro médico o profesional de salud*.

Productos de primera calidad. Veganos y Cruelty Free. DARK ONE es marca registrada de SANTIAGO INK TATUAJES & DARK CANDLES ®. Desde 2010.
`.trim();

const GRANULOMA_DETAILS = `
*INFORMACIÓN ESENCIAL – TRATAMIENTO DE GRANULOMAS (DARK ONE)*
---
⚠️ *LECTURA OBLIGATORIA:*

*RESERVA, PAGO Y TRATAMIENTO*
Atendemos solo *mayores de 18 años*.
Las citas incluyen tiempo para evaluación, preparación y procedimiento.
*Abono no reembolsable:* El *abono* asegura su reserva, cubre la evaluación, asesoría y material estéril. *No tiene devolución*.
*Cambios:* Avise con *24 horas* de anticipación.
*Puntualidad:* Si llega tarde, perderá el tiempo asignado. Podría requerir agendar una nueva cita con *otro abono*.
*Frecuencia y Pago:* Las sesiones se realizan *cada una semana aproximadamente*. Cada sesión se abona por adelantado.
*Duración:* Cada sesión puede durar entre *20 a 40 minutos*.
*Nota importante:* Este es un tratamiento que puede necesitar *1 o más sesiones*. El número de sesiones dependerá del *tamaño*, *tiempo* del granuloma y del *organismo de cada persona*, por lo que *no podemos asegurar la cantidad total de tratamientos* que pueda necesitar.

*PREPARACIÓN Y SALUD*
Debe asistir *sin cremas ni maquillaje* en la zona a tratar.
*Consumo:* *Coma e hidrátese* antes. *No consuma aspirinas 24 horas antes*. Antes de cada tratamiento, es importante no beber alcohol, en especial destilados, 24 horas antes.
*Avisa si padeces de:* alergias a anestésicos, hemofilia, dermatosis, diabetes, epilepsia, hipertensión, ansiedad o enfermedad autoinmune.
*Avisa si consume medicamentos* *anticoagulantes* o para *acné*.

*CONSEJOS Y CUIDADOS POSTERIORES*
Evite acompañantes en la sala de procedimiento.
Todos los procedimientos presentan *riesgos* de reacciones dérmicas o infecciones si *no sigue nuestros cuidados*.
*Cuidados:* Se le informará de los cuidados posteriores verbalmente y los puede encontrar por escrito en nuestra página web. www.darkone.cl
En caso de complicaciones o reacciones adversas, debe dar *aviso inmediato* a Dark One / Santiago Ink y *asistir a un centro médico o profesional de salud*.

Productos de la más alta calidad – DARK ONE / DARK CANDLES & SANTIAGO INK TATUAJES® Desde 2010
`.trim();

const MENOR_EDAD_DETAILS = `
*INFORMACIÓN ESENCIAL – PIERCING MENOR DE EDAD*
---
⚠️ *LECTURA Y DOBLE FORMULARIO OBLIGATORIO:*
Complete *los dos formularios* con los datos del menor, exigidos por el Ministerio de Salud: 
➡️ ${getFormLink('https://forms.gle/AtkD8w2YeDfUWhyW6')} 
➡️ ${getFormLink('https://forms.gle/z4opFbEPE3Q5h72B8')}

*RESERVA, PAGO Y CONDICIONES*
Las citas incluyen tiempo para preparación, revisión de proyectos y selección de joyas.
*Abono no reembolsable:* Asegura su reserva (cubre preparación de joyas y asesoría).
*Puntualidad:* Si llegas tarde, perderás el tiempo asignado. Podría necesitar agendar con *otro abono*.
*Cambios:* Avise con *24 horas* de anticipación.
*Tiempo del procedimiento:* *30 minutos* (contemplar retrasos o complicaciones).
*GiftCard:* Se descontarán *$15.000* del monto como adelanto.

*PREPARACIÓN Y SALUD*
*Informar:* Avise si tiene *alergias, hemofilia, diabetes o síntomas respiratorios* antes de la cita.
*Consumo:* *Come e hidrátate* antes del procedimiento. *No consumas alcohol ni aspirinas 24 horas antes*.
*Zona a perforar:* *No apliques* maquillaje, bloqueador o cremas en la zona.

*TUTOR, ACOMPAÑANTES Y GARANTÍA*
*Acompañante:* El *tutor es el único* que debe acompañar al menor *en todo el proceso* y *revisar que el material esté en buenas condiciones*.
Los demás acompañantes esperan *fuera de la sala de procedimientos*.
*No asistir con otros menores;* por normativa de salud, no pueden ingresar a la sala de procedimientos.
*Controles gratuitos y Garantía:* Incluye *1 control* al *mes* de lunes a viernes. Si no asistes, *perderás tu garantía*.
*Procedimientos adicionales:* Deben agendarse y abonarse por separado o avisar con anticipación.

*CUIDADOS POSTERIORES*
Revisa los *CUIDADOS y condiciones de GARANTÍA* de piercing en 👇🏻 ${CUIDADOS_URL}
Productos de la más alta calidad – DARK ONE / DARK CANDLES & SANTIAGO INK TATUAJES® Desde 2010
`.trim();

const RETOQUES_DETAILS = `
*INFORMACIÓN ESENCIAL – RESERVA DE RETOQUES (DARK ONE)*
---
*RESERVA Y CONDICIONES DE GARANTÍA*
Las citas están destinadas a retoques e incluyen tiempo para montaje.
*Cambios:* Debe avisar hasta con *48 horas* de anticipación. De lo contrario, *perderá la posibilidad de reagendar sin costo*.
*Puntualidad:* Si llega tarde, perderá tiempo de su sesión; podría necesitar reagendar, lo cual tiene un *costo adicional*.
*Si no asiste a su cita, pierde la garantía y la posibilidad de reagendar sin costo*.
*Procedimientos extras:* Cualquier procedimiento adicional al retoque implica *cobros extras* (materiales, tiempo).

*VALORES ADICIONALES (Reagendar y Extras)*
Si desea agregar algo a su tatuaje, avise con anticipación para que sea considerado en el tiempo de su cita.
*Reagendar y Extra para negro* tiene un costo mínimo adicional de *$15.000* que se deposita por adelantado.
*Reagendar y Extra para color* tiene un costo mínimo adicional de *$25.000* que se deposita por adelantado.
*Si no asiste a su cita, pierde el adicional depositado*.

*PREPARACIÓN Y CONSEJOS*
Sea puntual.
Evite acompañantes.
*Preparación:* Se recomienda llegar con la *zona depilada* para evitar irritaciones.
*Consumo:* *Coma e hidrátese* al menos *2 horas* antes. *Evite el consumo de destilados y aspirina 24 horas antes*.
*Ropa:* Asegúrese de usar *ropa cómoda* para el procedimiento.
*Cuidados:* Para el cuidado de su tatuaje *NO recomendamos bephantol*.

*GARANTÍA Y CALIDAD*
Revise los *CUIDADOS y condiciones de GARANTÍA* de nuestros tatuajes en ${CUIDADOS_URL}.
*Productos:* TODOS nuestros productos son de *primera calidad, veganos y cruelty free*.
DARK ONE es una marca registrada y creada por la empresa SANTIAGO INK TATUAJES & DARK CANDLES ®. Desde 2010.
`.trim();

// Objeto que conecta el tipo de servicio con sus detalles
const SERVICE_CONTENT = {
    'Tatuaje': { details: TATUAJE_DETAILS },
    'Piercing': { details: PIERCING_DETAILS },
    'Tratamiento Granuloma': { details: GRANULOMA_DETAILS },
    'Piercing Menor de Edad': { details: MENOR_EDAD_DETAILS },
    'Reserva de Retoques': { details: RETOQUES_DETAILS },
};
