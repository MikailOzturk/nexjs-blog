import React, { FC, ReactNode } from 'react'

interface SectionHeaderProps {
  children: ReactNode;
}
const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { children } = props;
  return <div className="text-center text-4xl py-6">{children}</div>;
}

export default SectionHeader;