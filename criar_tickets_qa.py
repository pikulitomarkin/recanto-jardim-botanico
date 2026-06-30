import sqlite3, uuid
from datetime import datetime

now = datetime.now().isoformat()
conn = sqlite3.connect('/workspace/dashboard/data/evonexus.db')
cursor = conn.cursor()

desc_lens = "\n".join([
    "Revisao critica de codigo de todos os tickets implementados pelo Bolt.",
    "",
    "DEPENDENCIAS: RJB-01 ao RJB-07 concluidos e status resolved.",
    "",
    "ESTAGIO 1 — Conformidade com spec:",
    "  - Cada componente implementa exatamente o que o ticket descrevia?",
    "  - Todos os campos TypeScript tipados corretamente? Sem uso de 'any'?",
    "  - API routes retornam shapes corretos (Room[], SiteConfig)?",
    "  - Vercel KV sendo usado corretamente (rjb:rooms, rjb:config)?",
    "",
    "ESTAGIO 2 — Seguranca e qualidade:",
    "  SEGURANCA (OWASP):",
    "  - Admin JWT: secret forte, expiracao configurada, validacao em TODAS as rotas protegidas",
    "  - Password hash: bcrypt ou SHA-256 com salt — nunca plain text",
    "  - Rotas admin verificam token em POST, PUT, DELETE",
    "  - Rotas publicas GET nao expoe dados sensiveis",
    "  - VERCEL_TOKEN nao aparece em nenhum arquivo commitado",
    "  - .env.local no .gitignore",
    "",
    "  SOLID / QUALIDADE:",
    "  - Componentes com responsabilidade unica (sem god components)",
    "  - Props tipadas com interfaces TypeScript",
    "  - gdrive.ts: funcoes puras, sem side effects",
    "  - API routes: try/catch em todos os paths, responses 4xx/5xx corretos",
    "  - Sem console.log esquecidos no codigo de producao",
    "",
    "SEVERIDADE:",
    "  CRITICO — bloqueia merge (token exposto, auth bypassavel)",
    "  ALTO    — corrigir antes do deploy",
    "  MEDIO   — corrigir no mesmo PR se possivel",
    "  BAIXO   — registrar como tech debt",
    "",
    "OUTPUT:",
    "  - Arquivo: workspace/projects/recanto-jardim-botanico/[C]code-review-rjb.md",
    "  - Para cada achado CRITICO/ALTO: comentar no ticket original com o problema",
    "  - Se aprovado: comentar APROVADO com evidencias e fechar ticket RJB-10",
    "  - Commitar revisao em: docs/code-review",
])

desc_grid = "\n".join([
    "Criar suite de testes completa para o projeto Next.js Recanto Jardim Botanico.",
    "",
    "DEPENDENCIAS: RJB-09 (gdrive.ts), RJB-03 (API rooms), RJB-07 (admin), RJB-10 (Lens aprovado).",
    "",
    "SETUP:",
    "  npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom ts-jest",
    "  Configurar jest.config.ts com moduleNameMapper para @/* e transform para TSX",
    "  Scripts no package.json: test (jest) e test:ci (jest --ci --coverage)",
    "",
    "PIRAMIDE DE TESTES (70 / 20 / 10):",
    "",
    "1. UNITARIOS 70% — src/lib/gdrive.test.ts:",
    "   - extractDriveId() com os 4 formatos de entrada suportados",
    "   - extractDriveId() com inputs invalidos (null, vazio, URL estranha)",
    "   - getDriveImageUrl() retorna https://lh3.googleusercontent.com/d/{ID}",
    "   - getDriveEmbedUrl() retorna URL de preview correta",
    "   - getDriveImageUrlFallback() retorna URL alternativa",
    "   Meta: 100% coverage em gdrive.ts",
    "",
    "2. INTEGRACAO 20% — API routes com mocks (@vercel/kv via jest.mock):",
    "   - GET /api/rooms: retorna priceGroups, fallback quando KV vazio",
    "   - POST /api/rooms: cria quarto com token valido, 401 sem token",
    "   - PUT /api/rooms: atualiza quarto existente, 404 para id inexistente",
    "   - DELETE /api/rooms: remove quarto, 401 sem auth",
    "   - GET /api/config: retorna config com facilities",
    "   - PUT /api/config: atualiza logo e facilities com auth",
    "   - POST /api/admin/login: token com senha correta, 401 com senha errada",
    "",
    "3. COMPONENTES 10% — Testing Library:",
    "   - RoomCard: renderiza nome, preco, badge de status correto",
    "   - RoomCard: badge Disponivel (verde), Ocupado (vermelho), Reservado (amarelo)",
    "   - FAQ: abre e fecha item ao clicar",
    "   - Header: menu mobile toggle funciona",
    "",
    "OUTPUT:",
    "  - Todos os testes passando: npx jest --coverage",
    "  - Coverage em workspace/projects/recanto-jardim-botanico/coverage/",
    "  - Meta minima: 80% overall, 100% em gdrive.ts",
    "  - Adicionar step de test ao workflow do Vercel ou .github/workflows/test.yml",
    "  - Commitar em: feat/rjb-tests",
])

tickets = [
    {
        'id': str(uuid.uuid4()),
        'title': '[RJB-10] Code Review — Lens revisa componentes, APIs e seguranca',
        'description': desc_lens,
        'priority': 'high',
        'priority_rank': 3,
        'assignee_agent': 'lens-reviewer',
    },
    {
        'id': str(uuid.uuid4()),
        'title': '[RJB-11] Test Suite — Grid escreve testes unitarios e de integracao',
        'description': desc_grid,
        'priority': 'high',
        'priority_rank': 3,
        'assignee_agent': 'grid-tester',
    },
]

for t in tickets:
    cursor.execute(
        'INSERT INTO tickets (id, title, description, status, priority, priority_rank, assignee_agent, '
        'project_id, created_by, source_agent, source_session_id, message_count, last_summary_at_message, created_at, updated_at) '
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        (
            t['id'], t['title'], t['description'], 'open',
            t['priority'], t['priority_rank'], t['assignee_agent'],
            1, 'oracle', 'oracle', 'ffa7c2dd-db2e-4ba7-8253-9ef0a3a3d994',
            0, 0, now, now
        )
    )
    print(f'Criado: {t["title"]}')

conn.commit()
conn.close()
print('\nPronto!')
