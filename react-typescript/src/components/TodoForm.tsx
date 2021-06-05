import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

// export const TodoForm: React.FC<{ onAdd(title: string): void }> = (props) => {
export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState("");
  // const [title, setTitle] = useState<string>("");

  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      // console.log(title);
      // setTitle("");
    }
  };

  return (
    <div className="input-field mt3">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Todo title"
        onKeyPress={keyPressHandler}
      ></input>
      <label htmlFor="title" className="active">
        Enter todo title
      </label>
    </div>
  );
};
