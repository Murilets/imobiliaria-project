# Projeto - Site de Imobiliária

Este é um pequeno projeto de uma imobiliária. Um sistema web criado para ajudar um pequeno negócio a ganhar visibilidade online, alcançar mais clientes e atrair mais atenção.

**⚠️ Importante:**  
O projeto ainda está em desenvolvimento. Algumas partes da responsividade, como a página de detalhes dos imóveis, ainda precisam ser melhoradas. No momento, esta é uma versão inicial para apresentação ao proprietário da imobiliária.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **React Router DOM** (`src/routes`): Gerenciamento das rotas entre páginas (Home, página 404 e página de detalhes do imóvel).
- **React Slick** (`src/Banner`): Carrossel de imagens no topo da Home para destacar imóveis.
- **Styled Components**: Biblioteca para escrever CSS diretamente dentro dos componentes React.
- **Responsividade**: Aplicada com media queries no Styled Components, utilizando objetos que armazenam tamanhos de dispositivos (`src/styles/Responsive.js`).

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL-do-repositório>

2. Instale as dependências:
    npm install

3. Inicie o servidor de desenvolvimento:
    npm run start

## Exemplos de Uso

-Navegar entre páginas: Clique em um imóvel na Home para abrir a página de detalhes.

-Ver imagens do imóvel: Na página de detalhes, utilize as flechas laterais para alternar  entre as fotos do imóvel.

-Testar responsividade: Acesse o site em diferentes dispositivos (celular, tablet e desktop) para conferir o comportamento adaptativo do layout (lembrando que ainda há melhorias pendentes).


## Demonstrações

### Página Inicial (Home)

![Home Print 1](./assets/PrintsImobiliaria/printsHome/Visão%20Imoveis%202.png)
![Home Print 2](./assets/PrintsImobiliaria/printsHome/Visão%20Imoveis1.png)

### Página de Detalhes

![Detalhes do Imóvel 1](./assets/PrintsImobiliaria/printsDetalhes/Visão%20Imoveis3.png)

![Detalhes do Imóvel 2](./assets/PrintsImobiliaria/printsDetalhes/Visão%20Imoveis%204.png)