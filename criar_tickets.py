import sqlite3, uuid
from datetime import datetime

now = datetime.now().isoformat()
conn = sqlite3.connect('/workspace/dashboard/data/evonexus.db')
cursor = conn.cursor()

cursor.execute("SELECT id FROM projects WHERE slug='recanto-jardim-botanico'")
project_id = cursor.fetchone()[0]
print(f'Project ID: {project_id}')

tickets = [
    {
        'title': '[RJB-01] Setup do projeto — estrutura base HTML/CSS/JS',
        'description': 'Criar estrutura base do site. Stack: Vanilla HTML + CSS + JS. Pasta: workspace/projects/recanto-jardim-botanico/src/. Tarefas: (1) index.html com boilerplate, meta SEO, OG tags; (2) src/css/main.css com reset, variaveis CSS (--color-primary #1B4D2E, --color-gold #C9A227), utilitarios de grid (.cnt, .g2, .g3, .g4, .g2c), classes .btn .na .card, breakpoints mobile, animacao fadeUp; (3) src/js/main.js com waDefault, array priceGroups, array faqs; (4) Commitar em branch feat/rjb-setup.',
        'priority': 'high',
        'assignee_agent': 'bolt-executor',
    },
    {
        'title': '[RJB-02] Nav header fixo + Hero section',
        'description': 'NAV: position fixed, background rgba(255,255,255,.97), backdrop-filter blur(12px). Logo circular 40px + texto "Recanto JB". Links: Quartos, Estrutura, Valores, Como Funciona, Regras, FAQ, Contato. Botao WhatsApp verde. Hamburger mobile com menu dropdown. JS toggleMenu/closeMenu. HERO: id=inicio, min-height calc(100vh-70px), gradient escuro #061810 a #1B4D2E. Logo 90px com border dourada. Badge localizacao dourado. H1 "Qualidade que Acolhe!" (Acolhe em #C9A227). Paragrafo moradia a partir R$1.100/mes. 2 CTAs: WhatsApp verde + Ver Quartos outline. Animacao fadeUp. Commitar em feat/rjb-nav-hero.',
        'priority': 'high',
        'assignee_agent': 'bolt-executor',
    },
    {
        'title': '[RJB-03] Secao Quartos — listagem com disponibilidade em tempo real',
        'description': 'Secao id=quartos, background #f8faf9. Badge "Disponibilidade em Tempo Real" com dot verde animado. Renderizar priceGroups via JS. Grupos: R$1.100/mes e R$1.200/mes. Card de quarto: placeholder foto (aspect-ratio 4/3, gradiente listrado), badge status (Disponivel=verde / Ocupado=vermelho / Reservado=amarelo), nome do quarto, preco, features (Wi-Fi, TV, cama, armario), botao WhatsApp "Tenho interesse". Commitar em feat/rjb-quartos.',
        'priority': 'high',
        'assignee_agent': 'bolt-executor',
    },
    {
        'title': '[RJB-04] Secao Estrutura + Secao Valores',
        'description': 'ESTRUTURA: id=estrutura, background white. Grid .g4 com cards das areas: Piscina, Cozinha 1, Cozinha 2, Area de Lazer. Cada card: placeholder foto aspect-ratio 4/3, legenda, subtitulo. VALORES: id=valores, background #f8faf9. Cards de preco: R$1.100 (quarto padrao) e R$1.200 (quarto maior). Cada card: preco em destaque, lista de inclusos com dot #1B4D2E. Tabela de inclusos/nao inclusos. Nota sobre caucao e contas. Commitar em feat/rjb-estrutura-valores.',
        'priority': 'medium',
        'assignee_agent': 'bolt-executor',
    },
    {
        'title': '[RJB-05] Secao Como Funciona + Secao Regras',
        'description': 'COMO FUNCIONA: id=como-funciona, background white. Steps horizontais (desktop) / verticais (mobile): 1-Contato WhatsApp, 2-Ver fotos, 3-Visita, 4-Documentacao, 5-Entrada. Circulo numerado #1B4D2E, setas SVG entre steps. REGRAS: id=regras, background #f8faf9. Grid 2 colunas com regras da residencia: silencio apos 22h, limpeza areas comuns, visitantes com aviso, nao fumar, pets verificar, pagamento ate dia X. Icones check/X ao lado de cada regra. CTA final para WhatsApp. Commitar em feat/rjb-como-regras.',
        'priority': 'medium',
        'assignee_agent': 'bolt-executor',
    },
    {
        'title': '[RJB-06] FAQ accordion + Secao Contato + Footer',
        'description': 'FAQ: id=faq, background white. Accordion JS com max-height transition. Minimo 8 perguntas em main.js (documentos, contrato, prazo minimo, internet, garagem, pets, pagamento, visita). Box CTA WhatsApp ao final. CONTATO: id=contato, background #1B4D2E. Grid 2 colunas: esquerda logo + formas contato (WhatsApp, Instagram, endereco), direita CTA visual. FOOTER: background #0a2617, logo + links rapidos + copyright. Commitar em feat/rjb-faq-contato-footer.',
        'priority': 'medium',
        'assignee_agent': 'bolt-executor',
    },
    {
        'title': '[RJB-07] Admin panel — gerenciamento de disponibilidade dos quartos',
        'description': 'Painel admin com autenticacao por senha (hash SHA-256 no JS). Ativar clicando 5x no logo do footer. Modal de login. Admin bar no topo quando autenticado. Em modo admin: toggle disponibilidade por quarto (Disponivel/Ocupado/Reservado), editar nome e preco. Persistir em localStorage (key: rjb_rooms_data). Exportar/importar JSON. Session expira ao fechar o browser. Commitar em feat/rjb-admin.',
        'priority': 'low',
        'assignee_agent': 'bolt-executor',
    },
    {
        'title': '[RJB-08] SEO completo + responsividade mobile + validacao final',
        'description': 'SEO: meta description, keywords, OG tags (og:title, og:description, og:image, og:url), Schema.org JSON-LD LocalBusiness (nome, endereco Curitiba PR, telefone, priceRange R$1.100-R$1.200), sitemap.xml, robots.txt. RESPONSIVIDADE: testar 375px/768px/1280px+, nav mobile, grid quartos 1-2-3 colunas, steps vertical no mobile, hero legivel. PERFORMANCE: lazy loading imagens, font-display swap. VALIDACAO: HTML valido, console limpo, links WhatsApp funcionando, FAQ abre/fecha, PR aberto para main. Agente: oath-verifier.',
        'priority': 'low',
        'assignee_agent': 'oath-verifier',
    },
]

for t in tickets:
    priority_rank = {'urgent': 4, 'high': 3, 'medium': 2, 'low': 1}[t['priority']]
    cursor.execute(
        'INSERT INTO tickets (id, title, description, status, priority, priority_rank, assignee_agent, project_id, created_by, source_agent, source_session_id, message_count, last_summary_at_message, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        (str(uuid.uuid4()), t['title'], t['description'], 'open', t['priority'], priority_rank, t['assignee_agent'], project_id, 'oracle', 'oracle', 'ffa7c2dd-db2e-4ba7-8253-9ef0a3a3d994', 0, 0, now, now)
    )
    print(f'OK: {t["title"][:70]}')

conn.commit()
conn.close()
print('\nTodos os tickets criados!')
