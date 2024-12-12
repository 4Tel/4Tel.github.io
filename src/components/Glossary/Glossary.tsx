import React, { useState } from 'react';
import styles from './Glossary.module.css';
import glossaryItems from './glossary.json';
interface ItemType{
  id:string;
  text?:string;
  tip:string;
};


export function Glossary({id}:{id:string}): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const item = glossaryItems.find(item => item.id === id) as ItemType;
  if (!item) return null;
  let text = item.id;
  if (item.text != undefined) text = item.text;

  return (
    <span
      className={`${styles.term}`}
      onClick={() => setIsVisible(!isVisible)} >
      {text}
      {isVisible && ( <span className={`${styles.tooltip}`}> {item.tip} </span> )}
    </span>
  );
};
