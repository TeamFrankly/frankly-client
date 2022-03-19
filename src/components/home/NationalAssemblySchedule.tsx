import React, {useState} from 'react';
import styled from "styled-components";

interface NAScheduleProps {

}

const NationalAssemblySchedule: React.FunctionComponent<NAScheduleProps> = (props) => {
  const list = ["본회의", "위원회", "의장단", "세미나", "국회행사"];
  const [schedule, setSchedule] = useState([1, 8, 3, 0, 1]);

  return (
    <Main>
      {list.map((item, index) => (
        <div className="box" key={item}>
          <h5>{item}</h5>
          <p>{schedule[index]}</p>
        </div>
      ))}
    </Main>
  );
}

const Main = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .box {
    padding: 8px 0;
    width: 19%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    background-color: #F6F6F6;
    h5 {
      font-size: 1.1rem;
      color: #7B7B7B;
    }
    p {
      font-family: Roboto, sans-serif;
      font-size: 2rem;
      font-weight: bold;
      color: #111111;
    }
  }
`;

export default NationalAssemblySchedule;