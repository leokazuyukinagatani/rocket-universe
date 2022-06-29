import { 
  buttonExpl, 
  buttonUniv, 
  buttonHome
} from "./elements.js";

export default function Events (
  
  controls,
  router
  ) {

    controls.homeBg();

    router.add('/', "/pages/home.html");
    router.add('/universe', "/pages/universe.html");
    router.add('/exploration', "/pages/exploration.html");
    router.add(404, "/pages/404.html");
    router.handle();
  
  const pamonha = () => {
    controls.homeBg();
  }

  const pave = () => {
    controls.universeBg();

  }
  
  const pipoca = () => {
    controls.explorationBg();

  }
  

  window.onpopstate = () => router.handle();

  buttonHome.addEventListener('click', pamonha );
  
  buttonUniv.addEventListener('click', pave );
    
  buttonExpl.addEventListener('click', pipoca );
    

  

}

