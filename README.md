# Multi Step Form

Uma aplicação de formulário em múltiplas etapas, desenvolvida com foco total em acessibilidade, performance e validação customizada.

## 🎬 Demonstração

![Demonstração do Projeto](./project-in-action.gif)

## 🎨 Sobre o Projeto

**Multi Step Form** é uma aplicação web que guia o usuário através de um processo de cadastro em etapas. O projeto foi construído para oferecer uma experiência de usuário fluida e intuitiva, com validações em tempo real e feedback visual claro.

O diferencial deste projeto é a **ausência de bibliotecas externas para gerenciamento de formulário**. Toda a lógica de estado, validação e navegação entre etapas foi implementada através de **Hooks Customizados**, garantindo controle total sobre o código e máxima performance.

## ✨ Características

-   **Acessibilidade 100%**: A aplicação foi construída seguindo rigorosamente as diretrizes WCAG.
    -   Uso correto de `aria-labels`, `aria-roles` e atributos semânticos.
    -   Navegação completa via teclado.
-   **Validação Customizada**: Hooks proprietários que validam cada campo de input, garantindo dados corretos sem depender de libs pesadas.
-   **Design Responsivo**: Layout que se adapta perfeitamente a desktops, tablets e dispositivos móveis.
-   **Performance de Ponta**: Otimização focada para atingir pontuação máxima no Lighthouse.

## 📊 Performance e Acessibilidade (Lighthouse)

O projeto atingiu pontuações excelentes no Google Lighthouse, comprovando o compromisso com a performance e a acessibilidade.

### Desktop

![Lighthouse Desktop](./src/assets/lighthouse-result-desktop.png)

### Mobile

![Lighthouse Mobile](./src/assets/lighthouse-result-mobile.png)

## 🛠️ Tecnologias

Este projeto foi desenvolvido utilizando tecnologias modernas do ecossistema React, mantendo as dependências externas ao mínimo necessário:

-   **React**
-   **TypeScript**
-   **Styled Components**
-   **Vite**

> **Nota:** Nenhuma biblioteca de gerenciamento de formulário (como Formik ou React Hook Form) ou biblioteca de componentes de UI (como Material UI ou Bootstrap) foi utilizada. Tudo foi construído do zero utilizando hooks específicos para cada validação.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

-   Node.js (versão 14 ou superior)
-   npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/orafael93/substep-form.git
cd substep-form-frontend-mentor
```

2. Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O projeto será aberto automaticamente no navegador (geralmente em `http://localhost:5173`).

### Build para Produção

Para gerar o bundle otimizado para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 👨‍💻 Autor

**Rafael**

-   Email: orafaeldev@gmail.com
-   GitHub: [@orafael93](https://github.com/orafael93)

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e de portfólio.

## 🚀 Agradecimentos

-   [Frontend Mentor](https://www.frontendmentor.io/) pelo desafio de design.
