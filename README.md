# 📚 Os Meus Livros - Aplicação Ionic

Uma aplicação móvel moderna para gerir, organizar e avaliar uma biblioteca pessoal de livros favoritos.

**Desenvolvido com**: Ionic 8.0.0 | Angular 20.0.0 | TypeScript 5.9  
**Versão**: 1.0.0  
**Status**: Concluído ✅

---

## 🎯 Objetivo

Desenvolver uma aplicação móvel que permita ao utilizador:
- 📋 Visualizar informações pessoais (autor da aplicação)
- 📚 Gerir uma biblioteca de livros favoritos
- 🏷️ Organizar livros por categorias (Ficção, Infantil, Fantasia)
- ✅ Marcar livros como lidos ou por ler
- ⭐ Classificar livros (1-5 estrelas)
- 💭 Guardar opiniões e citações marcantes
- 🔍 Filtrar livros por categoria e status

---

## 📱 Ecrãs e Funcionalidades

### 1. **Página Inicial - Identificação do Autor**
- Nome, data de nascimento e naturalidade
- Breve biografia pessoal
- Lista de interesses e hobbies
- Navegação para outras secções

### 2. **Biblioteca de Livros**
- Grid responsivo com capas dos livros
- Filtro por categoria
- Filtro por status (Todos, Lidos, Por Ler)
- Visualização rápida (título, autor, classificação)
- Badges visuais para status
- Toggle para marcar como lido/por ler

### 3. **Detalhes do Livro**
- Capa em alta qualidade
- Informações completas (título, autor, género, ano)
- Sinopse completa
- Opinião pessoal do utilizador
- Citação marcante
- Classificação em estrelas
- Opção de marcar como lido/por ler

### 4. **Mais Informações**
- Foto do autor
- Informações pessoais detalhadas
- Educação e instituição
- Biografia expandida
- Lista de interesses

---

## 🎨 Design e Cores

- **Cor Primária**: `#1A73E8` (Azul Bright)
- **Cor Secundária**: `#0D47A1` (Azul Escuro)
- **Sucesso**: `#4CAF50` (Verde) - Status Lido
- **Aviso**: `#FF9800` (Laranja) - Status Por Ler
- **Design Responsivo**: Mobile, Tablet, Desktop
- **Tipografia**: Sistema Ionic padrão

---

## 📖 Livros Inclusos

1. **1984** - George Orwell (Ficção) ⭐⭐⭐⭐⭐
2. **O Principezinho** - Antoine de Saint-Exupéry (Infantil) ⭐⭐⭐⭐⭐
3. **O Código Da Vinci** - Dan Brown (Ficção) ⭐⭐⭐⭐
4. **O Hobbit** - J.R.R. Tolkien (Fantasia) ⭐⭐⭐⭐⭐

*Nota: As capas são URLs reais da Amazon*

---

## 🛠️ Instalação e Execução

### Prerequisitos
```bash
# Node.js 18+
# npm ou yarn
# Ionic CLI
npm install -g @ionic/cli

# Angular CLI (opcional)
npm install -g @angular/cli
```

### Passos

1. **Clonar/Extrair o Projeto**
```bash
cd osMeusLivros
```

2. **Instalar Dependências**
```bash
npm install
```

3. **Executar Localmente**
```bash
# Opção 1: Ionic Server
ionic serve
# Aceder: http://localhost:8100

# Opção 2: Angular CLI
ng serve
# Aceder: http://localhost:4200
```

4. **Build para Produção**
```bash
ionic build --prod
```

5. **Build para Dispositivos Móveis** (Capacitor)
```bash
ionic capacitor add ios
ionic capacitor add android
ionic capacitor build ios
ionic capacitor build android
```

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── services/
│   │   ├── autor.service.ts       # Dados do autor
│   │   └── filtro.service.ts      # Gestão de filtros
│   ├── tab1/                       # Página Inicial
│   ├── tab2/                       # Biblioteca
│   ├── tab3/                       # Mais Informações
│   ├── detalhe-livro/             # Detalhes do Livro
│   ├── tabs/                       # Navegação (Tab Bar)
│   ├── dados-livros.ts            # Dados estáticos
│   └── app.module.ts              # Módulo principal
├── assets/
│   └── perfil.jpg                 # Foto do autor
├── theme/
│   └── variables.scss             # Variáveis de cor
└── index.html

angular.json
tsconfig.json
package.json
ionic.config.json
```

---

## 🔑 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| **Ionic** | 8.0.0 | Framework móvel |
| **Angular** | 20.0.0 | SPA Framework |
| **TypeScript** | 5.9.0 | Linguagem |
| **Sass** | - | Estilos |
| **RxJS** | 7.8.x | Reatividade |
| **Capacitor** | 6.0.0 | Native Access |
| **Ionicons** | 7.0.0 | Ícones |

---

## ✨ Funcionalidades Especiais

✅ **Serviço de Filtro Compartilhado**
   - Sincronização de filtros entre componentes via RxJS

✅ **Serviço de Autor**
   - Centralização de dados do utilizador

✅ **Estatísticas Clicáveis**
   - Números na página inicial levam a filtros específicos

✅ **Capas Reais**
   - URLs reais da Amazon para visibilidade profissional

✅ **Sistema de Stars**
   - Classificação 1-5 estrelas por livro

✅ **Badges Visuais**
   - Indicadores "Lido" (verde) e "Por Ler" (laranja)

✅ **Gradientes Profissionais**
   - Efeitos visuais com gradientes personalizados

✅ **Responsividade Total**
   - Media queries para mobile, tablet e desktop

---

## 🧪 Testes

### Testes Unitários
```bash
ng test
```

### Testes E2E
```bash
ng e2e
```

---

## 📊 Requisitos Cumpridos

### Requisitos Mínimos ✅
- ✅ Ecrã de apresentação do autor (obrigatório)
- ✅ Apresentação dos livros com detalhes
- ✅ 4+ ecrãs distintos
- ✅ Componente de navegação (tabs)
- ✅ Cor predominante personalizada
- ✅ Texto e imagem
- ✅ Apresentação visual e usabilidade
- ✅ Código estruturado e comentado
- ✅ Protótipos de Baixa-Fidelidade
- ✅ Relatório (máx. 10 páginas)

### Funcionalidades Adicionais ✨
- ✨ Filtros avançados (categoria + status)
- ✨ Serviços compartilhados
- ✨ Design responsivo avançado
- ✨ Capas reais dos livros
- ✨ Sistema completo de avaliação

---

## 📚 Documentação

- **RELATORIO_PROJETO.md** - Relatório completo (10 páginas)
- **PROTOTIPOS_BAIXA_FIDELIDADE.md** - Wireframes e PBF
- **INSTRUCOES_ENTREGA.md** - Guia de entrega
- **README.md** - Este ficheiro

---

## 🚀 Próximas Melhorias

- [ ] Persistência com LocalStorage/Firebase
- [ ] Sistema de autenticação
- [ ] Funcionalidades sociais (partilha)
- [ ] Busca avançada
- [ ] Integração com APIs externas (Google Books)
- [ ] Modo escuro
- [ ] Internacionalização (i18n)
- [ ] Testes unitários e E2E completos
- [ ] Exportação de dados (PDF, CSV)
- [ ] Sincronização cloud

---

## 🤝 Créditos

### Recursos Utilizados
- **Ionic Framework** - https://ionicframework.com
- **Angular** - https://angular.io
- **Ionicons** - https://ionicons.com
- **Capas dos Livros** - Amazon Images
- **Imagem de Perfil** - Utilizador (Samsung Gallery)

### Desenvolvido por
**Eluisio Dias**  
Engenharia Informática - 2.º Ano  
IPVC - Escola Superior de Tecnologia e Gestão  
Maio de 2026

---

## 📝 Licença

Este projeto foi desenvolvido como exercício académico da disciplina IHM (Interação Homem-Máquina).

---

## 📞 Suporte

### Problemas Comuns

**Erro: "Module not found"**
```bash
npm install
```

**Porta 8100 em uso**
```bash
ionic serve --port 8101
```

**Limpar cache**
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

**Status do Projeto**: ✅ Concluído e Pronto para Entrega  
**Última Atualização**: 8 de maio de 2026  
**Versão**: 1.0.0
