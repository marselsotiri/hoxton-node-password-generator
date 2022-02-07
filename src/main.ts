import './style.css'
import generatePassword from './exercise';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<h3>Nothing to see here. Your exercise lives in the console 🌭</h3>
`

generatePassword();