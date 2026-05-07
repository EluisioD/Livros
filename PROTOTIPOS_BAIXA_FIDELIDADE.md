# Protótipos de Baixa-Fidelidade (PBF)
## Projeto: Os Meus Livros - Aplicação Ionic

---

## 1. ECRÃ DE APRESENTAÇÃO DO AUTOR (Tab 1 - Início)

```
┌─────────────────────────────────┐
│  Identificação do Autor    [≡]  │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────────┐ │
│  │   NOME: Eluisio Dias        │ │
│  │                             │ │
│  │   • Data Nasc: 24/02/2005   │ │
│  │   • Naturalidade: Meaux, FR │ │
│  │   • Idade: 19 anos          │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ BREVE BIOGRAFIA             │ │
│  │                             │ │
│  │ Eluisio Dias nasceu a 24... │ │
│  │ Atualmente frequenta o 2.º  │ │
│  │ ano de Engenharia Informá..│ │
│  │ (texto descritivo)          │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ INTERESSES                  │ │
│  │ [Atletismo] [Programação]   │ │
│  │ [Python] [YouTube] ...      │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌────────────┐  ┌────────────┐ │
│  │ Meus Livros│  │ Mais Info  │ │
│  └────────────┘  └────────────┘ │
│                                 │
└─────────────────────────────────┘
```

---

## 2. LISTA DE LIVROS COM FILTROS (Tab 2 - Livros)

```
┌─────────────────────────────────┐
│      Meus Livros           [≡]  │
├─────────────────────────────────┤
│                                 │
│  CATEGORIAS:                    │
│  [Todas] [Ficção] [Infantil]    │
│  [Fantasia]                     │
│                                 │
│  STATUS:                        │
│  [Todos] | [Lidos] | [Por Ler]  │
│                                 │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────┐  ┌─────────────┐
│  │  [CAPA]     │  │  [CAPA]     │
│  │   1984      │  │ Principezin │
│  │ George O.   │  │  Saint-Exu  │
│  │ ⭐⭐⭐⭐⭐  │  │ ⭐⭐⭐⭐⭐  │
│  │   [LIDO]    │  │   [LIDO]    │
│  │ Ver Details │  │ Ver Details │
│  └─────────────┘  └─────────────┘
│                                 │
│  ┌─────────────┐  ┌─────────────┐
│  │  [CAPA]     │  │  [CAPA]     │
│  │  Código Da  │  │   Hobbit    │
│  │  Da Vinci   │  │  Tolkien    │
│  │ ⭐⭐⭐⭐    │  │ ⭐⭐⭐⭐⭐  │
│  │ [POR LER]   │  │ [POR LER]   │
│  │ Ver Details │  │ Ver Details │
│  └─────────────┘  └─────────────┘
│                                 │
└─────────────────────────────────┘
```

---

## 3. DETALHES DO LIVRO (Detalhe-Livro)

```
┌─────────────────────────────────┐
│  1984              [← Voltar]   │
├─────────────────────────────────┤
│                                 │
│       ┌──────────────┐          │
│       │  [CAPA IMG]  │          │
│       │   1984       │          │
│       │ George Orwell│          │
│       └──────────────┘          │
│                                 │
│  INFORMAÇÕES:                   │
│  • Género: Ficção Distópica     │
│  • Categoria: Ficção            │
│  • Ano: 1949                    │
│  • Status: ✓ Lido              │
│                                 │
│  SINOPSE:                       │
│  Winston Smith vive numa        │
│  sociedade totalitária...       │
│  (texto completo)               │
│                                 │
│  OPINIÃO PESSOAL:               │
│  Um livro assustadoramente      │
│  atual que nos faz refletir...  │
│                                 │
│  CITAÇÃO MARCANTE:              │
│  "Guerra é Paz.                 │
│   Liberdade é Escravidão.       │
│   Ignorância é Força."          │
│                                 │
│  CLASSIFICAÇÃO:                 │
│  ⭐ ⭐ ⭐ ⭐ ⭐  (5/5)         │
│                                 │
│  ┌────────────────────────────┐ │
│  │ Marcar como: [Lido/Por Ler]│ │
│  └────────────────────────────┘ │
│                                 │
└─────────────────────────────────┘
```

---

## 4. PÁGINA DO UTILIZADOR / MAIS INFORMAÇÕES (Tab 3)

```
┌─────────────────────────────────┐
│  Mais Informações          [≡]  │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────────┐ │
│  │   ELUISIO DIAS              │ │
│  │     [FOTO CIRCULAR]         │ │
│  └─────────────────────────────┘ │
│                                 │
│  IDENTIFICAÇÃO:                 │
│  • Data Nascimento: 24/02/2005  │
│  • Naturalidade: Meaux, França  │
│  • Idade: 19 anos               │
│                                 │
│  EDUCAÇÃO:                      │
│  • Curso: Eng. Informática      │
│  • Instituição: IPVC            │
│  • Ano: 2.º ano                 │
│                                 │
│  BIOGRAFIA EXPANDIDA:           │
│  (Texto completo com detalhes   │
│   sobre carreira, interesses e  │
│   projetos)                     │
│                                 │
│  INTERESSES:                    │
│  [Atletismo] [Programação]      │
│  [Websites] [Python]            │
│  [Videojogos] [Modelação 3D]    │
│  [YouTube] [LEGO]               │
│                                 │
└─────────────────────────────────┘
```

---

## 5. ESTRUTURA DE NAVEGAÇÃO

```
┌──────────────────────────────────────┐
│  TAB BAR - Navegação Principal        │
├──────────────────────────────────────┤
│                                      │
│  [🏠 Início] [📚 Livros] [👤 Info]  │
│                                      │
│  • Acesso direto aos 3 ecrãs         │
│  • Navegação entre abas              │
│  • Barra fixa ao fundo               │
│                                      │
└──────────────────────────────────────┘
```

---

## 6. PADRÃO DE CORES GLOBAL

```
┌──────────────────────────────────┐
│  ESQUEMA DE CORES PERSONALIZADO  │
├──────────────────────────────────┤
│                                  │
│ Cor Primária:    #1A73E8 (Azul)  │
│ Cor Secundária:  #0D47A1 (Azul)  │
│ Sucesso:         #4CAF50 (Verde) │
│ Aviso:           #FF9800 (Laranja)
│ Perigo:          #F44336 (Vermelho)
│                                  │
│ • Gradientes:                    │
│   #1A73E8 → #0D47A1             │
│                                  │
│ • Sombras e destaques            │
│   adaptados ao tema azul         │
│                                  │
└──────────────────────────────────┘
```

---

## 7. COMPONENTES E ELEMENTOS PRINCIPAIS

### Elementos Visuais:
- ✅ **Imagens**: Capas dos livros (URLs reais da Amazon)
- ✅ **Foto do Utilizador**: Círculo redimensionado (Tab 3)
- ✅ **Ícones**: Ionicons (home, book, person, star, etc.)
- ✅ **Cards**: Contêm informações principais
- ✅ **Badges**: Status "Lido" e "Por Ler"
- ✅ **Chips**: Categorias e interesses
- ✅ **Botões**: Navegação e ações
- ✅ **Stars**: Classificação 1-5 estrelas

### Funcionalidades Implementadas:
- ✅ **Filtro por Categoria**: Selecionar categorias
- ✅ **Filtro por Status**: Todos, Lidos, Por Ler
- ✅ **Toggle Lido/Por Ler**: Marcar livros como lidos
- ✅ **Navegação entre Ecrãs**: Tab bar + Router
- ✅ **Detalhes do Livro**: Clique para ver informações completas

---

## 8. LAYOUT RESPONSIVO

```
MOBILE (< 576px):
• Grid: 1 coluna
• Cards ocupam toda a largura
• Fonte reduzida para legibilidade

TABLET (576px - 768px):
• Grid: 2 colunas
• Espaçamento aumentado
• Fonte padrão

DESKTOP (> 768px):
• Grid: 3+ colunas
• Layout otimizado
• Espaçamento completo
```

---

## 9. FLUXO DE NAVEGAÇÃO

```
[INÍCIO]
   ↓
   • Mostra autor e info
   • Links para outras abas
   
   ↙          ↓          ↘
   
[LIVROS] ← → [DETALHES] 
   ↓           ↓
   • Filtros   • Info completa
   • Grid      • Classificação
   • Cards     • Opinião
   
   ↓
   
[MAIS INFO]
   • Foto + Bio
   • Educação
   • Interesses
```

---

## NOTAS SOBRE PROTOTIPAGEM:

Este documento descreve os protótipos de baixa-fidelidade (PBF) da aplicação "Os Meus Livros". 
Os protótipos mostram a estrutura visual e o layout de cada ecrã, sem detalhes estéticos avançados.

**Características dos PBF:**
- Apresentação simplificada da estrutura
- Foco na disposição e fluxo de informação
- Indicação de componentes interativos
- Base para desenvolvimento da interface final

Os protótipos finais foram implementados em Ionic/Angular com:
- Design responsivo
- Gradientes e sombras profissionais
- Componentes Ionic nativos
- Paleta de cores personalizada (#1A73E8)
