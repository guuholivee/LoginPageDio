import React from "react";
import { Container, NameText, Progress, UserPicture } from "./styles";
import { IUserInfo } from "./types"; // ou declare direto acima

const UserInfo: React.FC<IUserInfo> = ({ nome, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} alt={`Foto de ${nome}`} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export { UserInfo };
