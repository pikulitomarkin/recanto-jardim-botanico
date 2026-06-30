import sqlite3, uuid
from datetime import datetime

now = datetime.now().isoformat()
conn = sqlite3.connect('/workspace/dashboard/data/evonexus.db')
cursor = conn.cursor()

updates = {
    'db9bc5d8-1e8d-4c4e-86be-4999511b35aa': {
        'title': '[RJB-01] Setup Next.js — projeto base com Tailwind e estrutura de pastas',
        'description': (
            "Criar o projeto Next.js base para o site Recanto Jardim Botanico.\n\n"
            "STACK: Next.js 14+ (App Router), TypeScript, Tailwind CSS, ESLint.\n\n"
            "COMANDOS:\n"
            "  npx create-next-app@latest recanto-jardim-botanico --typescript --tailwind --eslint --app --src-dir --import-alias '@/*'\n"
            "  cd recanto-jardim-botanico\n\n"
            "ESTRUTURA DE PASTAS A CRIAR:\n"
            "  src/app/                    — App Router pages\n"
            "  src/app/api/                — Serverless API routes\n"
            "  src/app/api/rooms/          — CRUD de quartos\n"
            "  src/app/api/config/         — Config geral (logo, facilities)\n"
            "  src/app/api/admin/login/    — Auth admin\n"
            "  src/components/             — Componentes React\n"
            "  src/components/sections/    — Hero, Quartos, Estrutura, etc.\n"
            "  src/components/ui/          — Button, Card, Badge, etc.\n"
            "  src/lib/                    — Utilitarios (gdrive.ts, storage.ts)\n"
            "  src/types/                  — Tipos TypeScript\n"
            "  public/                     — Assets estaticos\n\n"
            "TAILWIND CONFIG: paleta customizada em tailwind.config.ts:\n"
            "  colors: { primary: '#1B4D2E', gold: '#C9A227', 'primary-dark': '#0a2617' }\n"
            "  fontFamily: { poppins: ['Poppins', 'sans-serif'] }\n\n"
            "TIPOS (src/types/index.ts):\n"
            "  Room: { id, name, price, priceGroup, status, driveId, driveUrl, whatsappMsg }\n"
            "  Facility: { id, label, subtitle, driveId, driveUrl }\n"
            "  SiteConfig: { logo, rooms, facilities, faq, whatsappDefault, adminPasswordHash }\n\n"
            "VERCEL: criar vercel.json na raiz com { 'framework': 'nextjs' }.\n"
            "Adicionar .env.local com ADMIN_PASSWORD_HASH e VERCEL_KV_URL (placeholder por enquanto).\n\n"
            "FONT: adicionar Poppins via next/font/google no layout.tsx.\n\n"
            "COMMITAR EM: feat/rjb-setup-nextjs"
        ),
    },
    'c49b3957-1648-4893-8d6f-e5b90553553e': {
        'title': '[RJB-02] Componentes Nav + Hero (Next.js/React)',
        'description': (
            "Implementar Header fixo e Hero section como componentes React.\n\n"
            "DEPENDENCIA: RJB-01 concluido.\n\n"
            "src/components/sections/Header.tsx:\n"
            "  - 'use client' (precisa de estado para menu mobile)\n"
            "  - position fixed, bg-white/97, backdrop-blur\n"
            "  - Logo circular 40px (img do Google Drive via SiteConfig)\n"
            "  - Nav links: Quartos, Estrutura, Valores, Como Funciona, Regras, FAQ, Contato\n"
            "  - Botao WhatsApp verde\n"
            "  - Hamburger mobile com useState para toggle\n"
            "  - Menu dropdown mobile com animacao\n\n"
            "src/components/sections/Hero.tsx:\n"
            "  - Gradient escuro: from-[#061810] via-[#1B4D2E] to-[#040e08]\n"
            "  - Logo circular 90px com border dourada\n"
            "  - Badge localizacao em #C9A227\n"
            "  - H1: 'Qualidade que <span class=text-gold>Acolhe!</span>'\n"
            "  - Paragrafo com preco a partir R$1.100/mes\n"
            "  - 2 CTAs: WhatsApp verde + Ver Quartos outline\n"
            "  - Blobs decorativos (divs com radial-gradient absolute)\n"
            "  - Animacao fadeUp via Tailwind animate\n\n"
            "src/app/page.tsx: importar e renderizar Header + Hero.\n\n"
            "COMMITAR EM: feat/rjb-nav-hero"
        ),
    },
    '5a9b1342-93d2-4671-9f35-f62632c90820': {
        'title': '[RJB-03] Componente Quartos — cards com disponibilidade (Next.js)',
        'description': (
            "Implementar secao de quartos com dados vindos da API serverless.\n\n"
            "DEPENDENCIAS: RJB-01, RJB-09 (modulo gdrive).\n\n"
            "src/app/api/rooms/route.ts (GET):\n"
            "  - Ler rooms do Vercel KV (chave: rjb:rooms)\n"
            "  - Fallback: retornar rooms defaults hardcoded se KV vazio\n"
            "  - Rooms defaults: 3 quartos R$1.100 e 2 quartos R$1.200\n"
            "  - Response: { priceGroups: [{ label, price, rooms: [Room] }] }\n\n"
            "src/components/sections/Quartos.tsx:\n"
            "  - 'use client'\n"
            "  - fetch('/api/rooms') no useEffect\n"
            "  - Badge 'Disponibilidade em Tempo Real' com dot verde animado\n"
            "  - Renderizar priceGroups com header de preco e grid de cards\n\n"
            "src/components/ui/RoomCard.tsx:\n"
            "  - Imagem do quarto: <img src={getDriveImageUrl(room.driveId)} /> sem lazy loading\n"
            "  - Badge status: Disponivel (verde) / Ocupado (vermelho) / Reservado (amarelo)\n"
            "  - Nome, preco, features (Wi-Fi, TV, cama, armario)\n"
            "  - Botao 'Tenho interesse' abre WhatsApp com msg personalizada do quarto\n"
            "  - Placeholder gradiente listrado se sem foto\n\n"
            "COMMITAR EM: feat/rjb-quartos"
        ),
    },
    'f38754b2-1815-4199-ab19-ecf6c221426c': {
        'title': '[RJB-04] Componentes Estrutura + Valores (Next.js)',
        'description': (
            "Implementar secoes Estrutura da Residencia e Valores Transparentes.\n\n"
            "DEPENDENCIA: RJB-01, RJB-09.\n\n"
            "src/app/api/config/route.ts (GET):\n"
            "  - Ler facilities e logo do Vercel KV (chave: rjb:config)\n"
            "  - Fallback com 4 facilities defaults (Piscina, Cozinha 1, Cozinha 2, Area de Lazer)\n\n"
            "src/components/sections/Estrutura.tsx:\n"
            "  - fetch('/api/config') para obter facilities\n"
            "  - Grid 4 colunas (2 no mobile)\n"
            "  - Cada card: imagem Google Drive (sem lazy loading) + legenda + subtitulo\n"
            "  - Placeholder com gradiente se sem foto configurada\n\n"
            "src/components/sections/Valores.tsx:\n"
            "  - Estatico (sem fetch necessario)\n"
            "  - Cards de preco: R$1.100 e R$1.200 com lista de inclusos\n"
            "  - Cada item da lista com dot #1B4D2E\n"
            "  - Tabela de O que inclui / O que nao inclui\n"
            "  - Nota sobre caucao (1 mes) e contas\n\n"
            "COMMITAR EM: feat/rjb-estrutura-valores"
        ),
    },
    '370cfc20-3dc5-4d0f-93cb-4eb98e32a7d7': {
        'title': '[RJB-05] Componentes Como Funciona + Regras (Next.js)',
        'description': (
            "Implementar secoes do processo e regras da residencia.\n\n"
            "DEPENDENCIA: RJB-01.\n\n"
            "src/components/sections/ComoFunciona.tsx:\n"
            "  - Steps horizontais no desktop, verticais no mobile\n"
            "  - 5 steps: 1-Contato WA, 2-Ver fotos, 3-Visita, 4-Documentacao, 5-Entrada\n"
            "  - Circulo numerado bg-primary text-white\n"
            "  - Setas SVG chevron entre steps (ocultas no mobile)\n"
            "  - Linha vertical no mobile entre steps\n\n"
            "src/components/sections/Regras.tsx:\n"
            "  - Grid 2 colunas (1 no mobile)\n"
            "  - Regras com icone check (verde) ou X (vermelho):\n"
            "    check: silencio apos 22h, limpar areas comuns, avisar visitantes, pagar ate dia 5\n"
            "    x: fumar nas areas internas, pets sem autorizacao\n"
            "  - CTA ao final: 'Aceita nossas regras? Fale com a gente!'\n\n"
            "COMMITAR EM: feat/rjb-como-regras"
        ),
    },
    '1bea0ffa-fa15-4902-a67d-4f6ce2b1b71c': {
        'title': '[RJB-06] FAQ accordion + Contato + Footer (Next.js)',
        'description': (
            "Implementar FAQ, secao de contato e footer.\n\n"
            "DEPENDENCIA: RJB-01.\n\n"
            "src/components/sections/FAQ.tsx:\n"
            "  - 'use client' para controlar estado open/close de cada item\n"
            "  - useState para indexes abertos\n"
            "  - Transition max-height via Tailwind ou CSS inline\n"
            "  - 8 perguntas hardcoded (podem ser editadas pelo admin no futuro):\n"
            "    - Quais documentos sao necessarios?\n"
            "    - Tem contrato formal?\n"
            "    - Qual o prazo minimo de estadia?\n"
            "    - Inclui internet?\n"
            "    - Tem vaga de garagem?\n"
            "    - Aceitam pets?\n"
            "    - Como e feito o pagamento?\n"
            "    - Posso visitar antes de alugar?\n"
            "  - Box CTA WhatsApp ao final\n\n"
            "src/components/sections/Contato.tsx:\n"
            "  - bg-primary, texto branco\n"
            "  - Grid 2 colunas: logo + formas de contato (WA, Instagram, endereco)\n"
            "  - Botao WhatsApp verde principal\n\n"
            "src/components/sections/Footer.tsx:\n"
            "  - bg-[#0a2617], logo, links rapidos, copyright\n\n"
            "COMMITAR EM: feat/rjb-faq-contato-footer"
        ),
    },
    'd929c10b-b2ab-49f5-881c-a1bf160c14cf': {
        'title': '[RJB-07] Admin panel — CRUD completo de imagens e quartos (Next.js)',
        'description': (
            "Painel admin protegido por senha com controle total de imagens (Google Drive) e quartos.\n\n"
            "DEPENDENCIAS: RJB-01, RJB-09, RJB-03, RJB-04.\n\n"
            "AUTENTICACAO (serverless):\n"
            "src/app/api/admin/login/route.ts (POST):\n"
            "  - Recebe { password }\n"
            "  - Compara com ADMIN_PASSWORD_HASH no .env (bcrypt ou SHA-256)\n"
            "  - Retorna { token } (JWT simples com secret do .env, expira em 8h)\n"
            "  - Token armazenado no sessionStorage do browser\n\n"
            "ROTAS ADMIN (todas exigem header Authorization: Bearer {token}):\n"
            "src/app/api/rooms/route.ts:\n"
            "  - GET: listar quartos (publico)\n"
            "  - POST: criar quarto (admin)\n"
            "  - PUT: atualizar quarto (admin)\n"
            "  - DELETE: remover quarto (admin)\n"
            "src/app/api/config/route.ts:\n"
            "  - GET: config geral (publico)\n"
            "  - PUT: atualizar logo, facilities (admin)\n\n"
            "STORAGE: Vercel KV (Redis):\n"
            "  - rjb:rooms — JSON array de Room[]\n"
            "  - rjb:config — JSON de SiteConfig (logo, facilities)\n"
            "  - Instalar: npm install @vercel/kv\n\n"
            "PAGINA ADMIN (src/app/admin/page.tsx):\n"
            "  - Rota: /admin (nao indexada no robots.txt)\n"
            "  - Tela de login se nao autenticado\n"
            "  - Ativar admin tb clicando 5x no logo do footer (redireciona para /admin)\n\n"
            "ABAS DO PAINEL:\n"
            "1. QUARTOS:\n"
            "  - Tabela com todos os quartos\n"
            "  - Colunas: foto preview, nome, preco, grupo, status, acoes\n"
            "  - Toggle de status: Disponivel / Ocupado / Reservado\n"
            "  - Botao editar abre modal com todos os campos incluindo campo Google Drive\n"
            "  - Campo Drive: colar qualquer link → preview ao lado em tempo real\n"
            "  - Botao adicionar novo quarto\n"
            "  - Drag para reordenar dentro do grupo\n\n"
            "2. ESTRUTURA (facilities):\n"
            "  - 4 cards editaveis: Piscina, Cozinha 1, Cozinha 2, Area de Lazer\n"
            "  - Campo Google Drive para foto de cada area\n"
            "  - Editar legenda e subtitulo\n\n"
            "3. GERAL:\n"
            "  - Campo logo (Google Drive)\n"
            "  - Campo WhatsApp padrao\n"
            "  - Campo alterar senha admin\n\n"
            "COMMITAR EM: feat/rjb-admin"
        ),
    },
    '7978cb85-5622-4c68-a3f4-19baa6d10d5b': {
        'title': '[RJB-08] Deploy Vercel + SEO + responsividade final',
        'description': (
            "Configurar deploy na Vercel e finalizar SEO e responsividade.\n\n"
            "DEPENDENCIAS: todos os tickets anteriores concluidos.\n\n"
            "VERCEL DEPLOY:\n"
            "  - Login: VERCEL_TOKEN configurado no .env do workspace\n"
            "  - Instalar Vercel CLI: npm install -g vercel\n"
            "  - vercel link (linkar com o projeto na Vercel)\n"
            "  - Configurar env vars na Vercel:\n"
            "    ADMIN_PASSWORD_HASH, ADMIN_JWT_SECRET, KV_URL, KV_REST_API_TOKEN\n"
            "  - vercel --prod para deploy de producao\n"
            "  - Configurar dominio custom se disponivel\n\n"
            "SEO:\n"
            "  - metadata export no layout.tsx e page.tsx (Next.js Metadata API)\n"
            "  - title: 'Recanto Jardim Botanico | Quartos para Alugar em Curitiba'\n"
            "  - description, keywords, og:title, og:description, og:image, og:url\n"
            "  - Schema.org JSON-LD: LocalBusiness (nome, endereco, telefone, priceRange)\n"
            "  - sitemap.xml via next-sitemap ou app/sitemap.ts\n"
            "  - robots.txt: bloquear /admin\n\n"
            "RESPONSIVIDADE: testar 375px, 768px, 1280px.\n"
            "PERFORMANCE: imagens sem lazy loading, font-display swap, sem JS desnecessario.\n"
            "VALIDACAO: Lighthouse score > 90, console limpo, links WA ok, admin funciona em prod.\n\n"
            "COMMITAR EM: feat/rjb-deploy e abrir PR para main"
        ),
    },
    'a2b50d67-df40-4365-99f7-827222f2f720': {
        'title': '[RJB-09] Lib Google Drive — conversao de links (src/lib/gdrive.ts)',
        'description': (
            "Utilitario TypeScript para converter links Google Drive em URLs diretas de imagem e video.\n\n"
            "DEPENDENCIA: RJB-01.\n\n"
            "ARQUIVO: src/lib/gdrive.ts\n\n"
            "FORMATOS DE ENTRADA SUPORTADOS:\n"
            "  1. https://drive.google.com/file/d/{ID}/view?usp=sharing\n"
            "  2. https://drive.google.com/open?id={ID}\n"
            "  3. https://drive.google.com/uc?id={ID}\n"
            "  4. ID bruto: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74740x\n\n"
            "FUNCOES A IMPLEMENTAR:\n"
            "  export function extractDriveId(input: string): string | null\n"
            "  export function getDriveImageUrl(idOrLink: string): string\n"
            "    // retorna https://lh3.googleusercontent.com/d/{ID}\n"
            "  export function getDriveImageUrlFallback(id: string): string\n"
            "    // retorna https://drive.google.com/uc?export=view&id={ID}\n"
            "  export function getDriveEmbedUrl(idOrLink: string): string\n"
            "    // retorna https://drive.google.com/file/d/{ID}/preview (para videos em iframe)\n\n"
            "VERSAO BROWSER (src/lib/gdrive.client.ts):\n"
            "  - Mesmas funcoes para usar em componentes 'use client'\n"
            "  - testDriveUrl(url: string): Promise<boolean> via new Image() onload/onerror\n\n"
            "Next.js IMAGE LOADER (opcional):\n"
            "  - Se usar next/image, criar loader customizado para URLs do Google Drive\n"
            "  - Configurar em next.config.ts: remotePatterns para lh3.googleusercontent.com\n\n"
            "TESTES UNITARIOS (src/lib/gdrive.test.ts):\n"
            "  - Testar extractDriveId com os 4 formatos de entrada\n"
            "  - Testar retorno correto de getDriveImageUrl\n"
            "  - Testar com ID invalido (deve retornar string vazia ou lancar erro)\n\n"
            "COMMITAR EM: feat/rjb-gdrive-lib"
        ),
    },
}

for ticket_id, data in updates.items():
    cursor.execute(
        'UPDATE tickets SET title=?, description=?, updated_at=? WHERE id=?',
        (data['title'], data['description'], now, ticket_id)
    )
    print(f'Atualizado: {data["title"][:65]}')

conn.commit()
conn.close()
print('\nTodos os tickets atualizados para Next.js + Vercel!')
