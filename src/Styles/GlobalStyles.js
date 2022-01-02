import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
   
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    
}
 
.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #a4acc4;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --hamburguer-menu-color: #10121A
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --hamburguer-menu-color: #F1F1F1
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.1rem;
    list-style: none;
    text-decoration: none;    
    font-family: 'Nunito', sans-serif;

}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);



}


body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
    
}
body::-webkit-scrollbar-thumb{
  
    background-color: #6b6b6b;
    height: 1rem;
}
body::-webkit-scrollbar-track{
    
    background-color: #383838;
}


.ligth-dark-mode{
    position: fixed;
    right: 0;
    top: 15%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(60%);
transition: all 0.3s ease-in-out;
    &:hover{
        transform: translateX(0);
    }
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
}

.ham-burger-menu {
      position: fixed;
      right: 1%;
      top: 3%; 
      display: none;
      z-index: 15;
      width: 5rem;
      height: 5rem;
      
      
      
      svg{
          font-size: 3rem;
          color: var(--hamburguer-menu-color);

      }
    }


    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
 a{
    color: inherit;
    font-family: inherit;
}

//global media queries
@media screen and (max-width: 1200px){
    .ham-burger-menu {
        display: block;
    }
}

`;
export default GlobalStyle;
