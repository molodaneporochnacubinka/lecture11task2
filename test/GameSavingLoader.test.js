import GameSavingLoader from '../src/js/GameSavingLoader';

jest.setTimeout(7000);

test('test GameSavingLoader async/await', async() => {
  const gameSavingLoader = new GameSavingLoader();
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const data = await gameSavingLoader.load();
  expect(JSON.stringify(data)).toBe(expected);
});



