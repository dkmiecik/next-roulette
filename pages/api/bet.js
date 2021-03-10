import NodeCache from 'node-cache';
const myCache = new NodeCache();

myCache.set('bets', []);

const uuid = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const { bet } = req.body;
    const betId = uuid();
    const bets = myCache.get('bets');
    bets.push({ id: betId, bet, score: null });
    myCache.set('bets', bets);
    res.status(200).json({ betId });
  } else if (req.method === 'PUT') {
    // Process a PUT request
    const { currentBetId, score } = req.body;
    const bets = myCache.get('bets').map((bet) => {
      if (bet.id === currentBetId) {
        bet.score = bet.bet === score;
      }
      return bet;
    });
    myCache.set('bets', bets);
    res.status(200).json({ status: 'ok' });
  } else {
    // Handle any other HTTP method
    const bets = myCache.get('bets');
    res.status(200).json({ bets: bets.slice(Math.max(bets.length - 10, 0)) });
  }
}
