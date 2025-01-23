import classes from "./Message.module.scss";

const Message = ({ term }) => {
  return (
    <div className={classes.messageBox}>
      <h3 className={classes.error}>No results found for "{term}"</h3>
    </div>
  );
};

export default Message;
