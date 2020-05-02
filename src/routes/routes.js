import Price from "../components/pricing/Price";
import Home from "../components/home/Home"
export const routes = [
    {path: '/', component : Price},
    {path: '/home', component : Home},
    {path: '*', redirect : '/home'},
]