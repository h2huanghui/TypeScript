import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";

interface IChild {
  onChange: (val: string) => void;
  children: React.ReactNode;
}

interface IRef {
  emptyField(): void;
}

const Child = forwardRef<IRef, IChild>(({ onChange, children }, ref) => {
  const [val, setVal] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      emptyField() {
        setVal("");
      },
    }),
    []
  );

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setVal(value);
    onChange(value);
  };

  return (
    <label>
      {children}:&nbsp;&nbsp;
      <input value={val} onChange={handleInputChange} />
    </label>
  );
});

export default Child