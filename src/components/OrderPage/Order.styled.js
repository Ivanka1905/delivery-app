import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 110px 80px 50px 80px;
  border: 1px solid #d5d8dc;
  border-radius: 5px;
  box-shadow: 3px 2px 2px #85929e;
  background-color: #8f95a3;
`;
export const FormElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 340px;
  padding: 15px;
  border: 1px solid #d5d8dc;
  border-radius: 5px;
  box-shadow: 3px 2px 2px #85929e;
  background-color: #dcdcdc;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #d5d8dc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 300px;
  margin-left: auto;
  margin-right: 0;
  padding: 6px;
  background-color: #abebc6;
  border: 1px solid #82e0aa;
  border-radius: 5px;
  box-shadow: 2px 1px 1px #85929e;
  transition: all 500ms ease;
  position: fixed;
  color: black;
  z-index: 10;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  bottom: 50px;
  right: 30px;
  &:hover {
    cursor: pointer;
    background-color: #ed8032;
    border: 1px solid #ed8032;
  }
`;
export const UlItems = styled.ul`
  padding: 10px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  background-color: #dcdcdc;
`;

export const LiItem = styled.li`
  width: 300px;
  height: 350px;
  border: 1px solid #8f95a3;
  box-shadow: 2px 2px 3px #8f95a3;
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
export const TitleMain = styled.div`
  width: 100%;
  padding: 4px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: rgb(196, 192, 190);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
`;
export const TitleSmall = styled.div`
  padding: 3px 15px 3px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
`;

export const Price = styled.div`
  padding: 3px 15px 3px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  text-align: start;
`;

export const Submit = styled.div`
  width: 100%;
  padding: 5px 10px 5px 35px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: rgb(196, 192, 190);
  font-weight: 800;
  font-size: 20px;
  line-height: 1.4;
  text-align: start;
`;
