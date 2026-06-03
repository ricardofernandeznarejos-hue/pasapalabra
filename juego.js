const SUPABASE_URL = "https://gfaknqeoklayggqrtyeu.supabase.co";
const SUPABASE_KEY = "sb_publishable_r7BvsX18vhvudnmMoPaA7Q_42cxyFne";
const RANKING_TABLE = "ranking";
const RANKING_NAME_COLUMN = "Nombre";
const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

let puntosActuales = 0;

(function () {
  // =======================
  //  BANCO DE PREGUNTAS
  // =======================
  const banco = {
    A: [
      { q: "Empieza por A: Herramienta para hacer dashboards y visualizaión de datos", a: "Adobe Analytics" },
      { q: "Empieza por A: Del equipo CPC, experta crochetera.", a: "Araceli" },
      { q: "Empieza por A: Integrante del equipo de Imagin y Facilitea, la persona más chill del equipo Caixa.", a: "Arnau" },
      { q: "Empieza por A: IA de Nttdata.", a: "axet gaia" },

    ],
    B: [
      { q: "Empieza por B: Proyecto de banca en que trabaja Estela", a: "bbva" }, 
      { q: "Empieza por B: Parte del sistema o aplicación que gestiona lógica, servidores y la base de datos", a: "backend" },
      { q: "Empieza por B: Apellido del nuevo integrante de Facilitea, del atelti desde bebé.", a: "Baltasar" },
      { q: "Empieza por B: Ciudad sede de CaixaBank.", a: "Barcelona" }
    ],
    C: [
      { q: "Empieza por C: Lenguaje para dar estilo a páginas web.", a: "css" },
      { q: "Empieza por C: Plataforma de virtualización de escritorios y aplicaciones, que permite a los usuarios acceder de forma segura a su entorno de trabajo digital.", a: "citrix" },
      { q: "Empieza por C: Donde subir tu CV para que todos lo vean, sobre todo siempre tenerlo actualizado", a: "cvapp" },
      { q: "Empieza por C: Área de Caixa donde trabajan Araceli, Paula e Irene.", a: "CPC" },
      { q: "Empieza por C: Escritorio virtual, en desuso gracias a la VPN.", a: "Citrix" },
      { q: "Empieza por C: De los equipos CPC y VidaCaixa, nuestra canaria favorita.", a: "Cati" },
      { q: "Empieza por C: PM recien introducido al mundo de la paternidad.", a: "Cristian" },
      { q: "Empieza por C: Proyecto de Caixa que nos presentó Sara en la última Monthly Spain.", a: "CSC" },
    ],
    D: [
      { q: "Empieza por D: Antiguo sobrenombre que tenia el equipo Exo.", a: "deadpool"},
      { q: "Empieza por D: Equipo que nos saca a todos de quicio.", a: "desarrollo" },
      { q: "Empieza por D: Panel visual que reúne métricas e indicadores para facilitar su seguimiento.", a: "dashboard" },
      { q: "Empieza por D: Repositorio o conjunto centralizado de información utilizado para consultar y analizar datos de diferentes fuentes.", a: "datapool" }
    ],
    E: [
    
      { q: "Empieza por E: Aplicación de hoja de cálculo desarrollada por Microsoft.", a: "excel" },
      { q: "Empieza por E: Flujo continuo y en tiempo real de datos generados por Tealium.", a: "eventStream" },
      { q: "Empieza por E: Nombre de nuestro departamento.", a: "ExO" },
      { q: "Empieza por E: Área de Caixa Corporativo donde se publican artículos.", a: "Esfera" },
    ],
    F: [
      { q: "Empieza por F: Apartado de compras de Caixa que nos da 1000 problemas.", a: "Facilitea"},
      { q: "Empieza por F: Nuevo miembro de CRO, le atracaron en un Domino's Pizza.", a: "Franco"},
      { q: "Empieza por F: Apellido de Ricky.", a: "Fernandez"},
      { q: "Empieza por F: Linia interna que se acaba de incorporar Irene.", a: "formacines"},
    ],
    G: [
      { q: "Empieza por G: Sistema de control de versiones popular.", a: "git" },
      { q: "Empieza por G: Interfaz Gráfica de Usuario.", a: "gui" },
      { q: "Empieza por G: Nombre de un gran fan de las figuras lego.", a: "Gabriel Ballarta" },
      { q: "Empieza por G: PM de Caixa, militar y fan de las motos.", a: "Gabriel Carrillo" },
      { q: "Empieza por G: Del equipo Facilitea, infiltrado de Zaragoza en Barcelona.", a: "Galve" },
      { q: "Empieza por G: Herramienta que  parece el portero de la discoteca de tu ordenador..", a: "global protect" },
       
    ],
    H: [
      { q: "Empieza por H: Gran herramienta para validaciones que no llega nunca.", a: "hqa" },
      { q: "Empieza por H: Como se denomina a nestro Pablo Expert.", a: "h" },
      { q: "Empieza por H: Visualización que muestra las zonas de una página donde los usuarios interactúan con mayor o menor intensidad.", a: "heatmap" },
      { q: "Empieza por H: Que són Tealium, Adobe Analytics, Adobe Target, Rally...", a: "herramientas" }
    ],
    I: [
      { q: "Empieza por I: Disciplina que combina datos y algoritmos para automatizar tareas.", a: "inteligencia artificial", a:"ia" },
      { q: "Empieza por I: Proyecto de banca en que trabajan Ricky, Juanjo, Vera y Arnau", a: "Imagin" },
      { q: "Empieza por I: Del equipo CPC, muy de Madrid y muy del Madrid.", a: "Irene" }

    ],
    J: [
      { q: "Empieza por J: Lenguaje creado por Sun, muy usado en Android.", a: "java" },
      { q: "Empieza por J: Lenguaje interpretado usado en la web.", a: "Javascript" },
      { q: "Empieza por J: Del equipo Imagin, persona más enérgica de ExO.", a: "Juanjo" },
      { q: "Empieza por J: Nombre del grupo de Teams de Caixa.", a: "Jungle" },
    ],
    K: [
      { q: "Empieza por K: Herramienta coorporativa donde puedes ver toda la info de tus compis", a: "knowler" },
      { q: "Empieza por K: Medida cuantificable utilizada para evaluar el éxito de una organización.",  a: "kpi" },
      { q: "Empieza por K: Personaje de Nintendo que tiene Roger tatuado.",  a: "kirby" }
    ],
    L: [
      { q: "Empieza por L: Jefe supremo a quien contamos todo sobre Caixa.", a: "Luismi" },
      { q: "Empieza por L: Del equipo de CRO, hace streams en twitch.", a: "Lucía" },
      { q: "Empieza por L: Red social donde publicamos a menudo.", a: "linkedin" },
    ],
    M: [
      { q: "Empieza por M: Del equipo de Martech, expert que adoramos.", a: "Manu" },
      { q: "Empieza por M: Del equipo de Track, jefa de la GO e infiltrada en Madrid.", a: "Marta" },
      { q: "Empieza por M: Nuevo miembro de CRO, fan de Brandon Sanderson.", a: "Martí" },
      { q: "Empieza por M: Del equipo de CRO, gallega experta en tortillas de patata.", a: "María" }
    ],
    N: [
      { q: "Empieza por N: Del equipo de CRO, apasionada de la pesca.", a: "Neus" },
      { q: "Empieza por N: Empresa japonesa a la que dedicamos 40 horas semanales (o más).", a: "NTT" },
      { q: "Empieza por N: Mensaje que muchas veces dejamos de lado que nos envia Marina.", a: "newsletter" },
      { q: "Empieza por N: Linia interna relacionada con la visibilidad del departamento.", a: "notoriedad" },
      { q: "Empieza por N: Herramienta para guardar el sitio para nuestros culetes.", a: "nomadic" },
    ],
    Ñ: [
      { q: "Contiene Ñ: Elemento que se tiene que actualizar cada 3 meses y ya no sabemos que poner.", a: "Contraseña" },
      { q: "Contiene Ñ: Dos integrantes del equipo viven allí aunque solo una es de allí.", a: "Coruña" },
      { q: "Contiene Ñ: Es lo que te obliga moralmente a pasarle los apuntes limpios al que se durmió en clase", a: "Compañerismo" },
      { q: "Contiene Ñ: No es tu familiar, no siempre es tu mejor amigo, pero pasa contigo más horas al día que tu propia mascota viendo pantallas" , a: "compañero" }
    ],
    O: [
      { q: "Empieza por O: Herramienta para sacar trazas de navegación", a: "obsly" },
      { q: "Empieza por O: Donde tenemos que poner nuestras horas, para tenernos fichados XD.", a: "oneerp" },
      { q: "Empieza por O: App de validación de segundo factor.", a: "okta" },
      { q: "Empieza por O: Nombre de la antigua mano derecha de Luimi.", a: "Oscar" },

    ],
    P: [
      { q: "Empieza por P: Jefa suprema y satelite de EXO", a: "Patty" },
      { q: "Empieza por P: Jefe suprema de Caixa", a: "Pablo G" },
      { q: "Empieza por P: Del equipo de track, expert al que le encanta venir en bici", a: "Pablo H" },
      { q: "Empieza por P: Integrante de Exo", a: "Paula" },
    ],
    Q: [
      { q: "Empieza por Q: Nombre del excel donde podemos ver que hacen nuestros compañeros", a: "que hacemos en caixabank" },
      { q: "Empieza por Q: Llegas a la oficina y ves que alguien se ha sentado en tu mesa. Con que validamos estar en el sitio correcto ?",  a: "qr"}
    ],
    R: [
      { q: "Empieza por R: Del equipo de Corpo y VidaCaixa, el más tatuado de esta sala.", a: "Roger" },
      { q: "Empieza por R: Del equipo Imagin, casi alcalde de Exo.", a: "Ricky" },
      { q: "Empieza por R: Herramienta con la que gestionamos los sprints.", a: "Rally" },
    ],
    S: [
      { q: "Empieza por S: Del equipo Imagin, que hace poco ha hecho una presentacion de social listening  .", a: "Sandra" }, 
      { q: "Empieza por S: Equipo CSC con Oriol, corssfit is her passion.", a: "Sara" },
      { q: "Empieza por S: Dura dos semanas y lo cerramos los jueves.", a: "sprint" },
      { q: "Empieza por S: Agrupar usuarios según características o comportamientos para analizarlos mejor", a: "Segmentar" },
    ],
    T: [
      { q: "Empieza por T: Esperamos que las hayáis rellenado.", a: "TLs" },
      { q: "Empieza por T: Herramienta de adobe para CRO.", a: "Target" },
      { q: "Empieza por T: Herramienta para sacar trazas de navegación.", a: "Tealium" },
      { q: "Empieza por T: Proyecto en el que están Marta y Pablo H.", a: "teo" }
    ],
    U: [
      { q: "Empieza por U: Área enfocada en analizar y mejorar la interacción de las personas con una web, aplicación o servicio digital.", a: "UX" },
      { q: "Empieza por U: Punto de interacción humano‑máquina.", a: "ui" },
      { q: "Empieza por U: Identificador único de usuario.", a: "uid" },
      { q: "Empieza por U: Dirección de una página web que solemos analizar en herramientas digitales.", a: "URL" }
    ],
    V: [
      { q: "Empieza por V: Nos ha cambiado la vida a casi todo el eqipo.", a: "VPN" },
      { q: "Empieza por V: .", a: "Vanessa" },
      { q: "Empieza por V: Del equipo Imagin, gallega.", a: "Vera" },
      { q: "Empieza por V: PM de Caixa, de Sitges.", a: "Vicky" }

    ],
    W: [
      { q: "Empieza por W: conjunto de páginas y recursos accesibles a través de Internet.", a: "Web" },
      { q: "Empieza por W: secuencia de tareas o procesos para completar un trabajo de forma organizada.", a: "Workflow" }
    ],
    X: [
      { q: "Contiene la X: herramienta de hojas de cálculo de Microsoft para analizar y organizar datos.", a: "Excel" },
      { q: "Contiene la X: prueba controlada para validar una hipótesis o medir resultados, como en CRO.", a: "Experimento" }
    ],
    Y: [
      { q: "Empieza por Y: Plataforma de vídeo más usada del mundo.", a: "youtube" },
      { q: "Empieza por Y: Red social corporativa de Microsoft 365.", a: "yammer" },
      { q: "Empieza por Y: Lenguaje de programación versátil usado para automatización, análisis de datos y desarrollo.", a: "Python" }
    ],
    Z: [
      { q: "Empieza por Z: Nuestro tren de hoy no ha pasado por allí y hemos dejado a Paula viniendo sola.", a: "Zaragoza" },
      { q: "Empieza por Z: Plataforma de seguridad en la nube para empresas.", a: "zscaler" },
      { q: "Empieza por Z: Juego de rol preferiodo de algun jefecito.", a: "zelda" }
    ]
  };

  // ==============
  //  ESTADO
  // ==============
  const letras = Object.keys(banco); // 
  let rosco = [];                   // 
  let idx = 0;
  let aciertos = 0, fallos = 0;
  let tiempoRestante = 600, timer = null, pausado = false, juegoActivo = false;

  // ==============
  //  DOM
  // ==============
  const $rosco = document.getElementById("rosco");
  const $preg = document.getElementById("pregunta");
  const $resp = document.getElementById("respuesta");
  const $ok = document.getElementById("ok");
  const $ko = document.getElementById("ko");
  const $time = document.getElementById("time");
  const $end = document.getElementById("end");
  const $scoreText = document.getElementById("scoreText");

  // Opciones
  const $tiempoIni = document.getElementById("tiempoIni");

  // Botones
  document.getElementById("btnStart").addEventListener("click", comenzar);
  document.getElementById("btnPause").addEventListener("click", togglePause);
  document.getElementById("btnReset").addEventListener("click", () => location.reload());
  document.getElementById("btnResponder").addEventListener("click", responder);
  document.getElementById("btnPasapalabra").addEventListener("click", pasapalabra);

  // =============================
  //  FUNCIONES PRINCIPALES
  // =============================
  function comenzar() {
    juegoActivo = true;
    aciertos = 0; fallos = 0;
    puntosActuales = 0;
    tiempoRestante = tiempoConfigurado();
    $time.textContent = tiempoRestante;

    construirRosco();
    dibujarRosco();
    seleccionarPrimera();
    pintarPregunta();
    iniciarTimer();
    actualizarPuntos();
    $end.classList.remove("show");
  }

  function construirRosco() {
    rosco = letras.map(L => {
      const arr = banco[L];
      const sel = arr[Math.floor(Math.random() * arr.length)]; // elige 1
      return { letra: L, q: sel.q, a: String(sel.a).toLowerCase().trim(), estado: "pending" };
    });
  }

  function dibujarRosco() {
    $rosco.innerHTML = "";

    
    const cx = 240;
    const cy = 240;
    const radio = 180;


    rosco.forEach((it, i) => {
      const ang = (i / rosco.length) * Math.PI * 2 - Math.PI / 2; // empieza arriba
      const x = cx + Math.cos(ang) * radio;
      const y = cy + Math.sin(ang) * radio;

      const d = document.createElement("div");
      d.className = "letra";
      d.id = "L" + i;                 // ← CLAVE: id para marcar actual/ok/ko
      d.style.left = x + "px";
      d.style.top = y + "px";
      d.textContent = it.letra;
      $rosco.appendChild(d);
    });
  }

  function seleccionarPrimera() {
    idx = 0;
    for (let i = 0; i < rosco.length; i++) {
      if (rosco[i].estado === "pending") { idx = i; return; }
    }
  }

  function pintarPregunta() {
    marcarEstados();
    $preg.textContent = rosco[idx].q;
    $resp.value = "";
    $resp.focus();
  }

  function responder() {
  if (!juegoActivo || pausado) return;

  const valor = $resp.value.trim();
  if (!valor) return;

  const ok = normalizar(valor) === normalizar(rosco[idx].a);
  rosco[idx].estado = ok ? "ok" : "ko";

  if (ok) {
    aciertos++;                
    puntosActuales += 40;       
    mostrarCombo("+40", "#22c55e");
  } else {
    fallos++;                   
    puntosActuales -= 15;       
    mostrarCombo("-15", "#ef4444");
  }

  // ✅ actualizar stats
  $ok.textContent = aciertos;
  $ko.textContent = fallos;

  // ✅ actualizar marcador
  actualizarPuntos();

  // ✅ siguiente letra
  siguienteValida(idx + 1);
}

  
function pasapalabra() {
  if (!juegoActivo || pausado) return;
  siguienteValida(idx + 1);
  actualizarPuntos()
}
  

  function siguienteValida(start) {
    for (let i = 0; i < rosco.length; i++) {
      const j = (start + i) % rosco.length;
      if (rosco[j].estado === "pending") {
        idx = j;
        pintarPregunta();
        return;
      }
    }
    finalizar(); // no quedan pendientes
  }

  
function finalizar() {
  juegoActivo = false;
  pararTimer();
  marcarEstados();

  
  const puntos = (aciertos * 100) - (fallos * 50) + (tiempoRestante * 0.5);


  $scoreText.textContent =
    `Aciertos ${aciertos}, Fallos ${fallos}, Bonus tiempo ${tiempoRestante} → TOTAL: ${puntos}`;

  $end.classList.add("show");

  const nombre = prompt("Tu nombre:");
  guardarRanking(nombre || "Anonimo", puntos);
}


  // ==============
  //  AUXILIARES
  // ==============
  function normalizar(s) {
    return String(s)
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
      .replace(/[^a-z0-9ñ]/g, ""); 
  }

  function marcarEstados() {
    rosco.forEach((it, i) => {
      const el = document.getElementById("L" + i);
      if (!el) return;
      el.classList.remove("ok", "ko", "actual");
      if (it.estado === "ok") el.classList.add("ok");
      else if (it.estado === "ko") el.classList.add("ko");
    });
    const activa = document.getElementById("L" + idx);
    if (activa) activa.classList.add("actual");
  }

  // ==============
  //  TEMPORIZADOR
  // ==============
  function iniciarTimer() {
    pararTimer();
    pausado = false;
    setBtnPauseText();
    timer = setInterval(() => {
      if (pausado) return;
      tiempoRestante--;
      $time.textContent = tiempoRestante;
      if (tiempoRestante <= 0) finalizar();
    }, 1000);
  }

  function pararTimer() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function togglePause() {
    if (!timer) return; // aún no ha empezado
    pausado = !pausado;
    setBtnPauseText();
    if (!pausado) $resp.focus();
  }

  function setBtnPauseText() {
    const btn = document.getElementById("btnPause");
    if (btn) btn.textContent = pausado ? "Reanudar" : "Pausar";
  }

  // =======================
  //  OPCIONES + TEMA
  // =======================
  function tiempoConfigurado() {
    const t = 600;
    if ($tiempoIni) $tiempoIni.value = t;
    $time.textContent = t;
    return t;
  }

  function aplicarPreferencias() {
    if ($tiempoIni) $tiempoIni.value = 600;
  }

  // =======================
  //  ATAJOS DE TECLADO
  // =======================
  document.addEventListener("keydown", (e) => {
    if (!juegoActivo) return;
    if (e.key === "Enter") { responder(); }
    else if (e.key === "Tab") { e.preventDefault(); pasapalabra(); }
    else if (e.code === "AltLeft") { e.preventDefault(); togglePause(); }

  });

  // =======================
  //  INICIO (preview + prefs)
  // =======================
  document.addEventListener("DOMContentLoaded", () => {
    aplicarPreferencias();
    // Vista previa del rosco (sin preguntas) para que se vea desde el arranque:
    rosco = letras.map(L => ({ letra: L, q: "", a: "", estado: "pending" }));
    dibujarRosco();
    marcarEstados();
  });
})();

async function guardarRanking(nombre, puntos){
  const nombreLimpio = String(nombre || "Anonimo").trim().slice(0, 40) || "Anonimo";

  if (!supabaseClient) {
    pintarMensajeRanking("No se pudo conectar con Supabase");
    return;
  }

  const { error } = await supabaseClient
    .from(RANKING_TABLE)
    .insert({ [RANKING_NAME_COLUMN]: nombreLimpio, puntos });

  if (error) {
    console.error("Error guardando ranking:", error);
    pintarMensajeRanking("No se pudo guardar la puntuacion");
    return;
  }

  pintarRanking();
}

async function pintarRanking(){
  const tabla = document.querySelector("#tablaRanking tbody");
  if (!tabla) return;

  tabla.innerHTML = `<tr><td colspan="2">Cargando...</td></tr>`;

  if (!supabaseClient) {
    pintarMensajeRanking("No se pudo conectar con Supabase");
    return;
  }

  const { data, error } = await supabaseClient
    .from(RANKING_TABLE)
    .select(`${RANKING_NAME_COLUMN},puntos`)
    .order("puntos", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error cargando ranking:", error);
    pintarMensajeRanking("No se pudo cargar el ranking");
    return;
  }

  tabla.innerHTML = "";

  if (!data || data.length === 0) {
    pintarMensajeRanking("Sin datos");
    return;
  }

  data.forEach((r) => {
    const fila = document.createElement("tr");
    const nombre = document.createElement("td");
    const puntos = document.createElement("td");

    nombre.textContent = r[RANKING_NAME_COLUMN];
    puntos.textContent = r.puntos;

    fila.appendChild(nombre);
    fila.appendChild(puntos);
    tabla.appendChild(fila);
  });
}

function pintarMensajeRanking(mensaje){
  const tabla = document.querySelector("#tablaRanking tbody");
  if (!tabla) return;

  const fila = document.createElement("tr");
  const celda = document.createElement("td");

  celda.colSpan = 2;
  celda.textContent = mensaje;
  fila.appendChild(celda);

  tabla.innerHTML = "";
  tabla.appendChild(fila);
}

document.addEventListener("DOMContentLoaded", () => {
  pintarRanking();
});


function actualizarPuntos() {
  const el = document.getElementById("scoreNow");
  el.textContent = puntosActuales;

  el.style.transform = "scale(1.2)";
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 150);

  if (puntosActuales >= 0) {
    el.style.color = "#22c55e";
  } else {
    el.style.color = "#ef4444";
  }
}


function mostrarCombo(texto, color) {
  const el = document.getElementById("floatingScore");

  el.textContent = texto;
  el.style.color = color;
  el.style.opacity = 1;
  el.style.transform = "translate(-50%, -80%)";

  setTimeout(() => {
    el.style.opacity = 0;
    el.style.transform = "translate(-50%, -50%)";
  }, 600);
}




