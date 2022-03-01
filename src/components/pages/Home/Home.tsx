import React, { useEffect, useRef } from 'react';
import { CONFIGS } from 'config/game';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { increaseTimer, initField } from 'actions/fieldActions';
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
import { GameMode } from 'components/shared/GameMode/GameMode';

const Home = () => {
  const timerRef = useRef<NodeJS.Timer>();
  const { map, isActive } = useAppSelector((state) => state.field);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const cancelTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  };

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        dispatch(increaseTimer());
      }, 1000);
    }
    if (!isActive) {
      cancelTimer();
    }

    return () => {
      cancelTimer();
    };
  }, [isActive]);

  useEffect(() => {
    if (!map) {
      dispatch(initField(CONFIGS.hard));
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    }
  }, []);

  return (
    <>
      <GameMode />
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
    </>
  );
};

export { Home };
