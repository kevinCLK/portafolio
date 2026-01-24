# 🎓 Ejemplos de Uso y Casos Prácticos

## Ejemplo 1: Configuración Básica

### Antes (Lo que tenías)
```typescript
const GITHUB_USERNAME = 'kvnzl';
```

### Ahora (Lo que está mejorado)
Sigue siendo el mismo, pero ahora obtiene:
- ✅ Datos de perfil (followers, repos)
- ✅ Estadísticas (lenguajes, stars)
- ✅ Proyectos ordenados por popularidad
- ✅ Topics de cada proyecto

---

## Ejemplo 2: Hacer que aparezca tu Repositorio

Para que un repositorio aparezca en el portafolio:

### 1. **Debe ser público** ✅
```
Settings > General > Change repository visibility > Public
```

### 2. **Debe tener descripción** ✅
En el repo:
```
About section > Write a short description
```

### 3. **Opcional: Añadir topics** 🏷️
En el repo:
```
About section > Add topics > (ej: react, typescript, api)
```

### 4. **Opcional: Añadir URL de demo** 🌐
En el repo:
```
About section > Homepage URL > (ej: https://mi-app.vercel.app)
```

---

## Ejemplo 3: Interpretar los Datos que Carga

### De tu Perfil
```javascript
{
  followers: 42,           // ← Aparece en el portafolio
  public_repos: 15,        // ← Aparece en el portafolio
  name: "Kevin",
  bio: "Full Stack Developer",
  avatar_url: "..."        // Podría mostrarse
}
```

### De tus Repositorios
```javascript
{
  name: "mi-proyecto",
  description: "Una app de tareas",
  language: "TypeScript",  // ← Con código de color
  stargazers_count: 23,    // ← Aparece como ⭐ 23
  topics: ["react", "tailwind"],  // ← Aparece como tags
  homepage: "https://...", // ← Botón "Demo"
  html_url: "https://github.com/..." // ← Botón "GitHub"
}
```

---

## Ejemplo 4: Caso Real - Usuario "torvalds" (Linus Torvalds)

Si tu username fuera "torvalds":

```typescript
const GITHUB_USERNAME = 'torvalds';
```

El portafolio cargería:
- ✅ Linux kernel (con millones de stars)
- ✅ Otros repositorios
- ✅ Datos de followers (millones)
- ✅ Estadísticas de lenguajes

---

## Ejemplo 5: Personalización del Email

### Ubicación: `index.html` (búsca "mailto")

Cambio:
```html
<!-- Antes -->
<a href="mailto:tu-email@ejemplo.com">

<!-- Después (ejemplo) -->
<a href="mailto:kevin@developer.com">
```

---

## Ejemplo 6: Actualizar Redes Sociales

### En la sección de contacto:

```html
<!-- GitHub -->
<a href="https://github.com/kvnzl" target="_blank">
  GitHub
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/kvnzl" target="_blank">
  LinkedIn
</a>

<!-- Twitter -->
<a href="https://twitter.com/kvnzl" target="_blank">
  Twitter
</a>
```

---

## Ejemplo 7: Estructura de Datos Calculada

### Estadísticas que se Calculan Automáticamente:

```javascript
// Después de cargar todos los repos:

const languages = new Set(['TypeScript', 'JavaScript', 'Python']);
const totalStars = 15 + 8 + 42 + 3 = 68;

// Resultado en el portafolio:
// "Lenguajes: 3"
// "Stars totales: 68"
```

---

## Ejemplo 8: Flujo de Carga

```
1. Página carga
   ↓
2. loadGitHubUserData() 
   → Obtiene tu perfil
   → Actualiza: repos-count, followers-count
   ↓
3. fetchProjects()
   → Obtiene tus 9 últimos repos
   → Los ordena por stars
   → Crea 6 tarjetas
   → Calcula estadísticas
   ↓
4. calculateGitHubStats()
   → Cuenta lenguajes únicos
   → Suma todos los stars
   → Actualiza HTML
   ↓
5. ¡Portafolio listo! 🎉
```

---

## Ejemplo 9: Estructura de URL de GitHub API

El portafolio usa estas URLs automáticamente:

```javascript
// Obtener perfil
https://api.github.com/users/kvnzl

// Obtener repos
https://api.github.com/users/kvnzl/repos?sort=updated&per_page=9&type=owner

// Resultado:
Array de repos con:
- name, description, language
- stargazers_count, topics
- homepage, html_url
```

---

## Ejemplo 10: Personalización Avanzada

Si quieres cambiar cuántos repositorios se muestran:

```typescript
// Búsca esta línea en main.ts:
const response = await fetch(
  `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9&type=owner`
  //                                                                    ↑ Cambia este número
);

// per_page=9  → Obtiene 9 repos
// per_page=20 → Obtiene 20 repos

// Luego, para mostrar menos:
sortedRepos.slice(0, 6)  // ← Muestra 6
sortedRepos.slice(0, 3)  // ← Muestra 3
```

---

## 📝 Checklist de Configuración

- [ ] Cambié el username a mi usuario de GitHub
- [ ] Cambié el email a mi correo real
- [ ] Actualicé los links de redes sociales
- [ ] Mis repositorios son públicos
- [ ] Mis repositorios tienen descripciones
- [ ] Añadí topics a mis repositorios importantes
- [ ] Compilé el proyecto (`npm run build`)
- [ ] Probé en desarrollo (`npm run dev`)
- [ ] Verifiqué que los datos carguen correctamente

---

¡Listo! Ya tienes un portafolio dinámico conectado a GitHub 🚀
