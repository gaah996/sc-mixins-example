import React, {FC} from 'react';

import * as S from './styles';

const Article: FC = () => {
    return (
        <S.Wrapper>
            <S.Title>This is a Title</S.Title>
            <S.Text>This is the body of this Article</S.Text>
            <S.Footer isBlue={true}>Here you have the footer</S.Footer>
        </S.Wrapper>
    );
}

export default Article;
