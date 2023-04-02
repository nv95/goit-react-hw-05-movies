import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin-bottom: 16px;
`;

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-color: #4caf50;
  margin-bottom: 12px;
  padding: 10px;
  font-size: 16px;
  width: 80px;
  border: none;
  border-radius: 4px;
  color: white;
  :hover {
    background-color: #3e8e41;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  margin-right: 16px;
`;

export const DivDetails = styled.div`
  padding: 10px 15px;
`;

export const H = styled.h1`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const Po = styled.p`
  margin-bottom: 8px;
`;

export const Pg = styled.p`
  font-style: italic;
`;

export const Ul = styled.ul`
  padding-bottom: 16px;
  border-bottom: 1px solid black;
  > li {
    margin-right: 16px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const LinkTo = styled.link`
  text-decoration: none;
  color: black;
  font-weight: bold;
  border-bottom: 2px solid transparent;
`;
