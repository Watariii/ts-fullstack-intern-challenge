
function getCards() {
  
  return fetch('https://api.thecatapi.com/v1/images/search?limit=20', {
    method: "GET",
    headers: {
      "x-api-key": "live_zLzU7BD9AzdYRomJ8uROCUC4vqGmbMGpIhOEhp6ILtHludAWUNpiPsdv1NI5Q0pA",
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}

export {getCards}