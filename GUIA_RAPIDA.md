# ⚡ GUÍA RÁPIDA - 5 MINUTOS

## Paso 1: Cambiar Usuario de GitHub (1 minuto)

Abre: `src/main.ts`

Línea 4, cambias esto:
```typescript
const GITHUB_USERNAME = 'kvnzl';
```

Por tu usuario. Ejemplo:
```typescript
const GITHUB_USERNAME = 'mi-usuario';
```

✅ Listo

---

## Paso 2: Cambiar Email (1 minuto)

Abre: `index.html`

Busca: `mailto:`

Cambias:
```html
<a href="mailto:tu-email@ejemplo.com">
```

Por tu email:
```html
<a href="mailto:kevin@gmail.com">
```

✅ Listo

---

## Paso 3: Actualizar Redes Sociales (1 minuto)

Abre: `index.html`

Busca la sección de contacto y actualiza:

```html
<!-- GitHub -->
<a href="https://github.com/mi-usuario" ...>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/mi-usuario" ...>

<!-- Twitter -->
<a href="https://twitter.com/mi-usuario" ...>
```

✅ Listo

---

## Paso 4: Probar en Desarrollo (1 minuto)

Terminal:
```bash
npm run dev
```

Abre: `http://localhost:5173`

Verifica que:
- ✅ Carga tus repositorios
- ✅ Muestra tus estadísticas
- ✅ Los links funcionan

✅ Listo

---

## Paso 5: Compilar para Producción (1 minuto)

Terminal:
```bash
npm run build
```

Espera a que termine:
```
✓ built in 208ms
```

Listo para subir a producción ✅

---

## 🎯 ESO ES TODO

Solo 5 pasos, 5 minutos. Tu portafolio está conectado con GitHub y completamente funcional.

---

## 📊 Qué se ve ahora

### Tu Perfil:
- 👥 Followers
- 📦 Repositorios públicos

### Tus Proyectos:
- ⭐ Stars recibidos
- 🏷️ Lenguaje usado
- 📝 Descripción
- 🔖 Topics/tags

### Estadísticas:
- 📈 Lenguajes únicos
- ⭐ Stars totales

---

## 🚀 Opciones de Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
npm run build
# Sube la carpeta /dist a GitHub Pages
```

---

## ⚠️ Si Algo No Funciona

**"No se cargan los proyectos"**
→ Cambia el username en `src/main.ts`

**"Error de compilación"**
→ Ejecuta `npm install`

**"Los datos no aparecen"**
→ Abre F12 (devtools) y revisa la consola

**"Necesito más ayuda"**
→ Lee `README_FINAL.md` o `CONFIGURACION.md`

---

## ✅ HECHO!

Tu portafolio es ahora:
- ✅ Dinámico
- ✅ Conectado a GitHub
- ✅ Con datos reales
- ✅ Listo para producción
- ✅ Profesional

---

**¡A por ello! 🚀**
