import { Divider } from '@chakra-ui/react';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Divider orientation="horizontal" />
      <div className={css.container}>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
