export default function handler(req, res) {
  const messages = [{ body: new Date().toString() }];
  res.status(200).json(messages);
}
