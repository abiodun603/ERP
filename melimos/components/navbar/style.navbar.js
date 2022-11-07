import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/theme/theme";
import blog from "../../assets/image/blog.svg"
export const NavbarContainer = styled.div `
  height: 10vh;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0  6rem;
  // position: fixed;
  // top: 0;

  .n-left{
      // background: red;
      // flex: 1;
      display: flex;
      align-items: center;

      .nav__logo{
          width: 100px;
          display: none;
      }
  }

  .n-right {
      // flex: 1;
      display: flex;
      justify-content: center;

      .n-list {
          display: flex;
          align-items: center;
          // alig
          ul{
              display: flex;
              gap: 2rem;
              margin-right: 4rem;
          }
          a{
              color: ${COLORS.kblack};
              font-weight: 400;
              font-size: 16px;
          }
      }
  }
`

// ========== BANNER STYLE ========== //
export const BannerContainer = styled.div `
  height: 90vh;
  width: 100%;
  padding: 0  9rem;
  display: flex;
  align-items: center;
  position: relative;

  .nav-earth{
    // position: absolute;
    // top: 0;
    // right: 0;
  }

  .learn__circle{
      height: 74px;
      width: 74px;
      background: #FFFFFF;
      box-shadow: -13.7661px 10.5893px 33.8858px rgba(0, 81, 255, 0.3);   
      
  }

  .banner{
      background-image: 
      .bannerImagePosition{
          .swift{
              display: none;
              position: absolute;
          }
      }
  }
  
  .blue__nav--blur{
    position: absolute;
    width: 406px;
    height: 406px;
    background-color: ${COLORS.kprimary};
    top: -3rem;
    left: -1rem;
    opacity: 0.4;
    z-index: -100;
    filter: blur(180px);  
  }

  .red__nav--blur{
    position: absolute;
    width: 406px;
    height: 406px;
    background-color: ${COLORS.kred};
    // top: -50%;
    right: 0;
    opacity: 0.31;
    z-index: -100;
    filter: blur(383px);  
  }
`

// ========== ABOUT STYLE ========== //
export const AboutContainer = styled.div `
    height: 100vh;
    width: 100%;
    padding: 0 10rem;
    align-items: center;
    position: relative;
`

// ========== SERVICE STYLE ========== //
export const ServiceContainer = styled.div `
  height: 100vh;
  width: 100%;
  padding: 0 10rem;
  align-items: center;
  position: relative;

  .blue__nav--blur{
    position: absolute;
    width: 324px;
    height: 324px;
    background-color: ${COLORS.kprimary};
    right: 0;
    top: 20%;
    opacity: 0.3;
    z-index: -100;
    filter: blur(200px);  
  }

  .red__nav--blur{
    position: absolute;
    width: 366px;
    height: 366px;
    background-color: ${COLORS.kred};
    top: 0%;
    left: 0;
    opacity: 0.14;
    z-index: -100;
    filter: blur(200px);  
  }
  .yellow__nav--blur{
    position: absolute;
    width: 316px;
    height: 316px;
    background-color: ${COLORS.kyellow};
    top: 30%;
    left: 0;
    opacity: 0.23;
    z-index: -100;
    filter: blur(383px);  
  }
`

// ========== MISSION STYLE ========== //
export const MissionContainer = styled.div `
  height: 100%;
  width: 100%;
  padding: 0 10rem;
  align-items: center;
  position: relative;

  .blue__nav--blur{
    position: absolute;
    width: 347px;
    height: 347px;
    background-color: ${COLORS.kprimary};
    left: 0;
    top: 20%;
    opacity: 0.4;
    z-index: -100;
    filter: blur(200px);  
  }

  .green__nav--blur{
    position: absolute;
    width: 258px;
    height: 258px;
    background-color: ${COLORS.kgreen};
    top: 35%;
    right: 0;
    opacity: 0.22;
    z-index: -100;
    filter: blur(383px);  
  }
  .yellow__nav--blur{
    position: absolute;
    width: 316px;
    height: 316px;
    background-color: ${COLORS.kyellow};
    top: -4rem;
    right: 0;
    opacity: 0.3;
    z-index: -100;
    filter: blur(383px);  
  }

`

// ========== ACHIEVE STYLE ========== //
export const AchieveContainer= styled.div `
  max-width: 100%;
  padding: 6rem 12rem;
  background: ${COLORS.kwhite};
  display: flex;
  justify-content: center;
  flex-direction: column;

  .track__grid {
    display: grid;
    grid-gap: 10rem;
    padding: 16px;
    grid-template-columns: repeat(3, 1fr);
    @media  screen and (min-width: 368px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media  screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media  screen and (min-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media  screen and (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media  screen and (min-width: 1500px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .achievement__tile{
    display: flex;
    align-items: flex-end;

    .achieve__frame{
      h2{
        font-weight: 700;
        font-size: 60px;
      }

      p{
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: ${SIZES.h3};
        color: ${COLORS.kblack3};
        line-height: 1.2;
      }
    }
  }


  .progressive--line{
    height: 137px;
    width: 6px;
    background: #E1E7EC;;
    position: relative;

    span{
      position: absolute;
      height: 56px;
      width: 6px;
      bottom: 0;
      background: ${COLORS.kprimary};
    }
  }

`

// ========== Agile STYLE ========== //
export const AgileContainer = styled.div `
  width: 100%;
  padding: 2rem 10rem 6rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.kwhite};
  
`

// ========== PROJECT STYLE ========== //
export const ProjectContainer = styled.div `
  height: 100%;
  width: 100%;
  padding: 8rem 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  // background: black;
  z-index:  -100;

  .button__center{
    display: flex;
    justify-content: center;
  }

  .yellow__nav--blur{
    position: absolute;
    width: 347px;
    height: 347px;
    background-color: ${COLORS.kyellow};
    left: 0;
    top: 0%;
    opacity: 0.3;
    z-index: -9;
    filter: blur(150px);  
  }

  .red__nav--blur{
    position: absolute;
    width: 395px;
    height: 395px;
    background-color: ${COLORS.kred};
    top: 70%;
    left: 0;
    opacity: 0.1;
    z-index: -10 0;
    filter: blur(150px);  
  }
  .blue__nav--blur{
    position: absolute;
    width: 316px;
    height: 316px;
    background-color: ${COLORS.kprimary};
    top: 0%;
    right: 0;
    opacity: 0.3;
    z-index: -100;
    filter: blur(150px);  
  }

  .green__nav--blur{
    position: absolute;
    width: 258px;
    height: 258px;
    background-color: ${COLORS.kgreen};
    top: 40%;
    right: 0;
    opacity: 0.22;
    z-index: -100;
    filter: blur(250px);  
  }

  .purple__nav--blur{
    position: absolute;
    width: 316px;
    height: 316px;
    background-color: ${COLORS.kpurple};
    bottom: 5%;
    right: 0;
    opacity: 0.22;
    z-index: -100;
    filter: blur(203px);  
  }
`


// ========== Agile STYLE ========== //
export const BlogContainer = styled.div `
    height: 100vh;
    width: 100%;
    padding: 0 10rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .grid{
        .blue-background{
            background: ${COLORS.kprimary}; 
        }
    }
   `
// ========== Agile STYLE ========== //
export const FooterContainer = styled.div  `
  height: 100%;
  max-width: 100%;
  background: #0A0929;
  padding: 5rem 0 2rem 0;

  h3{
    color: ${COLORS.kwhite};
    font-weight: 600;
    font-size: 16px;
    margin-bottom: .8rem;
  }

  ul {
    li{
      color : #B8C4CE;
      font-weight: 400;
      line-height: 2.6;
      font-size: 14px;
    }
  }

  .footer--icons{
    .icons{
      color: ${COLORS.kwhite};
      margin: 5rem 1.5rem;
    }
  }
`


// ========== TOP STORIES STYLE ========== //
export const TopContainer = styled.div `
  max-width: 100%;
  height: 100%;
  padding: 3rem 6rem;
`


// ========== TOP STORIES STYLE ========== //
export const OtherContainer = styled.div `
  max-width: 100%;
  height: 100%;
  padding: 8rem 6rem;
`

// ========== TOP STORIES STYLE ========== //
export const CatergoryContainer = styled.div `
  width: 100%;
  height: 557px;
  padding: 8rem 6rem;
  display flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${COLORS.kwhite};
`

// ========== TOP STORIES STYLE ========== //
export const BlogLandContainer = styled.div `
  width: 100%;
  height: 100vh;
  padding: 8rem 6rem;
  display flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .search{
    background: linear-gradient(108.96deg, #0051FF 0%, #729EFC 88.62%);
  }
`