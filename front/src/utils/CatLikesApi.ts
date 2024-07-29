const apiConfig = {
  url: "http://localhost:8080/api/likes",
  headers: {
    "content-type": "application/json",
  },
};

type LikedCard = {
  id: string;
  url: string;
};

function getSavedCards() {
  return fetch(apiConfig.url, {
    method: "GET",
    headers: apiConfig.headers,
  }).then(checkStatus());
}

function saveCard(newCard: LikedCard) {
  return fetch(apiConfig.url, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify(newCard),
  }).then(checkStatus());
}

function deleteCard(idCard: string) {
  return fetch(`${apiConfig.url}/${idCard}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkStatus());
}

function checkStatus() {
  return (res: any) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };
}

export { getSavedCards, saveCard, deleteCard };
