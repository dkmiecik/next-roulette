const numbers = [
  0,
  32,
  15,
  19,
  4,
  21,
  2,
  25,
  17,
  34,
  6,
  27,
  13,
  36,
  11,
  30,
  8,
  23,
  10,
  5,
  24,
  16,
  33,
  1,
  20,
  14,
  31,
  9,
  22,
  18,
  29,
  7,
  28,
  12,
  35,
  3,
  26,
];

export default function handler(req, res) {
  const index = Math.round(Math.random() * 36);
  const number = numbers[index];
  const position = Math.round(360 - (360 / numbers.length) * index - 5);
  const color = index === 0 ? 'green' : index > 0 && index % 2 === 0 ? 'black' : 'red';
  res.status(200).json({ index, number, color, position });
}
