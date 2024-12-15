import React, { ReactNode } from 'react';
interface colorProp {
  children:ReactNode;
  back?;
  font?;
}
export function Color({children,back,font}:colorProp):ReactNode {
  return (
    <span
      style={{
        backgroundColor: back,
        borderRadius: '2px',
        color: font,
        padding: '0.2rem',
      }}>
      {children}
  </span>
  );
}
export function Highlight({children,back,font}:colorProp):ReactNode {
  return <Color back={back} font={font}>{children}</Color>;
}
export function FontColor({children,back,font}:colorProp):ReactNode {
  return <Color back={back} font={font}>{children}</Color>;
}