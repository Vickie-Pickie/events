import GameField from './GameField';
import GameLogic from './GameLogic';

const gameField = new GameField();
const gameLogic = new GameLogic(gameField);
gameLogic.run();
