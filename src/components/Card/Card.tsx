import  React, { ReactNode } from 'react';
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

export function CardSection({children, columns, width}:SectionProps): React.ReactElement {
  return (
    <div className={`${styles.cardSection}`}>
      <div className={`${styles.sectionContent}`}
      style={{display:'grid', gridTemplateColumns:`repeat(${columns},${width})`,gap:'1rem'}}>
        {children}
      </div>
    </div>
  );
}

export function ColumnSection({ children, columns=2 }:SectionProps):React.ReactElement  {
  return <CardSection columns={columns} width='minmax(0,1fr)'>{children}</CardSection>;
};

export function WidthSection({ children, width='100px' }:SectionProps):React.ReactElement {
  return <CardSection columns='auto-fill' width={width}>{children}</CardSection>
};

export function Card({ title, text, to }: CardProps): React.ReactElement {
  return (
    <Link to={to} className={`${styles.card}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.title}`}> {title} </div>
        <div className={`${styles.text}`}> {text} </div>
      </div>
    </Link>
  );
};
