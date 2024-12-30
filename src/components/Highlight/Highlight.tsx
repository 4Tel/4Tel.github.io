import React, { ReactNode } from 'react';
interface colorProp {
  children:ReactNode;
  back?;
  font?;
}
export function Color({children,back,font}:colorProp):ReactNode {
  return (
    <p style={{
      backgroundColor: back,
      margin: '0px',
      borderRadius: '2px',
      color: font,
      padding: '0.2rem',
    }}>
        {children}
    </p>
  );
}
export function Highlight({children,back,font}:colorProp):ReactNode {
  return <Color back={back} font={font}>{children}</Color>;
}
export function FontColor({children,back,font}:colorProp):ReactNode {
  return <Color back={back} font={font}>{children}</Color>;
}