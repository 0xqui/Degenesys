import styled from "styled-components";

const AboutStyleWrapper = styled.section`
  background: #3E3E3C;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add this line to space the left and right content */
  padding-bottom: 0px;

  .bottom_text {
    margin-top: 80px;
    font-family: "Press Start 2P";
    font-size: 16px;
    color: #E8E9C9;

    p6 {
      font-family: "Press Start 2P";
      font-size: 16px;
      color: #85BB65;


    }

    a {
      font-family: "Press Start 2P";
      font-size: 16px;
      color: #228D57;

      &:hover {
        color: #85BB65;
      }
    }
  }

  .row {
    padding: 90px 0;
  }

  .about_title {
    font-size: 48px;
    color: #ffffff;
    line-height: 67px;
    margin-bottom: 43px;
    text-transform: uppercase;
  }

  .about_left_content {
    padding-right: 20px;

    p {
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 28px;
      color: #E8E9C9;
      padding-bottom: 20px;
    }

    p2 {
      font-family: "Press Start 2P";
      font-style: italic;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #85BB65;
      padding-bottom: 20px;
    }
    p3 {
      font-family: "Bakbak One";
      font-style: italic;
      font-weight: 400;
      font-size: 28px;
      line-height: 48px;
      color: #85BB65;
      padding-bottom: 20px;
    }
    .bithu-btn {
      margin-top: 45px;
    }
  }

  .about_right_content {
    width: 100%; /* Add this line to set the width of the right content */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
  }

  .video_box {
    width: 100%; /* Update this line to make the video box take the full width of the right content */
    position: relative;
    overflow: hidden;
  }

  .video_container {
    padding-top: 56.25%;
    position: relative;
  }

  .video_box video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nft_thumb {
    width: 48%;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1199px) {
    .about_left_content {
      p {
        font-size: 20px;
        line-height: 26px;
      }
    }
    .about_title {
      font-size: 38px;
      line-height: 53px;
      margin-bottom: 17px;
    }

    .about_right_content {
      .nft_thumb {
        width: 47%;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .about_left_content {
      p {
        font-size: 20px;
        line-height: 22px;
        margin-bottom: 10px;
      }
    }
    .about_title {
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 17px;
    }
  }

  @media only screen and (max-width: 767px) {
    background: #3E3E3C;
    background-size: cover;
    background-position: center right;
    background-repeat: no-repeat;

    .about_right_content {
      margin-top: 30px;
    }
  }
`;

export default AboutStyleWrapper;
