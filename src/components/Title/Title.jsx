import React from "react";
import * as S from "./Title.styled";

export const Title = () => {
  return (
    <S.TitleContainer>
      <S.TitleText>Phonebook</S.TitleText>
      <S.TitleImages
        src="public/images/phone-call.png"
        alt="phone-image"
      ></S.TitleImages>
    </S.TitleContainer>
  );
};
