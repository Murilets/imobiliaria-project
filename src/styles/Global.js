import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  :root {
  --primary:rgb(247, 247, 247);
  --secondary: #15181C;
  --gray: #D9D9D9;
  --blue: #4766FF;
  --white:rgb(255, 255, 255);
  --tertiary:rgba(158, 158, 158, 0.38)
  --gray-light: #e5e1dc;
  --alt-color:rgb(192, 228, 248);
  --altwhite: rgba(241, 241, 241, 0.73);
  --lightblue:rgb(92, 181, 254)
  }

  body, html {
    overflow-x: hidden;
    width: 100%; 
  background-color: var (--primary)
  color var(--secondary);
  font-family: "Dosis", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  }
  ul, nav{list-style-type: none;}
  a{text-decoration: none;}
`