import React, { useState, ReactNode, PropsWithChildren, ReactElement } from 'react';
import styles from './Card.module.css';
import Link from '@docusaurus/Link';
interface SectionProps {
  children: ReactNode;
  columns?: number | 'auto-fill';
  width?: string;
};
interface CardProps {
  title: string;
  text?: string;
  to: string;
};

export const CardSection: React.FC<SectionProps> = ({ children, columns, width }) => {
  return (
    <div className={`${styles.cardSection}`}>
      <div className={`${styles.sectionContent}`}
      style={{display:'grid', gridTemplateColumns:`repeat(${columns},${width})`,gap:'1rem'}}>
        {children}
      </div>
    </div>
  );
}

export const ColumnSection: React.FC<SectionProps> = ({ children, columns=2 }) => {
  return <CardSection columns={columns} width='minmax(0,1fr)'>{children}</CardSection>;
};

export const WidthSection: React.FC<SectionProps> = ({ children, width='100px' }) => {
  return <CardSection columns='auto-fill' width={width}>{children}</CardSection>
};

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
