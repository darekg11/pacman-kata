import PacMan, { State } from '../src/pacman-core/PacMan';

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