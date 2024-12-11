import React, { useState } from 'react';
import styles from './Glossary.module.css';
import glossaryItems from './glossary.json';

export function Glossary({id}:{id:string}): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const item = glossaryItems.find(item => item.id === id);
  if (!item) return null;

  return (
    <span
      className={`${styles.term}`}
      onClick={() => setIsVisible(!isVisible)} >
      {id}
      {isVisible && ( <div className={`${styles.tooltip}`}> {item.text} </div> )}
    </span>
  );
};
