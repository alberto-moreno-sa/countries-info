import React from 'react';
import styles from 'styles/components/layout/layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <main data-testid="main-content">{children}</main>
    </div>
  );
};
