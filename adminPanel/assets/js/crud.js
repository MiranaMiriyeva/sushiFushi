function createNewItem(url, obj) {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((response) => {
    response.json();
    window.location.href = "./adminPanel.html";
  });
}

function updateItem(url, obj) {
  fetch(url + "/" + window.location.hash.slice(1), {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((response) => {
    response.json();
    window.location.href = "./adminPanel.html";
  });
}

function deleteItem(url, btn) {
  fetch(url + "/" + btn.id, {
    method: "DELETE",
  }).then((response) => response.json());
  console.log(btn.id);
}
export { createNewItem, updateItem, deleteItem };
