import React from 'react';
import { initField } from 'actions/fieldActions';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { FaceContainer } from './styles';
import { FaceProps } from '.';

const Face = ({ type }: FaceProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    dispatch(initField({}));
  };

  return (
    <>
      <FaceContainer onClick={handleClick} type={type} />
    </>
  );
};

export { Face };
