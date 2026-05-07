# RELATÓRIO DO PROJETO: OS MEUS LIVROS
## Aplicação Móvel Ionic para Gestão de Biblioteca Pessoal

**Disciplina**: Interação Homem-Máquina (IHM)  
**Curso**: Engenharia Informática - 2.º Ano  
**Instituto**: Instituto Politécnico de Viana do Castelo (IPVC)  
**Escola**: Escola Superior de Tecnologia e Gestão  
**Aluno**: Eluisio Dias (DOB: 24/02/2005)  
**Data**: Maio de 2026  
**Framework**: Ionic 8.0.0 com Angular 20.0.0  

---

## 1. OBJETIVO E DESCRIÇÃO

### 1.1 Objetivo do Exercício

Desenvolver uma aplicação móvel utilizando a framework Ionic subordinada ao tema "Os Meus Livros", implementando funcionalidades de gestão, organização e avaliação de uma biblioteca pessoal de livros favoritos.

### 1.2 Descrição Sumária

A aplicação "Os Meus Livros" é uma solução móvel que permite ao utilizador:
- Visualizar informações pessoais (autor da aplicação)
- Gerir uma biblioteca de livros favoritos com categorização
- Marcar livros como lidos ou por ler
- Visualizar detalhes completos de cada livro
- Filtrar livros por categoria e status de leitura
- Consultar avaliações, citações e opiniões pessoais sobre os livros

A aplicação utiliza um design responsivo com uma paleta de cores personalizada (azul #1A73E8) e componentes Ionic nativos para uma experiência de utilizador otimizada.

---

## 2. REQUISITOS CUMPRIDOS

### 2.1 Requisitos Mínimos ✅

| Requisito | Status | Detalhes |
|-----------|--------|----------|
| Ecrã de apresentação do autor | ✅ | Nome, data de nascimento, naturalidade e biografia |
| Apresentação dos livros | ✅ | Lista com capas, detalhes, categorias e status |
| Mínimo 4 ecrãs distintos | ✅ | 4 ecrãs: Início, Livros, Detalhes, Mais Informações |
| Componente de navegação | ✅ | Tab navigation (3 abas) + Routing |
| Cor predominante personalizada | ✅ | #1A73E8 (azul) em tema global |
| Média: texto e imagem | ✅ | Capas, ícones, texto estruturado |
| Apresentação visual e usabilidade | ✅ | Design profissional com gradientes e espaçamento |
| Código estruturado e comentado | ✅ | Componentes bem organizados com JSDoc |
| Protótipos de Baixa-Fidelidade | ✅ | Documento detalhado com wireframes ASCII |
| Relatório (máx. 10 páginas) | ✅ | Este documento |

### 2.2 Requisitos Adicionais Implementados ✨

| Funcionalidade Adicional | Descrição |
|--------------------------|-----------|
| Serviço de Filtro Compartilhado | `FiltroService` para sincronizar filtros entre componentes |
| Serviço de Autor | `AutorService` centraliza dados do autor |
| Estatísticas Clicáveis | Números na página inicial levam a filtros específicos |
| Capas Reais | URLs reais da Amazon para os livros |
| Sistema de Stars | Classificação 1-5 estrelas por livro |
| Badges Visuais | Indicadores "Lido" e "Por Ler" nos cards |
| Gradientes Profissionais | Efeitos visuais com gradientes personalizados |
| Responsividade Avançada | Media queries para diferentes tamanhos de ecrã |

---

## 3. FUNCIONALIDADES IMPLEMENTADAS

### 3.1 Funcionalidades Principais

#### 1. **Página Inicial (Tab 1) - Identificação do Autor**
- Apresentação do nome, data de nascimento e naturalidade
- Breve biografia descritiva
- Lista de interesses em chips clicáveis
- Botões de navegação para outras secções
- **Tipo**: Requisito Obrigatório

#### 2. **Biblioteca de Livros (Tab 2) - Gestão e Filtros**
- Lista de 4 livros favoritos com capas em grid responsivo
- Filtro por categoria (Todas, Ficção, Infantil, Fantasia)
- Filtro por status (Todos, Lidos, Por Ler)
- Cards com informação resumida (título, autor, classificação)
- Badges visuais (verde para "Lido", laranja para "Por Ler")
- Toggle para marcar livros como lidos/por ler
- Botão para ver detalhes completos
- **Tipo**: Requisito Obrigatório

#### 3. **Detalhes do Livro - Informação Completa**
- Capa do livro em alta qualidade
- Todos os dados: título, autor, género, categoria, ano
- Sinopse completa
- Opinião pessoal do utilizador
- Citação marcante do livro
- Classificação em estrelas (1-5)
- Status (Lido/Por Ler) com toggle
- Botão de voltar
- **Tipo**: Requisito Obrigatório

#### 4. **Informações Pessoais (Tab 3) - Mais Detalhes**
- Foto circular redimensionada do autor
- Identificação completa (data de nascimento, naturalidade, idade)
- Educação (curso, instituição, ano)
- Biografia expandida com múltiplos parágrafos
- Lista completa de interesses e hobbies
- **Tipo**: Requisito Complementar

---

## 4. DETALHES DE IMPLEMENTAÇÃO

### 4.1 Estrutura de Ficheiros

```
src/app/
├── services/
│   ├── autor.service.ts          # Centraliza dados do autor
│   └── filtro.service.ts         # Gerencia filtros globais
├── tab1/                          # Página Inicial (Autor)
│   ├── tab1.page.ts
│   ├── tab1.page.html
│   └── tab1.page.scss
├── tab2/                          # Biblioteca de Livros
│   ├── tab2.page.ts
│   ├── tab2.page.html
│   └── tab2.page.scss
├── tab3/                          # Mais Informações
│   ├── tab3.page.ts
│   ├── tab3.page.html
│   └── tab3.page.scss
├── detalhe-livro/                 # Detalhes do Livro
│   ├── detalhe-livro.page.ts
│   ├── detalhe-livro.page.html
│   └── detalhe-livro.page.scss
├── dados-livros.ts                # Dados estáticos dos livros
└── theme/variables.scss           # Variáveis de cor globais
```

### 4.2 Dados dos Livros (dados-livros.ts)

```typescript
export const LIVROS = [
  {
    id: 1,
    titulo: '1984',
    autor: 'George Orwell',
    genero: 'Ficção Distópica',
    categoria: 'Ficção',
    ano: 1949,
    capa: 'https://images-na.ssl-images-amazon.com/images/P/0451524934.01.L.jpg',
    lido: true,
    sinopse: 'Winston Smith vive numa sociedade totalitária...',
    opiniao: 'Um livro assustadoramente atual...',
    citacao: 'Guerra é Paz. Liberdade é Escravidão. Ignorância é Força.',
    classificacao: 5
  },
  // ... mais 3 livros
];
```

**Livros Inclusos:**
1. **1984** - George Orwell (Ficção) - ⭐⭐⭐⭐⭐
2. **O Principezinho** - Antoine de Saint-Exupéry (Infantil) - ⭐⭐⭐⭐⭐
3. **O Código Da Vinci** - Dan Brown (Ficção) - ⭐⭐⭐⭐
4. **O Hobbit** - J.R.R. Tolkien (Fantasia) - ⭐⭐⭐⭐⭐

### 4.3 Serviços (Services)

#### AutorService
```typescript
@Injectable({ providedIn: 'root' })
export class AutorService {
  public autor = {
    nome: 'Eluisio Dias',
    dataNascimento: '24 de fevereiro de 2005',
    naturalidade: 'Meaux, França',
    idade: 19,
    foto: 'assets/perfil.jpg',
    biografia: '...',
    interesses: [...]
  };
  
  getAutor() { return this.autor; }
}
```

#### FiltroService
```typescript
@Injectable({ providedIn: 'root' })
export class FiltroService {
  private statusFiltroSubject = new BehaviorSubject<string>('todos');
  public statusFiltro$ = this.statusFiltroSubject.asObservable();
  
  setStatusFiltro(status: string) { 
    this.statusFiltroSubject.next(status); 
  }
}
```

### 4.4 Componente Tab2 (Filtros e Lista)

```typescript
export class Tab2Page implements OnInit {
  public listaLivros = LIVROS;
  public livrosFiltrados = LIVROS;
  public categorias: string[] = [];
  public categoriaSelecionada: string = 'Todas';
  public statusFiltro: string = 'todos';

  ngOnInit() {
    this.categorias = ['Todas', ...new Set(this.listaLivros.map(l => l.categoria))];
    this.filtroService.statusFiltro$.subscribe(status => {
      this.statusFiltro = status;
      this.aplicarFiltros();
    });
  }

  aplicarFiltros() {
    this.livrosFiltrados = this.listaLivros.filter(livro => {
      const categoria = this.categoriaSelecionada === 'Todas' || 
                       livro.categoria === this.categoriaSelecionada;
      let status = true;
      if (this.statusFiltro === 'lido') status = livro.lido === true;
      else if (this.statusFiltro === 'por-ler') status = livro.lido === false;
      return categoria && status;
    });
  }
}
```

### 4.5 Tema Global (theme/variables.scss)

```scss
// Variáveis de cor personalizadas
$blue-primary: #1a73e8;
$blue-secondary: #0d47a1;
$green-success: #4caf50;
$orange-warning: #ff9800;
$red-danger: #f44336;

// Aplicado globalmente em toda a aplicação
:root {
  --ion-color-primary: #{$blue-primary};
  --ion-color-primary-rgb: 26, 115, 232;
  --ion-color-primary-shade: #{$blue-secondary};
  // ...
}
```

---

## 5. ESTRUTURA TÉCNICA

### 5.1 Stack Tecnológico

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| Ionic | 8.0.0 | Framework móvel |
| Angular | 20.0.0 | Framework web/SPA |
| TypeScript | 5.9.0 | Linguagem de programação |
| RxJS | 7.8.x | Programação reativa |
| Sass | - | Pré-processador CSS |
| Capacitor | 6.0.0 | Native access |

### 5.2 Configuração TypeScript

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "strict": true,
    "moduleResolution": "node",
    "target": "es2022",
    "module": "es2020",
    "types": ["jasmine"]
  }
}
```

### 5.3 Dependências Principais

```json
{
  "@ionic/angular": "^8.0.0",
  "@angular/router": "^20.0.0",
  "@angular/common": "^20.0.0",
  "rxjs": "^7.8.0",
  "ionicons": "^7.0.0"
}
```

---

## 6. ASPETOS VISUAIS E DESIGN

### 6.1 Paleta de Cores

- **Primária**: #1A73E8 (Azul Bright) - Cor principal da app
- **Secundária**: #0D47A1 (Azul Escuro) - Acentos e gradientes
- **Sucesso**: #4CAF50 (Verde) - Status "Lido"
- **Aviso**: #FF9800 (Laranja) - Status "Por Ler"
- **Perigo**: #F44336 (Vermelho) - Ações destrutivas

### 6.2 Elementos Visuais

- **Gradientes**: #1A73E8 → #0D47A1 em cards principais
- **Sombras**: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)`
- **Border Radius**: 12px para cards, 8px para botões
- **Espaçamento**: 16px padrão, 8px reduzido, 24px expandido
- **Tipografia**: Sistema de fontes Ionic padrão

### 6.3 Componentes Utilizados

- **ion-card**: Containers de informação
- **ion-grid/ion-row/ion-col**: Layout responsivo
- **ion-chip**: Categorias e interesses
- **ion-icon**: Ícones interativos (Ionicons)
- **ion-button**: Ações e navegação
- **ion-segment**: Seleção de status
- **ion-list/ion-item**: Listas de informação
- **ion-img**: Imagens (capas e fotos)

---

## 7. TESTES E VALIDAÇÃO

### 7.1 Funcionalidades Testadas

✅ Navegação entre abas  
✅ Carregamento de dados dos livros  
✅ Filtros por categoria funcionam corretamente  
✅ Filtros por status funcionam corretamente  
✅ Toggle Lido/Por Ler persiste durante a sessão  
✅ Clique em livro abre página de detalhes  
✅ Voltar da página de detalhes funciona  
✅ Imagens carregam corretamente  
✅ Design responsivo em diferentes tamanhos  
✅ Cores e gradientes aplicados globalmente  

### 7.2 Compatibilidade

- ✅ Desenvolvimento: `ng serve` (localhost:4200)
- ✅ Produção: `ionic serve` (localhost:8100)
- ✅ Build: `ionic build`
- ✅ Testes: Configuração Jasmine/Karma disponível

---

## 8. ORIGINALIDADE E CRÉDITOS

### 8.1 Componentes Originais

✅ Arquitetura de serviços (AutorService, FiltroService)  
✅ Sistema de filtros compartilhados com RxJS  
✅ Design personalizado com paleta azul  
✅ Dados dos livros com informações pessoais  
✅ Layout responsivo customizado  
✅ Estrutura de componentes bem organizada  

### 8.2 Recursos Externos Creditados

| Recurso | Origem | Uso |
|---------|--------|-----|
| Ionic Framework | https://ionicframework.com | Framework base |
| Angular | https://angular.io | Framework SPA |
| Ionicons | https://ionicons.com | Ícones visuais |
| Capas dos Livros | Amazon Images | Imagens dos livros |
| Imagem de Perfil | Utilizador (Samsung Gallery) | Foto do autor |

**Nota**: Todos os recursos utilizados que não foram desenvolvidos pelo autor foram claramente creditados. A não observância desta prática resultaria na eliminação do exercício, conforme indicado no guião de avaliação.

---

## 9. ASPETOS QUE PODERIAM SER MELHORADOS

### 9.1 Funcionalidades Futuras

1. **Persistência de Dados**
   - Implementar LocalStorage ou Firebase para salvar dados offline
   - Sincronizar com servidor na cloud

2. **Sistema de Autenticação**
   - Login de utilizadores
   - Perfis personalizados
   - Sincronização entre dispositivos

3. **Funcionalidades Sociais**
   - Partilha de avaliações
   - Comentários em livros
   - Recomendações de amigos

4. **Busca Avançada**
   - Pesquisa por texto
   - Filtros por ano, autor, género
   - Sugestões inteligentes

5. **Integração com APIs Externas**
   - Google Books API para adicionar livros
   - OpenLibrary para informações adicionais
   - ISBN lookup

### 9.2 Melhorias Técnicas

1. **Otimização de Performance**
   - Lazy loading de imagens
   - Virtual scrolling para listas grandes
   - Cache de componentes

2. **Testes Unitários**
   - Testes para serviços (Jasmine)
   - Testes para componentes
   - E2E testing com Protractor/Cypress

3. **Internacionalização (i18n)**
   - Suporte multi-linguagem
   - Tradução de conteúdo

4. **Acessibilidade**
   - ARIA labels para screen readers
   - Melhor contraste de cores
   - Navegação por teclado

5. **Segurança**
   - Validação de entrada
   - Proteção contra XSS
   - Encriptação de dados sensíveis

### 9.3 Melhorias de UX

1. **Animações e Transições**
   - Animações de entrada/saída de páginas
   - Transições suaves entre estados
   - Loading spinners

2. **Notificações**
   - Toasts para ações completadas
   - Modais para confirmação
   - Alerts para validação

3. **Temas**
   - Modo escuro (Dark Mode)
   - Temas personalizáveis pelo utilizador
   - Temas sazonais

4. **Exportação de Dados**
   - Exportar lista de livros em PDF
   - CSV export para análise
   - Impressão amigável

---

## 10. CONCLUSÃO

O projeto "Os Meus Livros" foi desenvolvido com sucesso, cumprindo todos os requisitos mínimos especificados no guião. A aplicação apresenta uma interface intuitiva, design profissional e funcionalidades bem implementadas para a gestão de uma biblioteca pessoal.

Os pontos fortes do projeto incluem:
- ✅ Design responsivo e visual apelativo
- ✅ Código bem estruturado e documentado
- ✅ Funcionalidades de filtro e navegação eficientes
- ✅ Paleta de cores personalizada e consistente
- ✅ Componentes reutilizáveis e serviços bem organizados

O desenvolvimento respeitou princípios de IHM, com foco em usabilidade e experiência do utilizador, demonstrando compreensão prática dos conceitos da disciplina.

---

## ANEXO: INSTRUÇÕES DE COMPILAÇÃO E EXECUÇÃO

### Prerequisitos
```bash
Node.js (v18+)
npm ou yarn
Ionic CLI: npm install -g @ionic/cli
Angular CLI: npm install -g @angular/cli
```

### Instalação
```bash
cd osMeusLivros
npm install
```

### Desenvolvimento
```bash
# Servir aplicação localmente
ionic serve          # localhost:8100
# ou
ng serve            # localhost:4200
```

### Build
```bash
# Build para produção
ionic build --prod

# Build para Capacitor (iOS/Android)
ionic capacitor build ios
ionic capacitor build android
```

### Teste
```bash
# Executar testes unitários
ng test

# Executar testes E2E
ng e2e
```

---

**Data de Entrega**: 8 de maio de 2026  
**Ficheiro**: `24_EluisioDias_Meaux.zip`  
**Tamanho do Ficheiro**: ~5-8 MB (sem node_modules, .angular, .vscode)

