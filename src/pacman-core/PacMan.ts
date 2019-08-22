enum State {
    Regular = "REGULAR",
    Super = "SUPER",
}

enum BallType {
    Regular = "REGULAR",
    Super = "SUPER"
};

const BALL_THRESHOLD_TO_LEVEL = 40;

class PacMan {
    lives: number = 10;
    points: number = 0;
    level: number = 0;
    ballCount: number = 0;
    ghostCount: Map<string, number>;
    state: State;
    superTime: number = 0;
    
    constructor() {
        this.ghostCount = new Map<string, number>();
        this.state = State.Regular;
    }

    public totalGhostCount(): number {
        let sum = 0;
        this.ghostCount.forEach((value, key) => {
            sum += value;
        })
        return sum;
    }

    public eatGhost(name: string) {
        if (!this.ghostCount.has(name)) {
            this.ghostCount.set(name, 1);
        } else {
            let curr = this.ghostCount.get(name);
            this.ghostCount.set(name, ++curr);
        }

        switch (this.state) {
            case State.Regular: {
                this.lives -= 1;
                if (this.lives === 0) {
                    this.points = 0;
                }
                break;
            }
            case State.Super: {
                this.points += 10;
                break;
            }
        }
    }

    public tick(): void {
        if (this.state === State.Super) {
            this.superTime -= 1;
        }
        if (this.superTime <= 0) {
            this.state = State.Regular;
        }
    }

    public eatBall(ballType: BallType) {
        this.points += 1;
        this.ballCount += 1;
        if (this.ballCount >= BALL_THRESHOLD_TO_LEVEL) {
            this.level += 1;
            this.ballCount = 0;
        }
        if (ballType === BallType.Super) {
            this.state = State.Super;
            this.superTime = 10;
        }
    }

    public whatAmILike(): string {
        return 'funny';
    }
}

export default PacMan;
export { BallType, BALL_THRESHOLD_TO_LEVEL, State };