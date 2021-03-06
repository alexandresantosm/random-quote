import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1628498188904-036f5e25e93e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 720px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
