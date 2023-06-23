import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = (props) => {
  const { children } = props;
  return <div className="container mx-auto px-10">{children}</div>;
}
export default Container;