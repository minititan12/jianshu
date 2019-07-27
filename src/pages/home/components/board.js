import React, { PureComponent } from 'react';
import { BoardWrapper, BoardItem, BoardImg1, BoardImg2, BoardImg3, BoardImg4 } from '../style';

class Board extends PureComponent {
    render() {
        return (
            <BoardWrapper>
                <BoardItem>
                    <BoardImg1 alt="board-img" className="board-img" />
                </BoardItem>
                <BoardItem>
                    <BoardImg2 alt="board-img" className="board-img" />
                </BoardItem>
                <BoardItem>
                    <BoardImg3 alt="board-img" className="board-img" />
                </BoardItem>
                <BoardItem>
                    <BoardImg4 alt="board-img" className="board-img" />
                </BoardItem>
            </BoardWrapper>
        )
    }
}

export default Board;