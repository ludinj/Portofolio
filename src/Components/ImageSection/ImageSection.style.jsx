import styled from "styled-components";

export const ImageWrapper = styled.div`
  margin-top: 4rem;
  display: flex;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    padding-right: 2.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .rigth-content {
    text-align: left;
    h4 {
      font-size: 1.8rem;
      color: var(--white-color);

      span {
        font-size: 1.8rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      text-align: justify;
    }

    .about-info {
      padding-bottom: 1.4rem;
      display: flex;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
