import { Router } from './router.js';
import Events from './events.js';
import Controls  from './controls.js';



const router = new Router();


const controls = Controls();

controls.explorationBg();

Events(controls, router);