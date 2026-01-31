import './style.css'

// --- Configuration ---
const GITHUB_USERNAME = 'kvnzl'; // Reemplaza con tu usuario real si es diferente

// --- Interfaces ---
interface GitHubUser {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  company: string;
  location: string;
  html_url: string;
}

// --- Mobile Menu Toggle ---
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');


if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// --- Fetch and Load GitHub User Data ---
async function loadGitHubUserData() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    
    if (!response.ok) {
      throw new Error('Error cargando perfil de GitHub');
    }

    const user: GitHubUser = await response.json();
    
    // Update stats
    const reposCount = document.getElementById('repos-count');
    const followersCount = document.getElementById('followers-count');
    
    if (reposCount) reposCount.textContent = user.public_repos.toString();
    if (followersCount) followersCount.textContent = user.followers.toString();

    // Update social links
    updateSocialLinks(user);

  } catch (error) {
    console.error('Error loading GitHub user:', error);
  }
}

function updateSocialLinks(user: GitHubUser) {
  const githubLink = document.querySelector('a[href="#"][href*="GitHub"]')?.parentElement?.querySelector('a');
  if (githubLink) {
    githubLink.href = user.html_url;
    githubLink.target = '_blank';
  }
}

// --- Intersection Observer (Animations) ---
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
      entry.target.classList.remove('opacity-0');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section > div').forEach((_el) => {
  // _el.classList.add('opacity-0'); // Optional: Enable to force fade-in everywhere
  // observer.observe(_el);
});


// --- GitHub Projects Integration ---
interface DeployedProject {
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  github?: string;
  fullDescription?: string;
  technologies?: string[];
  features?: string[];
  challenges?: string[];
}

const deployedProjectsGrid = document.getElementById('deployed-projects-grid');

// Proyectos desplegados - añade los tuyos aquí
const deployedProjects: DeployedProject[] = [
  {
    name: 'Sistema de Gestión de Clínica Médica',
    description: 'Plataforma integral SaaS para digitalización de clínicas médicas. Sistema RBAC con roles para Administradores, Doctores y Pacientes. Gestión de expedientes clínicos, agendamiento inteligente y dashboard de análisis.',
    url: 'https://sistema-clinica-git-main-kevinclks-projects.vercel.app/',
    language: 'TypeScript',
    topics: ['nextjs', 'postgresql', 'prisma', 'full-stack', 'saas'],
    github: '',
    fullDescription: 'Plataforma integral SaaS diseñada para la digitalización y optimización de clínicas médicas. El sistema centraliza la gestión de pacientes, agendas de citas, expedientes clínicos y control administrativo en una interfaz moderna, rápida y segura. Destaca por su sistema de Control de Acceso Basado en Roles (RBAC), permitiendo una experiencia personalizada para Administradores, Doctores y Pacientes.',
    technologies: [
      'Next.js 15+ (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI (Shadcn/UI)',
      'PostgreSQL (Neon Serverless)',
      'Prisma ORM',
      'NextAuth.js',
      'Recharts',
      'Zod'
    ],
    features: [
      'Control de Acceso RBAC (Administrador, Doctor, Paciente)',
      'Expediente Clínico Digital con timeline cronológico',
      'Gestión avanzada de citas con detección de conflictos',
      'Dashboard de análisis con gráficos dinámicos',
      'Exportación de reportes en PDF y Excel',
      'Diseño responsive con modo oscuro/claro',
      'Estados de carga y notificaciones instantáneas'
    ],
    challenges: [
      'Arquitectura limpia separando lógica de negocio y UI',
      'Migración segura de Next.js para cumplir estándares de seguridad',
      'Implementación de relaciones complejas en Prisma con borrado lógico'
    ]
  },
  {
    name: 'TripGenius',
    description: 'Plataforma inteligente de planificación de viajes con IA, integración de APIs de vuelos, gestión de reservas y recomendaciones personalizadas. Backend en Flask con SQLAlchemy, arquitectura MVC escalable.',
    url: 'https://proyect-emergentes.vercel.app/',
    language: 'Python',
    topics: ['flask', 'ia', 'full-stack'],
    github: ''
  },
  // Añade más proyectos desplegados aquí
];

function createDeployedProjectCard(project: DeployedProject): HTMLDivElement {
  const card = document.createElement('div');
  card.className = 'group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-purple-500/20';

  // Determine language color
  const langColors: { [key: string]: string } = {
    'TypeScript': 'text-blue-400 bg-blue-500/10',
    'JavaScript': 'text-yellow-400 bg-yellow-500/10',
    'Python': 'text-green-400 bg-green-500/10',
    'Vue': 'text-green-400 bg-green-500/10',
    'React': 'text-cyan-400 bg-cyan-500/10',
    'HTML': 'text-orange-400 bg-orange-500/10',
    'CSS': 'text-blue-400 bg-blue-500/10',
  };

  const langClass = langColors[project.language] || 'text-slate-400 bg-slate-500/10';

  // Get topics tags
  const tagsHTML = project.topics && project.topics.length > 0 
    ? project.topics.slice(0, 3).map(topic => `<span class="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-medium">${topic}</span>`).join('')
    : '';

  const hasDetails = project.fullDescription || project.technologies || project.features || project.challenges;
  const projectId = `project-${project.name.toLowerCase().replace(/\s+/g, '-')}`;

  card.innerHTML = `
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-4">
             <div class="flex gap-2 flex-wrap">
                <span class="px-3 py-1 ${langClass} text-xs font-bold rounded-full">${project.language}</span>
                <span class="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-bold rounded-full flex items-center gap-1">🚀 En vivo</span>
             </div>
        </div>
        
        <h3 class="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors uppercase tracking-wide break-words">${project.name}</h3>
        <p class="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">${project.description}</p>
        
        ${tagsHTML ? `<div class="flex gap-2 flex-wrap mb-4">${tagsHTML}</div>` : ''}
        
        <div class="flex gap-3 mt-auto pt-4 border-t border-white/5">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold hover:text-purple-400 flex items-center gap-1 transition-colors px-3 py-2 bg-purple-500/10 hover:bg-purple-500/20 rounded text-purple-300 flex-grow justify-center">
            Visitar <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          ${hasDetails ? `<button data-project-id="${projectId}" class="text-xs font-semibold hover:text-cyan-400 flex items-center gap-1 transition-colors px-3 py-2 bg-slate-800/50 rounded hover:bg-slate-700/50 project-details-btn">
            Detalles
          </button>` : ''}
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold hover:text-cyan-400 flex items-center gap-1 transition-colors px-3 py-2 bg-slate-800/50 rounded hover:bg-slate-700/50">
            GitHub <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>` : ''}
        </div>
      </div>
  `;

  // Add click handler for details button
  if (hasDetails) {
    const detailsBtn = card.querySelector(`[data-project-id="${projectId}"]`) as HTMLButtonElement;
    if (detailsBtn) {
      detailsBtn.addEventListener('click', () => {
        showProjectModal(project);
      });
    }
  }

  return card;
}

function showProjectModal(project: DeployedProject) {
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4';
  overlay.id = 'project-modal-overlay';

  const technologiesHTML = project.technologies 
    ? `<div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-cyan-400">🚀 Tecnologías Utilizadas</h4>
        <div class="flex flex-wrap gap-2">
          ${project.technologies.map(tech => `<span class="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded">${tech}</span>`).join('')}
        </div>
      </div>`
    : '';

  const featuresHTML = project.features
    ? `<div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-purple-400">🛠️ Funcionalidades Clave</h4>
        <ul class="space-y-2">
          ${project.features.map(feature => `<li class="flex items-start gap-2 text-slate-300"><span class="text-purple-400 mt-1">•</span><span>${feature}</span></li>`).join('')}
        </ul>
      </div>`
    : '';

  const challengesHTML = project.challenges
    ? `<div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-yellow-400">💡 Retos Técnicos Superados</h4>
        <ul class="space-y-2">
          ${project.challenges.map(challenge => `<li class="flex items-start gap-2 text-slate-300"><span class="text-yellow-400 mt-1">•</span><span>${challenge}</span></li>`).join('')}
        </ul>
      </div>`
    : '';

  overlay.innerHTML = `
    <div class="bg-slate-900 rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
      <div class="p-8">
        <div class="flex justify-between items-start mb-6">
          <h2 class="text-3xl font-bold text-white">${project.name}</h2>
          <button id="close-modal" class="text-slate-400 hover:text-white transition-colors text-2xl">&times;</button>
        </div>
        
        ${project.fullDescription ? `<div class="mb-6">
          <h3 class="text-xl font-bold mb-3 text-cyan-400">Descripción General</h3>
          <p class="text-slate-300 leading-relaxed">${project.fullDescription}</p>
        </div>` : ''}
        
        ${technologiesHTML}
        ${featuresHTML}
        ${challengesHTML}
        
        <div class="flex gap-4 mt-8 pt-6 border-t border-white/10">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
            Visitar Proyecto <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
            Ver en GitHub <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>` : ''}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close modal handlers
  const closeBtn = overlay.querySelector('#close-modal');
  const closeModal = () => {
    document.body.removeChild(overlay);
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Close on Escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
}

function loadDeployedProjects() {
  if (!deployedProjectsGrid) return;

  deployedProjectsGrid.innerHTML = '';

  if (deployedProjects.length === 0) {
    deployedProjectsGrid.innerHTML = '<p class="col-span-full text-center text-slate-400">Próximamente más proyectos desplegados...</p>';
    return;
  }

  deployedProjects.forEach(project => {
    const card = createDeployedProjectCard(project);
    deployedProjectsGrid.appendChild(card);
  });
}

// Initialize
loadGitHubUserData();
loadDeployedProjects();
