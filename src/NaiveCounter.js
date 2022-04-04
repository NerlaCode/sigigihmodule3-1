const Sample = () => {
  let counter = 0;

  return (
    <>
      Counter is {counter}
      <br />
      <button onClick={() => counter--}>-</button>
      <button onClick={() => counter++}>+</button>
    </>
  );
};

export { Sample };
