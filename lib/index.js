const root = require('app-root-path');
const path = require('path');

const SEC_IN_MIN = 60;
const SEC_IN_HOUR = 60 * 60;
const SEC_IN_DAY = 24 * 60 * 60;

const {name, version} = require(path.join(root.toString(), 'package.json'));
const runtime = {node: process.version};

const secondsToString = (seconds) => {
  const days = Math.floor(seconds / SEC_IN_DAY);
  const hours = Math.floor((seconds - days * SEC_IN_DAY) / SEC_IN_HOUR);
  const minutes = Math.floor(
    (seconds - days * SEC_IN_DAY - hours * SEC_IN_HOUR) / SEC_IN_MIN
  );
  const sec = Math.round(
    seconds - days * SEC_IN_DAY - hours * SEC_IN_HOUR - minutes * SEC_IN_MIN
  );

  return `${days.toString(10)}d ${hours
    .toString(10)
    .padStart(2, '0')}:${minutes.toString(10).padStart(2, '0')}:${sec
    .toString(10)
    .padStart(2, '0')}`;
};

const getStats = () => {
  const uptimeSec = process.uptime();
  const uptime = secondsToString(uptimeSec);
  const now = new Date();

  return {
    name,
    version,
    now,
    uptime,
    uptimeSec,
    title: process.title,
    runtime,
  };
};

module.exports = getStats;
