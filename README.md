# Calculadora Web
[🇺🇸 English](./README.en.md) | [🇧🇷 Português](./README.md)

![GitHub License](https://img.shields.io/github/license/emellybmuniz/calculadora-simples)
![GitHub language count](https://img.shields.io/github/languages/count/emellybmuniz/calculadora-simples)
![GitHub last commit](https://img.shields.io/github/last-commit/emellybmuniz/calculadora-simples)
![GitHub repo size](https://img.shields.io/github/repo-size/emellybmuniz/calculadora-simples)
![Project Status](https://img.shields.io/badge/Status%20-%20Finalizado%20-%20%234BC21E)

Minha primeira calculadora web desenvolvida com JavaScript puro! Este projeto marca um marco importante na minha jornada de aprendizado em desenvolvimento frontend, focando no domínio dos fundamentos do JavaScript, manipulação do DOM e design responsivo.

---

### 📋 Índice
- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Destaques & Funcionalidades](#-destaques--funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Aprendizados & Desafios](#-aprendizados--desafios)
- [Responsividade](#-responsividade)
- [Validação e Tratamento de Erros](#-validação-e-tratamento-de-erros)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Autora](#-autora)

---

## 🚀 Visão Geral do Projeto

[![Project Demonstration](src/images/project-demo.gif)](https://emellybmuniz.github.io/calculadora-simples/)

Esta foi minha **primeira calculadora web** e representa um projeto fundamental no meu aprendizado de JavaScript! Desenvolvida com foco total nos fundamentos das tecnologias web, sem uso de frameworks ou bibliotecas externas - apenas HTML, CSS e JavaScript puro.

**Contexto e Motivação:**
Este projeto nasceu da necessidade de colocar em prática os conceitos básicos de JavaScript que estava aprendendo, especialmente manipulação do DOM, eventos e lógica de programação. Foi meu primeiro contato real com a criação de uma aplicação interativa completa.

**Objetivos de Aprendizado:**
- ✅ Dominar a manipulação do DOM com JavaScript vanilla
- ✅ Aprender tratamento de eventos (click, keydown) 
- ✅ Praticar lógica de programação e estruturas condicionais
- ✅ Implementar validação básica de entrada de dados
- ✅ Aplicar conceitos de design responsivo na prática
- ✅ Entender o ciclo completo de desenvolvimento de uma aplicação web

**Por que uma Calculadora?**
Escolhi uma calculadora como primeiro projeto porque ela envolve todos os conceitos fundamentais que um dev iniciante precisa dominar: manipulação de elementos, eventos, validação, cálculos, e feedback visual - tudo em um escopo gerenciável.

**Público-alvo:** Outros desenvolvedores iniciantes que, como eu, estão dando os primeiros passos no JavaScript e querem ver um exemplo prático de como aplicar os conceitos básicos em um projeto real.

## 📂 Estrutura de Diretórios

```bash
📦 calculadora-simples/
├── src/
│   ├── script/
│   │   └── script.js         # Lógica principal da calculadora
│   └── styles/
│       └── main.css          # Estilos CSS com variáveis customizadas
├── .gitattributes            # Configurações Git para normalização
├── index.html                # Estrutura HTML da aplicação
├── LICENSE                   # Licença do projeto
└── README.md                 # Este arquivo
```

## ✨ Destaques & Funcionalidades

### 🧮 **Operações Matemáticas Básicas**
- Quatro operações fundamentais: soma (+), subtração (-), multiplicação (*) e divisão (/)
- Display simples que mostra a expressão sendo digitada
- Botão de limpar (C) para resetar os cálculos
- Execução do cálculo com o botão "=" ou tecla Enter

### 🎨 **Interface Simples e Funcional**
- Layout clean inspirado em calculadoras clássicas
- Paleta de cores suaves definida com CSS variables
- Botões responsivos com feedback visual básico
- Design grid organizado em 4 colunas para fácil navegação

### 📱 **Responsividade Básica**
- Adaptação entre desktop e mobile com media queries
- Comportamentos diferenciados para dispositivos touch
- Layout que se ajusta a diferentes tamanhos de tela

### ✅ **Validação Essencial**
- Prevenção de entrada de caracteres não numéricos
- Tratamento básico de erros com try-catch
- Sanitização simples da entrada do usuário
- Mensagens de erro quando algo dá errado ("Conta inválida!")

### 🔄 **Interação Dupla**
- Funcionamento via clique nos botões da interface
- Suporte básico para digitação via teclado
- Prevenção de operadores duplicados consecutivos

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

### Detalhes Técnicos:
- **HTML5**: Estrutura semântica básica com elementos de formulário e botões
- **CSS3**: Uso de CSS Grid para layout, custom properties para cores, e media queries para responsividade  
- **JavaScript Vanilla**: Manipulação do DOM, event listeners, e lógica básica de cálculo

## ⚙️ Pré-requisitos

**Para desenvolvimento local:**
- Navegador web moderno (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Editor de código (VS Code recomendado)
- Servidor local opcional (Live Server, Python SimpleHTTPServer, etc.)

**Para uso:**
- Qualquer navegador web com suporte a JavaScript habilitado

## 📦 Instalação

```bash
# 1. Clone este repositório
$ git clone https://github.com/emellybmuniz/calculadora-simples.git

# 2. Navegue até o diretório do projeto
$ cd calculadora-simples

# 3. Abra o arquivo index.html em seu navegador
# Ou inicie um servidor local (opcional)
$ python -m http.server 8000
# Acesse: http://localhost:8000
```

**Alternativa:** [Acesse a versão online](https://emellybmuniz.github.io/calculadora-simples/)

## 💡 Como Usar

1. **Entrada de Números** - Clique nos botões numéricos (0-9) ou use as teclas do teclado
2. **Operações Matemáticas** - Clique nos operadores (+, -, *, /) ou use as teclas correspondentes
3. **Calcular Resultado** - Pressione "=" ou a tecla Enter para executar o cálculo
4. **Limpar Display** - Clique no botão "C" ou pressione Backspace para limpar
5. **Operações em Sequência** - Execute múltiplas operações sem necessidade de limpar

### Exemplos de Uso:

```javascript
// Operações simples
7 + 3 = 10
15 - 8 = 7
6 * 4 = 24
20 / 5 = 4

// Operações em sequência
5 + 3 * 2 = 16 (precedência respeitada)
100 - 25 + 10 = 85

// Casos especiais tratados
5 / 0 = "Conta inválida!"
texto = "Conta inválida!"
```

## 📱 Responsividade

### Desktop (≥ 800px)
- Efeitos hover completos em todos os botões
- Layout otimizado para interação com mouse
- Feedback visual aprimorado com transições suaves
- Botões com estados visuais distintos (normal, hover, active)

### Mobile e Tablet (< 800px)
- Efeitos hover desabilitados para melhor performance touch
- Botões com tamanho otimizado para toque (44px mínimo)
- Layout compacto que se adapta a telas menores
- Interações touch-friendly sem conflitos de estado

**Breakpoints utilizados:**
- Mobile: < 800px (design touch-first)
- Desktop: ≥ 800px (design mouse-optimized)

## 🛡️ Validação e Tratamento de Erros

### Validações Implementadas:
- **Entrada de Teclado**: Bloquear caracteres que não sejam números ou operadores básicos
- **Operadores Repetidos**: Verificar se já existe um operador no final antes de adicionar outro
- **Expressões Válidas**: Remover caracteres perigosos antes de calcular

### Tratamento de Erros:
- **Try-catch básico** para capturar erros quando a conta não pode ser resolvida
- **Verificação de resultado infinito** para casos como divisão por zero
- **Mensagem amigável** ("Conta inválida!") quando algo dá errado
- **Limpeza de caracteres** com regex simples para manter apenas números e operadores

### Casos de Erro Tratados:
| Situação | Como Lidei | Resultado |
|----------|------------|-----------|
| Divisão por zero | Verifico se resultado é infinito | "Conta inválida!" |
| Letras digitadas | Bloqueio no event listener | Nada acontece |
| Expressão malformada | Try-catch no cálculo | "Conta inválida!" |
| Operadores seguidos | Verifico final da string | Ignora o segundo operador |

**Nota:** Como foi meu primeiro projeto, o tratamento de erros é básico mas funcional. Em projetos futuros pretendo implementar validações mais robustas!

## 🤝 Contribuição

Contribuições são sempre bem-vindas e **muito apreciadas!** Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

### Como contribuir:
1. **Fork** este repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/calculadora-simples.git`
3. **Crie uma branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
4. **Faça suas alterações** e teste completamente
5. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
6. **Push** para a branch: `git push origin feature/nova-funcionalidade`
7. **Abra um Pull Request** com descrição detalhada das mudanças

### Diretrizes para Contribuição:
- Mantenha o código simples e didático (é um projeto de aprendizado!)
- Comente as partes mais complexas para ajudar outros iniciantes
- Teste em diferentes dispositivos antes de enviar PR

## 🔑 Licença

Este projeto está licenciado sob a **Licença MIT** - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

A Licença MIT permite uso comercial, modificação, distribuição e uso privado do código, exigindo apenas a inclusão do copyright e da licença.

## ✍️ Autora

Desenvolvido por **Emelly Beatriz** com ❤️

📬 Entre em contato:

📧 emellybmuniz@gmail.com |
💼 [Linkedin](https://www.linkedin.com/in/emellybmuniz) |
🐙 [Github](https://github.com/emellybmuniz)

---

⭐ **Gostou do projeto?** Deixe uma estrela no repositório para apoiar o desenvolvimento!

