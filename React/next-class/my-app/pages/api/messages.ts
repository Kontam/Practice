
export default function handler(req, res) {
  const messages = [{ body: "This is messages api."}];
  res.status(200).json(messages);
}
