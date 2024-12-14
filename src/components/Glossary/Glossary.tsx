import React, { useState } from 'react';
import styles from './Glossary.module.css';
import glossaryItems from './glossary.json';
interface ItemType{
  category?:string;
  id:string;
  text?:string;
  tip:string;
};


export function Glossary({id}:{id:string}): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const [isFix, setIsFix] = useState(false);
  const item = glossaryItems.find(item => item.id === id) as ItemType;
  if (!item) return null;
  let text = item.id;
  if (item.text != undefined) text = item.text;

  return (
    <span
      className={`${styles.term}`}
      onMouseEnter={()=>setIsVisible(true)}
      onMouseLeave={()=>setIsVisible(false)}
      onClick={() => setIsFix(!isFix)} >
      {text}
      {(isVisible||isFix) && (
        <span className={`${styles.tooltip}`}>
          {item.tip.split('\\\n').map(part =>  // \\n is not new line
            part.split('\n').map((line, index) => ( // \n to newline
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))
          )}
        </span>
     )}
    </span>
  );
};
