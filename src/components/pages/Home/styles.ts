import styled from 'styled-components';

import border_horizontal from 'assets/border/border_hor_2x.png';
import border_vertical from 'assets/border/border_vert_2x.png';
import tob_left from 'assets/border/corner_up_left_2x.png';
import top_right from 'assets/border/corner_up_right_2x.png';
import bot_left from 'assets/border/corner_bottom_left_2x.png';
import bot_right from 'assets/border/corner_bottom_right_2x.png';
import middle_left from 'assets/border/t_left_2x.png';
import middle_right from 'assets/border/t_right_2x.png';

const MinesWeeperContainer = styled.div`
  display: inline-table;
`;

const TopBorderContainer = styled.div`
  width: 100%;
  height: 16.5px;
`;

const TopLeftCorner = styled.div`
  width: 18px;
  height: 16.5px;
  float: left;
  background-size: 100% 100%;
  background-image: url(${tob_left});
`;

const TobRightCorner = styled.div`
  width: 18px;
  height: 16.5px;
  float: left;
  background-size: 100% 100%;
  background-image: url(${top_right});
`;

const BottomLeftCorner = styled.div`
  width: 18px;
  height: 16.5px;
  float: left;
  background-size: 100% 100%;
  background-image: url(${bot_left});
`;

const BottomRightCorner = styled.div`
  width: 18px;
  height: 16.5px;
  float: left;
  background-size: 100% 100%;
  background-image: url(${bot_right});
`;

const MiddleLeft = styled.div`
  width: 18px;
  height: 16.5px;
  float: left;
  background-size: 100% 100%;
  background-image: url(${middle_left});
`;

const MiddleRight = styled.div`
  width: 18px;
  height: 16.5px;
  float: left;
  background-size: 100% 100%;
  background-image: url(${middle_right});
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const VerticalBorder = styled.div`
  width: 18px;
  background-size: 100% 100%;
  background-image: url(${border_vertical});
`;

const HorizontalBorder = styled.div`
  width: calc(100% - 36px);
  height: 16.5px;
  float: left;
  background-size: 100% 100%;
  background-image: url(${border_horizontal});
`;

const BottomBorderContainer = styled.div``;

const MiddleBorderContainer = styled.div`
  width: 100%;
  height: 16.5px;
`;

export {
  MinesWeeperContainer,
  TopBorderContainer,
  TopLeftCorner,
  HorizontalBorder,
  VerticalBorder,
  TobRightCorner,
  HeaderContainer,
  FieldContainer,
  BottomBorderContainer,
  BottomLeftCorner,
  BottomRightCorner,
  MiddleLeft,
  MiddleRight,
  MiddleBorderContainer,
};
