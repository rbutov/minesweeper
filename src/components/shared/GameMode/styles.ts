import styled from 'styled-components';

const GameModeContainer = styled.div`
  padding-left: 5px;

  > button {
    border: none;
    border-radius: 0;
    box-sizing: border-box;
    min-height: 23px;
    min-width: 75px;
    padding: 0 12px;
    background: silver;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
      inset 2px 2px #dfdfdf;
    margin-right: 5px;

    :active {
      box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf,
        inset 2px 2px grey;
    }
  }
`;

export { GameModeContainer };
