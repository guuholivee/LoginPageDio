import React from "react";
import { Container, NameText, Progress, UserPicture } from "./styles";


const UserInfo = ({ nome, image, percentual }) => {
  return (
    <Container>
      { /* Exibe a imagem do usuário */}  
      <UserPicture src={image} alt={`Foto de ${nome}`} />
      
      {/* Exibe o nome do usuário e o componente de progresso */}
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export { UserInfo };