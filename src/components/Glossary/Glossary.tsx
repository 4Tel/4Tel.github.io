import React, { useEffect, useState } from 'react';
import styles from './Glossary.module.css';
import glossaryItems from './glossary.json';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toHast } from 'mdast-util-to-hast';
import { usePluginData } from '@docusaurus/useGlobalData';


interface ItemType{
  category?:string;
  id:string;
  text?:string;
  tip:string;
};
interface GlossaryInput {
  children;
  fpath?:string;
  id?:string;
  text?:string;
}


export function Glossary({children,fpath,id,text}:GlossaryInput): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const [isFix, setIsFix] = useState(false);
  // var [content,setContent]:[any,React.Dispatch<any>] = useState();
  var content;
  if (children) { // with given glossary text
    content = (children);
  } else if (fpath) { // with given glossary file path
    // TODO
    content = '(TODO)';
  } else if (id) { // with given glossary id
    const item = glossaryItems.find(item => item.id === id) as ItemType;
    if (!item) return null;
    if (!text) {
      if (item.text) text = item.text;
      else text = item.id;
    }
    content = (
      item.tip.split('\\\n').map(part =>  // \\n is not new line
        part.split('\n').map((line, index) => ( // \n to newline
          <React.Fragment key={index}>
            {index > 0 && <br />}
            {line}
          </React.Fragment>
        )))
    );
  }
  
  
  return (
    <span
      className={`${styles.term}`}
      // mouse enter/leave is weird in mobile
      onPointerEnter={()=>setIsVisible(true)}
      onPointerLeave={()=>setIsVisible(false)}
      onClick={() => setIsFix(!isFix)} >
      {text}
      {(isVisible||isFix) && <span className={`${styles.tooltip}`}>{content}</span>}
    </span>
  );
};
