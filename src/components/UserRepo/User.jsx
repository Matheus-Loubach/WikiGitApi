import React from 'react';
import { ItemContainer } from './StyleItem';

const Index = ({ itens, handleRemoveUser }) => {
  const { id, name, avatar_url, html_url, blog, location, bio } = itens;

  return (
    <ItemContainer>
      <h3>{name}</h3>
      <p>{bio}</p>
      <p>{location ? location : [] }</p>
      <p>
        Acesse para mais informações:{' '}
        <a target="_blank" rel="noreferrer" href={blog}>
          Entrar
        </a>
      </p>
      <img src={avatar_url} alt="avatar_dev" />
      <div className="container_info">
        <a href={html_url}>Ver repositório</a>
        <p onClick={() => handleRemoveUser(id)}>Remover</p>
      </div>
      <hr />
    </ItemContainer>
  );
};

export default Index;
