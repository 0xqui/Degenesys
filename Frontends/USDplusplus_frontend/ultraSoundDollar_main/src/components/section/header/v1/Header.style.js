import styled from "styled-components";

import headerbg from "../../../../assets/images/garybucksheader.png"


const NavWrapper = styled.nav`

  z-index: 999;
  &.Degenesys_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    transition: all 0.3s;

    &.sticky {
      background-image: url(${headerbg});

      max-width: 100%;
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;






      position: fixed;
      top: 0;
      width: 100%;

      backdrop-filter: blur(15px);
      z-index: 1000;
      margin-top: 0px;
      transition: all 0.2s;
    }
  }

  .switchNet {
    margin-left: 10px;
  }

  .Degenesys_menu_sect {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Degenesys_menu_left_sect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15%;

    &:hover {
      background: 
    }


  }

  .Degenesys_menu_right_sect {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .Degenesys_menu_list {
    margin-left: 65px;
    margin-right: 96px;
    max-width: 514px;
    min-width: 409px;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 0;




      }

      li {
        position: relative;
        cursor: pointer;

        a {
          font-family: "Bakbak One";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          text-transform: uppercase;
          color: #E8E9C9;
        }

        &:hover {
          a {
            color: #228D57;
            font-family: "Press Start 2P";
          }
        }

        /* submenu */
        &.submenu {
          .sub_menu_sect {
            background: transparent;
            border-top: 50px solid transparent;
            position: absolute;
            top: -50px;
            left: -20px;
            width: 190px;
            visibility: hidden;
            opacity: 0;
            z-index: -100;
            transition: all 0.5s;

            .sub_menu_list {
              padding: 15px 20px;
              background: #171f25;
              flex-wrap: wrap;
              li {
                width: 100%;
                a {
                  font-family: "Bakbak One";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 40px;
                  color: rgba(255, 255, 255, 0.8);
                  text-transform: capitalize;
                }

                &:hover {
                  a {
                    color: #00ffa3;
                  }
                }
              }
            }
          }

          &:hover {
            .sub_menu_sect {
              top: 7px;
              visibility: visible;
              opacity: 1;
              z-index: 99;
            }
          }
        }
      }
    }
  }

  .Degenesys_menu_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    min-width: 284px;
    button {
      color: #E8E9C9;
      text-transform: uppercase;
      font-family: "Bakbak One";
      font-weight: 400;
      font-size: 16px;

      &:hover {
        color: #3E3E3C;
        font-family: "Press Start 2P";
        font-size: 12px;
      }
    }

    .menu_btn {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 40px;
      }
    }

    .join_btn {
      height: 50px;
      width: 114px;
      background-color: transparent;
    }

    .play_btn {
      height: 50px;
      min-width: 50px;
      border: none;
      margin-left: 20px;
      margin-right: 50px;
      pointer-events: all;


    }

    .connect_btn {
      height: 50px;
      min-width: 150px;
      border: none;
      margin-left: 20px;
      background: rgba(255, 255, 255, 0.2);

      svg {
        font-size: 20px;
      }
    }

    .speaker_btn {
      height: 50px;
      min-width: 50px;
      border: none;

      opacity: 0.55;
      background-repeat: no-repeat;

      background-position: center;

    }
  }

  @media (max-width: 1024px) {
    .Degenesys_menu_list {
      margin-right: 20px;
    }
  }
  @media (max-width: 991px) {
    .Degenesys_menu_right_sect {
      justify-content: end;
    }
    .Degenesys_menu_btns {
      justify-content: end;
      .menu_btn {
        display: block;
      }
    }

    .Degenesys_menu_btns {
      .join_btn {
        display: none;
      }
    }
    .Degenesys_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 667px) {
    .Degenesys_menu_btns {
      .connect_btn {
        display: none;
      }

      .menu_btn {
        svg {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .Degenesys_menu_left_sect {
      width: 180px;
      .logo {
        img {
          width: 70px;
        }
      }
    }

    .Degenesys_menu_right_sect {
      width: 50%;
      .Degenesys_menu_right_sect {
        width: 50%;
      }
    }
  }
`;

export default NavWrapper;
