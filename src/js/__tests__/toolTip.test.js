import Daemon from '../characters/Daemon';

test('Контент всплывающей подсказки должен быть корректным', () => {
  const daemon = new Daemon(1);
  const received = `\u{1F396}${daemon.level}\u{2694}${daemon.attack}\u{1F6E1}${daemon.defense}\u{2764}${daemon.health}`;
  const expected = '\u{1F396}1\u{2694}10\u{1F6E1}10\u{2764}50';
  expect(received).toBe(expected);
});
