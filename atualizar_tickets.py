import sqlite3, uuid
from datetime import datetime

now = datetime.now().isoformat()
conn = sqlite3.connect('/workspace/dashboard/data/evonexus.db')
cursor = conn.cursor()

# RJB-07 atualizado — controle total de imagens + Google Drive
desc_07 = (
    "Painel admin com controle total de todas as imagens do site, integrado ao Google Drive para hospedagem.\n\n"
    "AUTENTICACAO: botao oculto (clicar 5x no logo do footer), modal de login, senha via hash SHA-256 no JS, "
    "admin bar no topo quando autenticado, session no sessionStorage.\n\n"
    "GERENCIAMENTO DE IMAGENS VIA GOOGLE DRIVE: Admin cola link publico do Google Drive. "
    "Sistema converte automaticamente para URL direta (lh3.googleusercontent.com/d/{ID}). "
    "SEM lazy loading — todas as imagens carregam na abertura da pagina.\n\n"
    "SECOES COM CONTROLE DE IMAGEM:\n"
    "1. LOGO/AVATAR — imagem circular usada no nav, hero, contato, footer.\n"
    "2. QUARTOS — cada quarto tem campo para URL Google Drive da foto. CRUD completo: adicionar (nome, preco, status, link foto), editar, remover, reordenar dentro do grupo de preco.\n"
    "3. ESTRUTURA — 4 areas (Piscina, Cozinha 1, Cozinha 2, Area de Lazer). Campo URL Google Drive + editar legenda e subtitulo.\n"
    "4. HERO — campo opcional para imagem de fundo/overlay.\n\n"
    "PAINEL DE MIDIA: lista de todas as imagens configuradas, campo input para cada uma com preview ao lado, "
    "botao Testar Link, botao Salvar tudo persiste no localStorage.\n\n"
    "DADOS NO LOCALSTORAGE (key: rjb_config):\n"
    "{ logo: {driveId, url}, rooms: [{id, name, price, status, driveId, url, whatsapp}], "
    "facilities: [{id, label, subtitle, driveId, url}], admin: {passwordHash} }\n\n"
    "VIDEOS (estrutura futura): campo preparado no admin com badge 'Em breve', "
    "usar embed Google Drive: https://drive.google.com/file/d/{ID}/preview em iframe.\n\n"
    "FALLBACK: se imagem nao carrega, mostrar placeholder com gradiente listrado.\n\n"
    "Commitar em: feat/rjb-admin-imagens"
)

cursor.execute(
    'UPDATE tickets SET title=?, description=?, updated_at=? WHERE id=?',
    (
        '[RJB-07] Admin panel — controle total de imagens + Google Drive',
        desc_07,
        now,
        'd929c10b-b2ab-49f5-881c-a1bf160c14cf'
    )
)
print('RJB-07 atualizado')

# RJB-08 atualizado — remover lazy loading
desc_08 = (
    "SEO: meta description, keywords, OG tags, Schema.org JSON-LD LocalBusiness "
    "(nome, endereco Curitiba PR, telefone, priceRange R$1.100-R$1.200), sitemap.xml, robots.txt.\n\n"
    "RESPONSIVIDADE: testar 375px / 768px / 1280px+. Nav mobile, grid quartos 1-2-3 colunas, "
    "steps vertical no mobile, hero legivel em todos os tamanhos.\n\n"
    "PERFORMANCE: REMOVER lazy loading — todas as imagens carregam na abertura da pagina (sem loading=lazy). "
    "Imagens Google Drive carregam com src direto via lh3.googleusercontent.com.\n\n"
    "VALIDACAO FINAL: HTML valido, console limpo, links WhatsApp funcionando, FAQ accordion ok, "
    "admin panel funciona, preview das imagens Google Drive carrega corretamente. "
    "Abrir PR para main ao concluir."
)

cursor.execute(
    'UPDATE tickets SET description=?, updated_at=? WHERE id=?',
    (desc_08, now, '7978cb85-5622-4c68-a3f4-19baa6d10d5b')
)
print('RJB-08 atualizado')

# RJB-09 novo — modulo Google Drive
desc_09 = (
    "Modulo JS (src/js/gdrive.js) para converter qualquer formato de link Google Drive em URL direta.\n\n"
    "FORMATOS DE ENTRADA SUPORTADOS:\n"
    "1. Link share: https://drive.google.com/file/d/{ID}/view?usp=sharing\n"
    "2. Link abreviado: https://drive.google.com/open?id={ID}\n"
    "3. ID bruto: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs\n"
    "4. Link export: https://drive.google.com/uc?id={ID}\n\n"
    "FUNCOES A IMPLEMENTAR:\n"
    "- extractDriveId(input): extrai o ID de qualquer formato acima\n"
    "- getDriveImageUrl(idOrLink): retorna https://lh3.googleusercontent.com/d/{ID}\n"
    "- getDriveImageUrlFallback(id): retorna https://drive.google.com/uc?export=view&id={ID}\n"
    "- getDriveEmbedUrl(idOrLink): retorna https://drive.google.com/file/d/{ID}/preview para videos\n"
    "- testDriveUrl(url, onSuccess, onError): testa se URL carrega via Image onload\n\n"
    "INTEGRACAO COM ADMIN (RJB-07):\n"
    "- Input aceita qualquer formato, converte automaticamente ao perder foco (onblur)\n"
    "- Preview da imagem aparece ao lado do campo em tempo real\n"
    "- Badge verde OK ou vermelho Erro baseado no testDriveUrl\n\n"
    "INTEGRACAO COM O SITE:\n"
    "- Ao carregar a pagina, ler rjb_config do localStorage\n"
    "- Aplicar getDriveImageUrl nos src dos imgs de cada secao\n"
    "- Carregar tudo na abertura (sem lazy loading)\n\n"
    "TESTES: testar 3 formatos de link diferentes, testar fallback, testar com ID de video.\n\n"
    "Commitar em: feat/rjb-gdrive-module"
)

cursor.execute(
    'INSERT INTO tickets (id, title, description, status, priority, priority_rank, assignee_agent, project_id, '
    'created_by, source_agent, source_session_id, message_count, last_summary_at_message, created_at, updated_at) '
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    (
        str(uuid.uuid4()),
        '[RJB-09] Modulo Google Drive — conversao de links e carregamento de midia',
        desc_09, 'open', 'high', 3, 'bolt-executor', 1,
        'oracle', 'oracle', 'ffa7c2dd-db2e-4ba7-8253-9ef0a3a3d994',
        0, 0, now, now
    )
)
print('RJB-09 criado')

conn.commit()
conn.close()
print('\nConcluido!')
