import { Register } from "./components/register";

const app = document.getElementById('app');
const register = new Register();
app.appendChild(register.render());