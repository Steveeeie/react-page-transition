import styled, { css, createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
        border: 0;
        box-sizing: border-box;
        color: inherit;
        font-size: inherit;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body{
        background-color: #333;
        color: rgba(255,255,255,0.9);
        font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 16px;
    }

    a {
        font-weight: 500;
        text-decoration: none;
    }
`;

export const NavWrapper = styled.div`
  display: flex;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 32px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const Nav = styled.div`
  flex: none;
  margin: 0 auto;
`;

export const NavLink = styled.a`
  border-radius: 40px;
  flex: none;
  font-weight: 500;
  padding: 12px 24px;
  text-decoration: none;
  transition: background-color 200ms ease;

  &:hover {
    background-color: rgba(47, 66, 80, 0.1);
  }
`;

export const Page = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 24px 24px 24px;
  width: 100%;
`;

export const Container = styled.nav`
  margin: auto;
  max-width: 70ch;
  width: 100%;
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.3);
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 24px;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: center;
`;

export const Github = styled.p`
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: center;
`;

export const Settings = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-width: 50%;
  padding: 8px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      flex: none;
      width: 100%;
      margin-bottom: 32px;
    `};
`;

export const Label = styled.label`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Select = styled.select`
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  height: 44px;
  min-width: 240px;
  padding: 0 16px;
  width: 100%;
  -webkit-appearance: none;
`;
