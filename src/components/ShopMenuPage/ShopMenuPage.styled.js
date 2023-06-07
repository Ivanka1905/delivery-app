import styled from 'styled-components';

export const Container = styled.section`
  padding: 110px 80px 50px 360px;
`;

export const UlItems = styled.ul`
padding: 10px;
display: flex;
gap: 40px;
flex-wrap: wrap;
`;

export const LiItem = styled.li`
width: 300px;
height: 350px;
border: 1px solid #8f95a3;
box-shadow:  2px 2px 3px #8f95a3;
position: relative;
  text-align: center;

`;
export const Title = styled.div`
position: absolute;
top: 12px;
left: 0px;
width: 170px;
padding: 4px;
border: 1px solid transparent;
background-color: rgb(196, 192, 190);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
`;

export const TitleSmall = styled.div`
padding: 3px 15px 3px 15px;
display: flex;
justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
`;

export const Price = styled.div`
padding: 3px 15px 3px 15px;
display: flex;
flex-direction: column;
gap: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  text-align: start;
`;