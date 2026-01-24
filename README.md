# 🎨 Portafolio - Conectado con GitHub API

> Un portafolio dinámico que se conecta con GitHub para mostrar tus repositorios en tiempo real

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Production%20Ready-success)

---

## ✨ Características

### 🚀 Dinámico
- **Carga automática** de tus repositorios desde GitHub API
- **Datos en tiempo real** sin necesidad de editar código
- **Actualización automática** cada vez que cargas

### 📊 Estadísticas
- 📈 Lenguajes únicos usados
- ⭐ Total de stars en tus proyectos
- 👥 Followers desde tu perfil
- 📦 Repositorios públicos

### 🎨 Diseño
- **Moderno** con gradientes y efectos
- **Responsive** en móvil y desktop
- **Tema oscuro** premium
- **Animaciones** suaves

### 🔧 Técnico
- **TypeScript** con interfaces tipadas
- **Vite** para build rápido
- **Tailwind CSS** para estilos
- **GitHub API** integrada

---

## 🎯 Requisitos Previos

- Node.js 18+
- npm o yarn
- Cuenta en GitHub (con al menos 1 repositorio público)

---

## 🚀 Quick Start

### 1. Cambiar Usuario de GitHub
```
Archivo: src/main.ts
Línea 4:

Cambio: const GITHUB_USERNAME = 'kvnzl';
Por:    const GITHUB_USERNAME = 'tu-usuario';
```

### 2. Cambiar Email
```
Archivo: index.html
Busca: mailto:tu-email@ejemplo.com
Por:   mailto:tu-email-real@gmail.com
```

### 3. Actualizar Redes Sociales
```
Archivo: index.html
Actualiza URLs:
- GitHub: https://github.com/tu-usuario
- LinkedIn: https://linkedin.com/in/tu-usuario
- Twitter: https://twitter.com/tu-usuario
```

### 4. Instalar y Probar
```bash
# Instalar dependencias
npm install

# Ver en desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## 📊 Datos que Carga

### De tu Perfil
```javascript
✓ followers (número de seguidores)
✓ public_repos (repositorios públicos)
✓ name (tu nombre)
✓ avatar_url (tu foto)
```

### De tus Repositorios
```javascript
✓ name (nombre del proyecto)
✓ description (descripción)
✓ language (lenguaje: TypeScript, etc)
✓ stargazers_count (⭐ stars)
✓ topics (tags del repositorio)
✓ homepage (URL de demo)
✓ html_url (URL de GitHub)
```

---

## 🛠️ Comandos

```bash
# Desarrollo
npm run dev
# → http://localhost:5173

# Compilar
npm run build
# → Carpeta /dist

# Previsualizar compilado
npm run preview

# Build + Preview
npm run preview
```

---

## 📦 Stack Técnico

- **Frontend Framework**: Vanilla JavaScript + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API**: GitHub REST API
- **Type Safety**: TypeScript

---

## 📁 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── main.ts           # Lógica de GitHub + eventos
│   └── style.css         # Estilos base
├── public/               # Archivos estáticos
├── index.html            # HTML principal
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración de TypeScript
├── package.json          # Dependencias
└── dist/                 # Output compilado (producción)
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Sube la carpeta /dist a tu repositorio
# Habilita GitHub Pages en Settings > Pages
```

---

## ⚙️ Configuración Avanzada

### Cambiar cantidad de proyectos
En `src/main.ts`, busca:
```typescript
per_page=9    // ← Cambiar este número
```

### Cambiar orden de proyectos
En `src/main.ts`, busca:
```typescript
sort=updated  // Cambia por: sort=stars
```

### Personalizar colores de lenguajes
En `src/main.ts`, busca `langColors` y personaliza

---

## 📊 Performance

```
Build size:     13.76 KB (HTML)
Gzip size:      4.19 KB
JavaScript:     6.29 KB
CSS:            29.81 KB
Build time:     208ms
```

---

## 🔒 Seguridad

- ✅ No requiere autenticación
- ✅ Solo usa GitHub API pública
- ✅ Límite: 60 requests/hora
- ✅ No almacena datos sensibles

---

## 📚 Documentación

- **[START_HERE.md](START_HERE.md)** - Comienza aquí
- **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - 5 pasos en 5 minutos
- **[CONFIGURACION.md](CONFIGURACION.md)** - Guía completa
- **[EJEMPLOS.md](EJEMPLOS.md)** - Casos de uso
- **[README_FINAL.md](README_FINAL.md)** - Resumen completo

---

## ❓ FAQ

**P: ¿Necesito saber programar?**
R: No. Solo cambiar 3 valores.

**P: ¿Se actualiza automáticamente?**
R: Sí, cada vez que cargas el portafolio.

**P: ¿Funciona sin internet?**
R: No, necesita conexión a GitHub API.

**P: ¿Puedo cambiar el diseño?**
R: Sí, está hecho con Tailwind CSS.

**P: ¿Es gratis deployar?**
R: Sí, Vercel y Netlify son gratuitos.

---

## 🐛 Solución de Problemas

**"No se cargan los proyectos"**
→ Verifica el username en `src/main.ts`

**"Error de compilación"**
→ Ejecuta `npm install`

**"Datos no aparecen"**
→ Abre F12 y revisa la consola

---

## 📝 Licencia

MIT - Libre para usar y modificar

---

## 🤝 Contribuir

¿Tienes mejoras? ¡Aporta!

---

## 📞 Soporte

Para dudas o problemas, lee la documentación incluida en el proyecto.

---

## 🎉 Agradecimientos

- GitHub API por la data
- Vite por el build tool
- Tailwind CSS por los estilos

---

## 🎯 Versión Actual

**v2.0** - Completamente conectado con GitHub API ✨

---

```
╔════════════════════════════════════════════════════════════════╗
║           Portafolio Dinámico con GitHub API v2.0            ║
║                                                                ║
║              ¡Listo para mostrar tu trabajo! 🚀               ║
╚════════════════════════════════════════════════════════════════╝
```

---

## 📍 Links Útiles

- [GitHub API Docs](https://docs.github.com/en/rest)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

---

**¿Listo para empezar? Abre [START_HERE.md](START_HERE.md) 🚀**
