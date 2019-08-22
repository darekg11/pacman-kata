class PacMan {
    lives: number = 10;
    points: number = 0;
    level: number = 0;
    ballCount: number = 0;
    ghostCount: number = 0;
    state: "REGULAR" | "SUPER";
    superTime: number = 0;
    public whatAmILike(): string {
        return 'funny';
    }
}

export default PacMan;
