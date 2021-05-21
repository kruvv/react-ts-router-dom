import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum
        maiores tempore quidem, cupiditate veritatis maxime in facere pariatur
        eius dolore ut voluptatem deleniti impedit, sit recusandae autem, natus
        ipsa!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку задач
      </button>
    </>
  );
};
