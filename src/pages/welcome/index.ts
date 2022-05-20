const welcome = require("../../images/welcome.png");

export function init(params) {
  const div = document.createElement("div");
  div.classList.add("page");
  const style = document.createElement("style");

  div.innerHTML = `
    <img class="ppt-img" src="${welcome}">
    <button-comp class="btn-comp">Inicio</button-comp>
	<div class="hands">
		<hand-scissor></hand-scissor>
		<hand-stone></hand-stone>
		<hand-paper></hand-paper>
	</div>
  `;
  style.innerHTML = `
	.page {
		width: 100%;
		height: 100vh;
		padding-top: 100px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
	}
	.ppt-img {
		width: 284px;
	}
	.hands {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}`;

  const button = div.querySelector(".btn-comp");
  button.addEventListener("click", () => {
    params.goTo("/desafio-m5/rules");
  });
  div.appendChild(style);
  return div;
}
