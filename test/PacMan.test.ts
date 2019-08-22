import PacMan, { BallType, BALL_THRESHOLD_TO_LEVEL, State } from '../src/pacman-core/PacMan';

let p;

beforeEach(() => {
    p = new PacMan();
})

test('basic', () => {
    expect(p.whatAmILike()).toBe('funny');
});

test('if regular, decrease life by one', () => {
    p.state = State.Regular;

    p.eatGhost('ghost1');

    expect(p.lives).toEqual(9);
    expect(p.points).toEqual(0);
});

test('if super, increase points by ten', () => {
    p.state = State.Super;

    p.eatGhost('ghost1');

    expect(p.lives).toEqual(10);
    expect(p.points).toEqual(10);
});

test('gets total count', () => {
    p.state = State.Super;

    p.eatGhost('1');
    p.eatGhost('1');
    p.eatGhost('1');

    p.eatGhost('2');
    p.eatGhost('2');

    p.eatGhost('3');

    expect(p.totalGhostCount()).toEqual(6);
});

test('increase count for given ghost', () => {
    const ghostName = 'ghost1';
    p.state = State.Super;

    p.eatGhost(ghostName);
    p.eatGhost(ghostName);
    p.eatGhost(ghostName);

    expect(p.ghostCount.get(ghostName)).toBe(3)
});

test('if regular and lives === 0, points = 0', () => {
    p.state = State.Regular;
    p.lives = 0;

    p.eatGhost('ghost1');

    expect(p.points).toBe(0)
});

test('tick, if state === super then decrease superTime by one', () => {
    p.state = State.Super;
    p.superTime = 20;

    p.tick();

    expect(p.superTime).toBe(19);
});

test('tick, if superTime is 0 then change state back to regular', () => {
    p.state = State.Super;
    p.superTime = 0;

    p.tick();

    expect(p.state).toBe(State.Regular);
});

test('eatBall, should increase point by 1 no metter ball type', () => {
    p.points = 10;

    p.eatBall(BallType.Regular);
    p.eatBall(BallType.Super);

    expect(p.points).toBe(12);
});

test('eatBall, should increase ball count by 1 no metter ball type', () => {
    p.ballCount = 10;

    p.eatBall(BallType.Regular);
    p.eatBall(BallType.Super);

    expect(p.ballCount).toBe(12);
});

test('eatBall, passing ball count should increase level by one and reset ball count', () => {
    p.ballCount = BALL_THRESHOLD_TO_LEVEL;
    p.level = 0;

    p.eatBall(BallType.Regular);
    p.eatBall(BallType.Super);

    expect(p.ballCount).toBe(1);
    expect(p.level).toBe(1);
    expect(p.ballCount).toBe(1);
});

test('eatBall, eating super ball should change packman state to SUPER and set superTime to 10', () => {
    p.state = State.Regular;
    p.superTime = 20;

    p.eatBall(BallType.Super);

    expect(p.state).toBe(State.Super);
    expect(p.superTime).toBe(10);
});