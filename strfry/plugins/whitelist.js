#!/usr/bin/env node

const WHITELIST = {
  pubs: {
    c357827214b0f96fd581ed52bb1d486b5dbb115a760136036857176e8ea17647: true,
  },
  eventKinds: [
    0, // Metadata
    3, // Contacts
    10002, // Relay list metadata
  ],
};

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  let req = JSON.parse(line);

  if (req.type === 'lookback') {
    return; // do nothing
  }

  if (req.type !== 'new') {
    console.error('unexpected request type'); // will appear in strfry logs
    return;
  }

  let res = { id: req.event.id }; // must echo the event's id

  if (
    WHITELIST.pubs[req.event.pubkey] ||
    WHITELIST.eventKinds.includes(req.event.kind)
  ) {
    res.action = 'accept';
  } else {
    res.action = 'reject';
    res.msg = 'blocked: not on white-list';
  }

  console.log(JSON.stringify(res));
});
