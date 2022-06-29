import { body } from "./elements.js";

export default function Controls (
  
) {

  const homeBg = () => {
    body.classList.add('bg-home');
    body.classList.remove('bg-uni');
    body.classList.remove('bg-exp');  
  }

  const universeBg = () => {
    body.classList.add('bg-uni');
    body.classList.remove('bg-home');
    body.classList.remove('bg-exp');  
  }

  const explorationBg = () => {
    body.classList.add('bg-exp');  
    body.classList.remove('bg-home');
    body.classList.remove('bg-uni');
  }

  return { homeBg, universeBg, explorationBg }
}