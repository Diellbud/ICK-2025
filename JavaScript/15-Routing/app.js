const routes = {
  home: "home.html",
  about: "about.html",
  contact: "contact.html",
};

const router = () => {
  const route = window.location.hash.replace("#", "");
  const renderContent = document.getElementById("app");
  const file = routes[route];
  if (file) {
    fetch(file)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        renderContent.innerHTML = data;
      })
      .catch(error => {
            renderContent.innerHTML = `
            <p>Error</p>
            `
            console.warn(error);
      })
  }
};

window.addEventListener('hashchange', router)
window.addEventListener('load', router)