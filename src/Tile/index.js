import { HeaderParagraph, HeaderWrapper, Tile, TileParagraph, TileWrapper, Wrapper } from "./styled";


export const Tiles = () => (
    <Wrapper>
        <HeaderWrapper>
            <HeaderParagraph image></HeaderParagraph>
            <HeaderParagraph title>Portfolio</HeaderParagraph>
            <HeaderParagraph subtitle>My recent projects</HeaderParagraph>
        </HeaderWrapper>
        <TileWrapper>
            <Tile>
                <TileParagraph header>Movie Browser</TileParagraph>
                <TileParagraph content>sth about project</TileParagraph>
                <TileParagraph link>Demo: plus link</TileParagraph>
                <TileParagraph link>Code: plus link</TileParagraph>
            </Tile>
            <Tile>
                <TileParagraph header>Movie Browser</TileParagraph>
                <TileParagraph content>sth about project</TileParagraph>
                <TileParagraph link>Demo: plus link</TileParagraph>
                <TileParagraph link>Code: plus link</TileParagraph>
            </Tile>
            <Tile>
                <TileParagraph header>Movie Browser</TileParagraph>
                <TileParagraph content>sth about project</TileParagraph>
                <TileParagraph link>Demo: plus link</TileParagraph>
                <TileParagraph link>Code: plus link</TileParagraph>
            </Tile>
            <Tile>
                <TileParagraph header>Movie Browser</TileParagraph>
                <TileParagraph content>sth about project</TileParagraph>
                <TileParagraph link>Demo: plus link</TileParagraph>
                <TileParagraph link>Code: plus link</TileParagraph>
            </Tile>
        </TileWrapper>
    </Wrapper>
)