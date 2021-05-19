import React, { /* useState, */ useRef } from "react";

export const TodoForm: React.FC = () => {
//   const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null)

//   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(event.target.value);
//   };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {

        console.log(ref.current!.value);
        ref.current!.value = ''


    //   console.log(title);
    //   setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        ref={ref}
        // value={title}
        // onChange={changeHandler}
        placeholder=" Введите название задачи"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название задачи
      </label>
    </div>
  );
};
