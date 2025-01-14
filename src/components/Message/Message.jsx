import classes from "./Message.module.scss";

const Message = () => {
  return (
    <div className={classes.messageBox}>
      <h3 className={classes.error}>No results found for ""</h3>
    </div>
  );
};

export default Message;
