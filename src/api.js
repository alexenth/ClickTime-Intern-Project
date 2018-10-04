export async function request(type) {
  return fetch("https://tacos-ocecwkpxeq.now.sh/" + type, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}
