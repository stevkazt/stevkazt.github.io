const T={
 en:{kicker:'IT & platform support · SysAdmin / Cloud',f_focus:'Linux, networking, infrastructure',f_study:'Telecommunications Engineering, USTA · thesis Dec 2026',f_build:'Games, web apps and tools',nav_about:'about',nav_skills:'skills',nav_projects:'projects',nav_contact:'contact',
  hero:'IT & platform support, heading toward SysAdmin and cloud. I build games, web apps and tools on the side.',
  cta_projects:'See projects',cta_contact:'Get in touch',h_about:'about',h_skills:'skills',h_projects:'projects',h_contact:'contact',
  about1:"I work in IT and platform support and I'm moving toward systems administration, infrastructure and cloud.",
  about2:"I'm a Telecommunications Engineering student at USTA; coursework and thesis wrap up in December 2026. Outside work I like to build: games, web apps and small tools.",
  sk_sec:'Cybersecurity basics',play:'play',details:'details',p_slide:'A vertical 2D space shooter for Android, made with Godot.',ai1:'Hand-built',ai2:'AI-assisted',ai3:'AI-built, human-directed',ai1s:'Hand-built',ai2s:'AI-assisted',ai3s:'AI-built',legend:'How much AI helped: hand-built = I designed and wrote it; AI-assisted = AI wrote parts that I reviewed and edited; AI-built = AI wrote most of it to my specs and direction.',p_word:'A Spanish word game in the style of Wordle.',g_dev:'Software & games',g_infra:'Infrastructure',p_ad:'Windows Server domain lab: users, OUs and Group Policy.',p_rp:'Several sites over HTTPS from one VPS.',p_ph:'Network-level ad and tracker blocking on a Raspberry Pi.',
  p_kart:'A kart racer in Three.js that runs in the browser.',p_sgva:'My thesis: architectural quality and technical debt in AI-assisted development.',
  open:'open',p_doco:'Personal finance app for Bancolombia, Nequi and Nu statements.',p_tech:'My tech site.',p_smash:'A destruction sandbox game. Coming soon.'},
 es:{kicker:'Soporte de TI y plataformas · SysAdmin / Cloud',f_focus:'Linux, redes, infraestructura',f_study:'Ingeniería de Telecomunicaciones, USTA · tesis dic 2026',f_build:'Juegos, apps web y herramientas',nav_about:'sobre mí',nav_skills:'skills',nav_projects:'proyectos',nav_contact:'contacto',
  hero:'Soporte de TI y plataformas, rumbo a SysAdmin y cloud. Construyo juegos, apps web y herramientas por mi cuenta.',
  cta_projects:'Ver proyectos',cta_contact:'Contacto',h_about:'sobre mí',h_skills:'skills',h_projects:'proyectos',h_contact:'contacto',
  about1:'Trabajo en soporte de TI y plataformas, y avanzo hacia administración de sistemas, infraestructura y cloud.',
  about2:'Estudio Ingeniería de Telecomunicaciones en la USTA; materias y tesis terminan en diciembre de 2026. Fuera del trabajo me gusta construir: juegos, apps web y herramientas pequeñas.',
  sk_sec:'Bases de ciberseguridad',play:'jugar',details:'detalles',p_slide:'Un juego de naves 2D vertical para Android, hecho con Godot.',ai1:'Hecho a mano',ai2:'Asistido por IA',ai3:'Construido con IA, dirigido por mí',ai1s:'Hecho a mano',ai2s:'Asistido por IA',ai3s:'Hecho con IA',legend:'Cuánto ayudó la IA: hecho a mano = yo lo diseñé y escribí; asistido = la IA escribió partes que revisé y edité; construido con IA = la IA escribió la mayor parte según mis especificaciones y dirección.',p_word:'Un juego de palabras en español al estilo Wordle.',g_dev:'Software y juegos',g_infra:'Infraestructura',p_ad:'Laboratorio de dominio Windows Server: usuarios, UO y políticas de grupo.',p_rp:'Varios sitios con HTTPS desde un solo VPS.',p_ph:'Bloqueo de anuncios y rastreadores en red con una Raspberry Pi.',
  p_kart:'Un juego de karts en Three.js que corre en el navegador.',p_sgva:'Mi tesis: calidad arquitectónica y deuda técnica en desarrollo asistido por IA.',
  open:'abrir',p_doco:'App de finanzas personales para extractos de Bancolombia, Nequi y Nu.',p_tech:'Mi sitio técnico.',p_smash:'Un juego sandbox de destrucción. Próximamente.'}
};
const btn=document.getElementById('lang');
function setLang(l){
 document.documentElement.lang=l;
 document.querySelectorAll('[data-es]').forEach(e=>{if(e.dataset.en===undefined)e.dataset.en=e.textContent;e.textContent=l==='es'?e.dataset.es:e.dataset.en});
 document.querySelectorAll('[data-i18n-title]').forEach(e=>{const v=T[l][e.dataset.i18nTitle];if(v){e.title=v;e.setAttribute('aria-label',v)}});
 document.querySelectorAll('[data-i18n]').forEach(e=>{const v=T[l][e.dataset.i18n];if(v)e.textContent=v});
 btn.textContent=l==='en'?'ES':'EN';
 try{localStorage.setItem('lang',l)}catch(e){}
}
let l='en';
try{l=localStorage.getItem('lang')||((navigator.language||'').startsWith('es')?'es':'en')}catch(e){}
setLang(l);
btn.addEventListener('click',()=>setLang(document.documentElement.lang==='en'?'es':'en'));
