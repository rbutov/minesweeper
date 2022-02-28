import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { initField } from 'actions/fieldActions';
import { Field } from 'components/shared/Field';
import { Header } from 'components/shared/Header';
import {
  BottomBorderContainer,
  BottomLeftCorner,
  BottomRightCorner,
  FieldContainer,
  HeaderContainer,
  HorizontalBorder,
  MiddleBorderContainer,
  MiddleLeft,
  MiddleRight,
  MinesWeeperContainer,
  TobRightCorner,
  TopBorderContainer,
  TopLeftCorner,
  VerticalBorder,
} from './styles';

const Home = () => {
  const { map } = useAppSelector((state) => state.field);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!map) {
      dispatch(initField());
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    }
  }, []);

  return (
    <MinesWeeperContainer ref={containerRef}>
      <TopBorderContainer>
        <TopLeftCorner />
        <HorizontalBorder />
        <TobRightCorner />
      </TopBorderContainer>
      <HeaderContainer>
        <VerticalBorder />
        <Header />
        <VerticalBorder />
      </HeaderContainer>
      <MiddleBorderContainer>
        <MiddleLeft />
        <HorizontalBorder />
        <MiddleRight />
      </MiddleBorderContainer>
      <FieldContainer>
        <VerticalBorder />
        <Field />
        <VerticalBorder />
      </FieldContainer>
      <BottomBorderContainer>
        <BottomLeftCorner />
        <HorizontalBorder />
        <BottomRightCorner />
      </BottomBorderContainer>
    </MinesWeeperContainer>
  );
};

export { Home };
