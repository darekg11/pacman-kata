enum Direction {
    Up,
    Down,
    Left,
    Right,
};

interface Position {
    x: number,
    y: number,
}

interface IMovement {
    makeMovement(position: Position, direction: Direction): Position
}

interface OnGrid {
    position: Position
    direction: Direction
    movement: IMovement
    changeDirection(Direction)
}

class EntityBaseMovement implements IMovement {
    makeMovement(position: Position, direction: Direction): Position {
        switch (direction) {
            case Direction.Up: {
                return { x: position.x, y: position.y+=1 }
            }
            case Direction.Down: {
                return { x: position.x, y: position.y-=1 }
            }
            case Direction.Left: {
                return { x: position.x-=1, y: position.y }
            }
            case Direction.Right: {
                return { x: position.x+=1, y: position.y }
            }
        }
        return position;
    }
}

export {
    Direction,
    Position,
    OnGrid,
    IMovement,
    EntityBaseMovement,
}