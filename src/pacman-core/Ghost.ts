import { OnGrid, IMovement, Position, Direction } from './Common';

class Ghost implements OnGrid {
    public name: string
    public movement: IMovement
    public direction: Direction;
    public position: Position;

    public Ghost(name: string, movement: IMovement) {
        this.name = name;
        this.movement = movement;
    }

    public tick() {
        this.position = this.movement.makeMovement(this.position, this.direction);
    }

    public changeDirection(d: Direction) {
        this.direction = d;
    }
}

export default Ghost;