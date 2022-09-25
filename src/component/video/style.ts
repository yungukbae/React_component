import styled, { CSSObject } from "@emotion/styled";

export interface BasicCSS {
  width?: number;
  height?: number;
  background?: string;
}

export interface VideoContainerStyled extends BasicCSS {}

export const VideoContainer = styled.div(
  (props: VideoContainerStyled): CSSObject => ({
    background: props.background ? props.background : "#fff",
    width: props.width ? `${props.width}px` : "auto",
    height: props.height ? `${props.height}px` : "auto",
  })
);
