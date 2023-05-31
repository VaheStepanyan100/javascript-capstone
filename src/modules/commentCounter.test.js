import commentCounter from './commentCounter.js';

describe('Comment counter function', () => {
  test('Count number comments', () => {
    const myArr = [];
    const myCounter = commentCounter(myArr);
    expect(myCounter).toBe(0);
  });

  test('Count number comments', () => {
    const myArr = [
      {
        date: '23-05-31',
        name: 'test',
        comment: 'test',
      },
      {
        date: '23-05-31',
        name: 'test1',
        comment: 'test1',
      },
      {
        date: '23-05-31',
        name: 'test2',
        comment: 'test2',
      },
    ];
    const myCounter = commentCounter(myArr);
    expect(myCounter).toBe(3);
  });
});
