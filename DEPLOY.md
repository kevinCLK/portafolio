# 🚀 Guía de Deploy

Esta guía te ayudará a desplegar tu portafolio en diferentes plataformas.

## 📋 Pre-requisitos

1. ✅ Código compilado sin errores
2. ✅ Cuenta en la plataforma de deploy (Vercel, Netlify, etc.)
3. ✅ Repositorio en GitHub (recomendado)

---

## 🌐 Opción 1: Vercel (Recomendado)

### Método 1: Desde la Web (Más Fácil)

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con GitHub
3. Click en **"Add New Project"**
4. Importa tu repositorio
5. Vercel detectará automáticamente Vite
6. Click en **"Deploy"**
7. ¡Listo! Tu portafolio estará en línea

### Método 2: Desde la Terminal

```bash
# Instalar Vercel CLI
npm install -g vercel

# En la carpeta del proyecto
vercel

# Seguir las instrucciones
# Para producción:
vercel --prod
```

### Configuración Automática

El archivo `vercel.json` ya está configurado con:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Framework: Vite
- ✅ Rewrites para SPA

---

## 🌐 Opción 2: Netlify

### Método 1: Desde la Web

1. Ve a [netlify.com](https://netlify.com)
2. Inicia sesión con GitHub
3. Click en **"Add new site"** > **"Import an existing project"**
4. Selecciona tu repositorio
5. Configuración:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click en **"Deploy site"**

### Método 2: Desde la Terminal

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Configuración Automática

El archivo `netlify.toml` ya está configurado con:
- ✅ Build command
- ✅ Publish directory
- ✅ Redirects para SPA

---

## 🌐 Opción 3: GitHub Pages

### Pasos:

1. **Build del proyecto:**
   ```bash
   npm run build
   ```

2. **Subir carpeta `dist` a GitHub:**
   - Crea un branch `gh-pages`
   - Sube el contenido de `dist` a ese branch

3. **Habilitar GitHub Pages:**
   - Ve a Settings > Pages
   - Source: `gh-pages` branch
   - Save

### Nota:
Si usas GitHub Pages, necesitas actualizar `vite.config.ts`:
```typescript
base: '/nombre-repositorio/'
```

---

## 🔧 Verificación Pre-Deploy

Antes de hacer deploy, verifica:

### ✅ Build Local
```bash
npm run build
```
Debe crear la carpeta `dist/` sin errores.

### ✅ Preview Local
```bash
npm run preview
```
Abre `http://localhost:4173` y verifica que todo funcione.

### ✅ Checklist
- [ ] Email actualizado en `index.html`
- [ ] Usuario de GitHub correcto en `src/main.ts`
- [ ] URLs de proyectos correctas
- [ ] Build sin errores
- [ ] Preview funciona correctamente

---

## 🐛 Solución de Problemas

### Error: "Build failed"
```bash
# Limpia y reinstala
rm -rf node_modules dist
npm install
npm run build
```

### Error: "Module not found"
- Verifica que todas las dependencias estén en `package.json`
- Ejecuta `npm install`

### Error: "404 en rutas"
- Verifica que los redirects estén configurados (ya incluidos en `vercel.json` y `netlify.toml`)

### Error: "GitHub API no funciona"
- Verifica el username en `src/main.ts`
- Verifica que el repositorio sea público
- Revisa la consola del navegador para errores

---

## 📊 Post-Deploy

Después del deploy:

1. ✅ Verifica que el sitio carga correctamente
2. ✅ Prueba todas las secciones
3. ✅ Verifica que los proyectos se carguen
4. ✅ Prueba en móvil
5. ✅ Verifica los enlaces

---

## 🔄 Actualizaciones

Para actualizar el sitio:

1. Haz cambios en tu código
2. Commit y push a GitHub
3. Vercel/Netlify detectará los cambios automáticamente
4. Se desplegará una nueva versión

---

## 📝 Variables de Entorno (Si las necesitas)

Si en el futuro necesitas variables de entorno:

### Vercel:
- Settings > Environment Variables

### Netlify:
- Site settings > Environment variables

---

## 🎉 ¡Listo!

Tu portafolio debería estar en línea. Comparte el link y muestra tu trabajo.

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de build en la plataforma
2. Verifica la consola del navegador
3. Revisa esta guía

---

**¡Feliz deploy! 🚀**
