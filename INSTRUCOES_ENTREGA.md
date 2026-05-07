# INSTRUÇÕES DE ENTREGA - OS MEUS LIVROS

## 📦 Ficheiro de Entrega

**Nome do ficheiro**: `24_EluisioDias_Meaux.zip`  
**Data de entrega**: 8 de maio de 2026 até às 23h59  
**Local de entrega**: Moodle (Disciplina IHM)

---

## 📂 Conteúdo do Ficheiro ZIP

O ficheiro ZIP contém todo o projeto Ionic **EXCETO** as seguintes pastas:

### ❌ PASTAS EXCLUÍDAS (NÃO INCLUIR):
- `node_modules/` (dependências npm)
- `.angular/` (cache de build Angular)
- `.vscode/` (configurações do editor)

### ✅ FICHEIROS E PASTAS INCLUSOS:
```
24_EluisioDias_Meaux/
├── src/
│   ├── app/
│   │   ├── services/
│   │   ├── tab1/
│   │   ├── tab2/
│   │   ├── tab3/
│   │   ├── detalhe-livro/
│   │   ├── explore-container/
│   │   ├── dados-livros.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   │   └── perfil.jpg (foto do autor)
│   ├── environments/
│   ├── theme/
│   │   └── variables.scss (cores globais)
│   ├── index.html
│   ├── main.ts
│   └── polyfills.ts
├── package.json (com todas as dependências)
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── angular.json
├── ionic.config.json
├── capacitor.config.ts
├── karma.conf.js
├── RELATORIO_PROJETO.md (relatório completo)
├── PROTOTIPOS_BAIXA_FIDELIDADE.md (PBF)
├── README.md (este ficheiro, ou instruções de uso)
└── .gitignore
```

---

## 🚀 COMO PREPARAR A ENTREGA

### Passo 1: Remover as Pastas Excluídas

Antes de criar o ZIP, remover as seguintes pastas:

**Windows (PowerShell):**
```powershell
Remove-Item -Path "node_modules" -Recurse -Force
Remove-Item -Path ".angular" -Recurse -Force
Remove-Item -Path ".vscode" -Recurse -Force
```

**Windows (CMD):**
```cmd
rmdir /s /q node_modules
rmdir /s /q .angular
rmdir /s /q .vscode
```

**Linux/Mac (Terminal):**
```bash
rm -rf node_modules .angular .vscode
```

### Passo 2: Criar o Ficheiro ZIP

Depois de remover as pastas, comprimir o diretório do projeto com o nome:

**Nome correto**: `24_EluisioDias_Meaux.zip`

#### Usando 7-Zip (Windows):
```
Clique direito na pasta "osMeusLivros" → 7-Zip → Add to archive
Nome: 24_EluisioDias_Meaux.zip
```

#### Usando Windows Explorer (Windows):
```
Clique direito na pasta → Enviar para → Pasta comprimida
Renomear para: 24_EluisioDias_Meaux.zip
```

#### Usando Terminal (Linux/Mac):
```bash
zip -r 24_EluisioDias_Meaux.zip osMeusLivros -x "osMeusLivros/node_modules/*" "osMeusLivros/.angular/*" "osMeusLivros/.vscode/*"
```

---

## 📋 VERIFICAÇÃO PRÉ-ENTREGA

Antes de enviar, verificar que:

- ✅ Ficheiro nomeado como `24_EluisioDias_Meaux.zip`
- ✅ ZIP contém pasta raiz com nome do projeto
- ✅ Ficheiro `RELATORIO_PROJETO.md` está incluído
- ✅ Ficheiro `PROTOTIPOS_BAIXA_FIDELIDADE.md` está incluído
- ✅ Ficheiro `package.json` está incluído
- ✅ Pasta `src/` com todo o código está incluída
- ✅ Pasta `src/assets/` com imagens está incluída
- ✅ **NÃO inclui** `node_modules/`
- ✅ **NÃO inclui** `.angular/`
- ✅ **NÃO inclui** `.vscode/`
- ✅ Tamanho do ficheiro ≈ 3-5 MB (sem node_modules)

---

## 🔧 COMO USAR APÓS EXTRAÇÃO

### 1. Extrair o ZIP
```bash
unzip 24_EluisioDias_Meaux.zip
cd 24_EluisioDias_Meaux
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar Localmente
```bash
ionic serve
# ou
ng serve
```

### 4. Aceder à Aplicação
- Com Ionic: http://localhost:8100
- Com Angular CLI: http://localhost:4200

---

## 📝 DOCUMENTAÇÃO INCLUÍDA

### 1. RELATORIO_PROJETO.md
Documento completo com:
- Objetivo e descrição do exercício
- Requisitos cumpridos
- Funcionalidades implementadas
- Detalhes de implementação com código
- Estrutura técnica
- Aspetos visuais e design
- Testes e validação
- Créditos
- Aspetos a melhorar
- Instruções de compilação

**Tamanho estimado**: ~8-9 páginas

### 2. PROTOTIPOS_BAIXA_FIDELIDADE.md
Documento com:
- Wireframes ASCII de cada ecrã
- Estrutura de navegação
- Padrão de cores
- Componentes principais
- Layout responsivo
- Fluxo de navegação

---

## 🎯 REQUISITOS ATENDIDOS

✅ **Ecrã de apresentação do autor** (obrigatório)
   - Nome, data de nascimento, naturalidade
   - Breve biografia
   - (Fotografia opcional, removida por escolha do utilizador)

✅ **Apresentação dos livros**
   - Lista de livros favoritos
   - Detalhes de cada livro
   - Avaliação/opinião pessoal
   - Citações marcantes
   - Classificação (1-5 estrelas)
   - Capas dos livros
   - Organização por categorias
   - Assinalar como "lidos" ou "por ler"

✅ **Requisitos Mínimos**
   - Protótipos de Baixa-Fidelidade
   - Texto e imagem
   - 4+ ecrãs distintos
   - Componente de navegação (tabs)
   - Cor predominante personalizada (#1A73E8)
   - Apresentação visual e usabilidade
   - Código estruturado e comentado
   - Relatório (máx. 10 páginas)

✨ **Funcionalidades Adicionais**
   - Serviço de filtro compartilhado
   - Serviço de autor centralizado
   - Estatísticas clicáveis
   - Capas reais dos livros
   - Sistema de stars
   - Badges visuais
   - Gradientes profissionais
   - Responsividade avançada

---

## ⚠️ NOTAS IMPORTANTES

1. **Não incluir pastas desnecessárias**
   - `node_modules/` aumentaria o ficheiro para 500+ MB
   - `.angular/` e `.vscode/` são configurações locais
   - A pessoa que recebe pode fazer `npm install` para restaurar

2. **Creditar recursos não originais**
   - Imagens das capas: Amazon Images
   - Framework Ionic: Ionic Project
   - Ícones: Ionicons
   - Tudo foi creditado no relatório

3. **Respeitar a data limite**
   - Entrega até 8 de maio de 2026, 23h59
   - Atraso resulta em penalização
   - Será necessária apresentação/defesa posteriormente

4. **Verificar integrity do projecto**
   - Tudo funciona após `npm install`
   - `ionic serve` roda sem erros
   - Todos os links e routing funcionam

---

## 📞 SUPORTE

Caso haja problemas:

1. Verificar se `package.json` está correto
2. Executar `npm install` para restaurar dependências
3. Executar `npm install @ionic/cli` se necessário
4. Verificar versões: `node --version`, `npm --version`
5. Limpar cache: `npm cache clean --force`

---

**Criado para**: Projeto IHM - Os Meus Livros  
**Aluno**: Eluisio Dias  
**Data**: Maio de 2026  
**Status**: Pronto para Entrega ✅
