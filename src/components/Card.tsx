import React, { useState, ReactNode, PropsWithChildren, ReactElement } from 'react';
import styles from './Card.module.css';
import Link from '@docusaurus/Link';
interface SectionProps {
  children: ReactNode;
  columns?: number;
  width?: ReactElement;
};
interface CardProps {
  title: string;
  text?: string;
  to: string;
}

export const CardSection: React.FC<SectionProps> = ({ children, columns=2, width='100px' }) => {
  return (
    <div className={`${styles.cardSection}`}>
      <div className={`${styles.sectionContent}`}
      style={{display:'grid', gridTemplateColumns:`repeat(${columns},minmax(${width}, 1fr)`,gap:'1rem'}}>
        {children}
      </div>
    </div>
  );
}

export const Card: React.FC<CardProps> = ({ title, text, to }) => {
  return (
    <Link to={to} className={`${styles.card}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.title}`}> {title} </div>
        <div className={`${styles.text}`}> {text} </div>
      </div>
    </Link>
  );
};
