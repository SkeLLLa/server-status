const serverstatus = require('../..');
const {name, version} = require('../../package.json');

describe('server-status', () => {
  test('returns stats', async () => {
    const stats = serverstatus();
    expect(stats).toHaveProperty('name', name);
    expect(stats).toHaveProperty('version', version);
    expect(stats).toHaveProperty('title', process.title);
    expect(stats).toHaveProperty('runtime.node', process.version);
    expect(stats.now).toBeInstanceOf(Date);
    expect(stats.uptime).toMatch(/\d+d \d{2}:\d{2}:\d{2}/);
    expect(typeof stats.uptimeSec).toBe('number');
  });
});
