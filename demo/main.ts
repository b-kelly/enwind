import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="text-center">
    <a href="https://www.typescriptlang.org/" target="_blank">
    TS
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
