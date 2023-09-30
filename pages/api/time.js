export default function handler(request, response) {
  let time = new Date();
  return response.status(200).json(time);
}
