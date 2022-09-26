import React from "react";
import classes from "./comment-list.module.css";

interface Props {
  items: { id: string; text: string; name: string }[];
}

const CommentList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
