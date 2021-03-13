import {ReactNode} from 'react';

export const Layout = (props: {children: ReactNode}) => {
  return <div className="flex h-full flex-col p-14">{props.children}</div>;
};
