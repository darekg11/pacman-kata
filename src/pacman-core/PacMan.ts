enum State {
    Regular = "REGULAR",
    Super = "SUPER",
}

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

    public whatAmILike(): string {
        return 'funny';
    }
}

export default PacMan;
export { State };