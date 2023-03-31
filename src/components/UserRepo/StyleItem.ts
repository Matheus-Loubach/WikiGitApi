import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 80%;

  a {
    text-decoration: none;
    color: #fafafa;
    text-decoration: none;
  }

  a:hover {
    color: #ccc;
  }

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa;
    opacity: 60%;
    margin-bottom: 20px;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }

  img {
    width: 200px;
  }

  .container_info {
    display: flex;
    margin: 10px 0;
  }

  .container_info a {
    margin-right: 2%;
  }

  .container_info p {
    cursor: pointer;
  }

  .container_info p:hover {
    color: #ff0000;
  }
`;