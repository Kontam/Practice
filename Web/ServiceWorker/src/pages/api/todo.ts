const data = [
  { id: '1', name: 'shopping' },
  { id: '2', name: 'fishing' },
  { id: '3', name: 'cleaning' },
  { id: '4', name: 'work' },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
