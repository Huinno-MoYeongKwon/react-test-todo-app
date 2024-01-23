interface AlertProps {
  message: string;
  open: boolean;
}

const Alert = (props: AlertProps) => {
  const { message, open } = props;
  console.log("Alert", props);
  return (
    <dialog
      open={open}
      style={{
        backgroundColor: "white",
      }}
    >
      {message}

      <button onClick={() => {}}>Close</button>
    </dialog>
  );
};

export default Alert;
