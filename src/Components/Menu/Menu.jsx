import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";

const Menu = ({ menuItem }) => {
  return (
    <MenuItemStyle>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portofolio-content">
              <div className="portofolio-img">
                <div className="imga">
                  <img src={item.image} alt=""></img>
                </div>
                <ul>
                  <li>
                    <a href={item.link1} target="_blank" rel="noreferrer">
                      <GitHub />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyle>
  );
};

const MenuItemStyle = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 950px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }
  h6 {
    font-size: 1.5rem;
    color: var(--white-color);
    padding: 0.7rem 0;
  }

  .grid-item {
    .portofolio-content {
      display: block;
      position: relative;

      .portofolio-img {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        .imga {
          border: 1px solid var(--border-color);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 100%;
          height: 30vh;
          object-fit: cover;
        }
        ul {
          position: absolute;
          display: flex;
          color: white;
          transition: all 1s ease-in-out;
          opacity: 0;
          transform: translateY(20px);
          li {
            &:not(:last-child) {
              margin-right: 1rem;
            }
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                font-size: 3.8rem;
                padding: 1rem;
                background: var(--border-color);
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                transition: all 0.3s ease-in-out;
                &:hover {
                  background-color: var(--primary-color);
                }
              }
            }
          }
        }

        &:before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          width: 0;
          height: 0;
          background-color: white;
          display: block;
          transition: all 0.3s ease-in-out;
          transform-origin: left;
        }
      }

      .portofolio-img:hover {
        ul {
          transform: translateY(0);
          display: flex;
          position: absolute;
          opacity: 1;
          transition: all 1s ease-in-out;
          /* a {
          margin-right: 2rem;

          svg {
            font-size: 4rem;
            padding: 0.4rem;
            background: red;
            width: 4rem;
            height: 4rem;
          }
        } */
        }
        &::before {
          position: absolute;

          width: calc(100% - 4%);
          height: calc(100% - 8%);
          background-color: white;
          display: flex;
          opacity: 0.9;
        }
      }
    }
  }
`;
export default Menu;
