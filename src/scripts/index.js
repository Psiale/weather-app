import mainContainer from './render';
import { apiFetcher } from '../screens/giphy';
document.body.appendChild(mainContainer);
apiFetcher('pugs');