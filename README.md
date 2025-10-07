# 🚀 DARK ONE - Agenda Rápida v3.0

Esta es una herramienta frontend estática diseñada para optimizar y acelerar el proceso de agendamiento de citas para servicios de Tatuajes y Piercings en **DARK ONE / TATUAJES & PIERCINGS**.

La aplicación genera automáticamente el mensaje formateado de **WhatsApp** para el cliente y el enlace directo para crear el **Evento en Google Calendar**, incluyendo todos los detalles del servicio y los textos informativos exigidos por la normativa de salud.

---

## ✨ Características Principales

* **Generación de Mensajes de WhatsApp:** Crea mensajes listos para enviar, incluyendo nombre del cliente, servicio, fecha y hora.
* **Creación de Eventos en Google Calendar:** Genera enlaces directos que pre-llenan un evento en el calendario de Tatuajes o Piercing (según corresponda), incluyendo la ubicación, la zona horaria y, lo más importante, las **condiciones de servicio** (textos largos) para una referencia rápida.
* **Pegado Rápido de Datos:** Permite pegar el texto de la plantilla de auto-relleno de WhatsApp (Nombre, Teléfono, Email) y los extrae automáticamente para rellenar el formulario.
* **Separación de Contenidos:** La lógica principal (JavaScript) y los contenidos estáticos/textos largos se mantienen separados en dos archivos (`index.html` y `content.js`), facilitando el mantenimiento.

---

## 💻 Estructura del Proyecto

El proyecto consta de dos archivos principales en el directorio raíz:

1.  **`index.html`**: Contiene la estructura HTML, el diseño (usando Tailwind CSS) y toda la **lógica** de la aplicación (funciones `generateSummary`, `processPastedData`, etc.).
2.  **`content.js`**: Contiene todas las **variables de configuración y el contenido estático** (textos largos de los servicios, URLs de formularios, datos de transferencia, abonos por defecto). **Este archivo es el que debes editar si necesitas actualizar textos o configuraciones.**

---

## 🔧 Mantenimiento y Edición de Contenidos

Para mantener el proyecto y actualizar la información, solo necesitas editar el archivo **`content.js`**:

| Tarea de Edición | Variable en `content.js` |
| :--- | :--- |
| **Editar Textos Largos** (condiciones, riesgos, etc.) | `PIERCING_DETAILS`, `TATUAJE_DETAILS`, etc. |
| **Actualizar URLs de Formularios** | Busca la función `getFormLink` y las URL pasadas a esta. |
| **Cambiar Abonos por Defecto** | `DEFAULT_ABONOS` |
| **Actualizar Datos de Transferencia** | `TRANSFER_DATA` |
| **Cambiar Calendarios Google** | `TATUAJE_CALENDAR_SRC`, `PIERCING_CALENDAR_SRC` |

> ⚠️ **Nota Importante:** No es necesario modificar el archivo `index.html` a menos que se quiera cambiar la lógica de la aplicación o el diseño visual.

---

## 🚀 Despliegue

Esta aplicación está diseñada para ser desplegada en cualquier servicio de hosting estático, como **GitHub Pages** (recomendado), Vercel o Netlify.

### Despliegue con GitHub Pages

1.  Asegúrate de que los archivos `index.html` y `content.js` estén subidos a la rama principal (`main` o `master`).
2.  Ve a **Settings** > **Pages** en el repositorio.
3.  Selecciona la rama principal (`main` o `master`) y la carpeta raíz (`/(root)`).
4.  Haz clic en **Guardar**.
5.  Tu aplicación estará activa en la URL proporcionada por GitHub en pocos minutos.

---

Desarrollado por **DarkOne Apps**
 
