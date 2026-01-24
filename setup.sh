#!/bin/bash
# 🚀 Script de Inicio Rápido del Portafolio

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║            🎉 PORTAFOLIO CONECTADO CON GITHUB 🎉             ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

echo "📋 ANTES DE COMENZAR:"
echo "────────────────────────────────────────────────────────────────"
echo "1. Abre src/main.ts y cambia:"
echo "   const GITHUB_USERNAME = 'tu-usuario';"
echo ""
echo "2. Abre index.html y busca 'mailto:' y cambia el email"
echo ""
echo "3. Actualiza los links de redes sociales en index.html"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""

read -p "¿Ya hiciste los cambios? (s/n) " respuesta

if [ "$respuesta" = "s" ]; then
    echo ""
    echo "✅ Instalando dependencias..."
    npm install
    
    echo ""
    echo "✅ Compilando TypeScript..."
    npm run build
    
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "✨ ¡Todo listo! Tu portafolio está compilado en la carpeta /dist"
    echo ""
    echo "📌 Próximos pasos:"
    echo "   • Para ver en desarrollo: npm run dev"
    echo "   • Para previsualizar: npm run preview"
    echo "   • Para subir: Sube la carpeta /dist a:"
    echo "     - Vercel"
    echo "     - Netlify"
    echo "     - GitHub Pages"
    echo ""
    echo "📚 Documentación:"
    echo "   • GUIA_RAPIDA.md"
    echo "   • CONFIGURACION.md"
    echo "   • README_FINAL.md"
    echo "════════════════════════════════════════════════════════════════"
else
    echo "❌ Por favor, completa los cambios primero."
    echo ""
    echo "📝 Para más información, lee: GUIA_RAPIDA.md"
fi
