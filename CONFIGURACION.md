# 📋 Guía de Configuración - Portafolio con GitHub

## ✅ Lo que ya está hecho

Tu portafolio ahora se conecta automáticamente con GitHub y muestra:

✨ **Características nuevas:**
- 📊 **Estadísticas de perfil**: Repositorios públicos, seguidores
- 📈 **Estadísticas de proyectos**: Total de lenguajes usados, stars totales
- 🏷️ **Tags por proyecto**: Muestra los tópicos de cada repositorio
- 🎨 **Mejor diseño**: Tarjetas mejoradas con gradientes y efectos
- 🔗 **Links de redes sociales**: GitHub, LinkedIn, Twitter

---

## ⚙️ Configuración necesaria

### 1. **Editar Usuario de GitHub**
Abre `src/main.ts` y busca:
```typescript
const GITHUB_USERNAME = 'kvnzl'; // ← Reemplaza con tu usuario
```
Cambias `kvnzl` por tu usuario de GitHub real.

### 2. **Editar Email de Contacto**
Abre `index.html` y busca:
```html
<a href="mailto:tu-email@ejemplo.com">
```
Reemplaza `tu-email@ejemplo.com` con tu correo real.

### 3. **Actualizar Links de Redes Sociales**
En `index.html` (sección de contacto), edita:
```html
<!-- GitHub -->
<a href="https://github.com/kvnzl" ...>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/tu-usuario" ...>

<!-- Twitter -->
<a href="https://twitter.com/tu-usuario" ...>
```

### 4. **Información Personal** (opcional)
En `index.html`, puedes editar:
- **Nombre**: "Kevin" en el logo
- **Descripción**: En la sección "Sobre Mí"
- **Años de experiencia**: Si quieres actualizar el número

---

## 🚀 Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

---

## 📊 Qué información trae de GitHub

Tu portafolio **automáticamente** obtiene:

| Datos | Fuente |
|-------|--------|
| Repositorios | API GitHub (últimos 9 actualizados) |
| Descripción | De cada repositorio |
| Stars | ⭐ Contador de cada repo |
| Lenguaje | Lenguaje principal del proyecto |
| Topics | Tags del repositorio |
| Links | Homepage y URL del repo |
| Followers | De tu perfil de GitHub |
| Repositorios públicos | De tu perfil |

---

## 🎯 Tips Útiles

1. **Añadir topics a tus repos**: Esto hace que aparezcan en el portafolio
2. **Escribir buenas descripciones**: Aparecen en las tarjetas de proyectos
3. **Añadir homepage URL**: Muestra botón "Demo" si la tienes
4. **Hacer repos públicos**: Solo se muestran repos públicos
5. **Sort by stars**: Los proyectos se ordenan por popularidad

---

## 🔧 Solución de problemas

### "No se cargan los proyectos"
- ✅ Verifica que el usuario de GitHub sea correcto
- ✅ Verifica que tengas repos públicos
- ✅ Abre la consola (F12) para ver errores

### "No aparecen las estadísticas"
- ✅ Asegúrate que tienes repositorios públicos
- ✅ Los datos se cargan desde la API de GitHub

### "Los links de redes no funcionan"
- ✅ Actualiza las URLs con tus datos reales
- ✅ Usa URLs correctas (ej: https://github.com/tu-usuario)

---

## 📝 Ejemplos

### Configurar tu GitHub
```typescript
const GITHUB_USERNAME = 'tu-username-aqui';
```

### Configurar tu email
```html
<a href="mailto:tu.email@ejemplo.com">
```

### Configurar LinkedIn
```html
<a href="https://linkedin.com/in/tu-nombre" target="_blank">
```

---

¡Tu portafolio está listo! Solo configura los datos personales y déjalo conectado a GitHub. 🚀
