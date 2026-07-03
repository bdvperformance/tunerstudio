/* ============================================================
   BDV PERFORMANCE — ACADEMIA TUNERSTUDIO
   Voz: preparador, no profesor. Enseña desde la primera frase.
   Consecuencias concretas · diagnóstico · reglas. Voseo.
   ============================================================ */

COURSES.basico.modules = [
  {
    title:"ANTES DE EMPEZAR: CÓMO PIENSA TU MOTOR",
    lessons:[
      { id:"b0-1", module:"Módulo 0 · Fundamentos", title:"Qué hace una ECU programable",
        html:`
        <p>Una ECU controla dos cosas: <strong>cuánta nafta inyectar</strong> y <strong>cuándo salta la chispa</strong>. Todo el resto del motor parte de esas dos decisiones.</p>
        <p>La ECU de fábrica ya las trae tomadas y cerradas. Una programable te las deja definir a vos, punto por punto.</p>
        <p>La ECU no adivina. <strong>Mide.</strong> Lee sensores (acelerador, aire, temperatura, mezcla) y comanda actuadores (inyectores y bobinas). Vos armás las tablas que traducen "esto que mido" en "esto que hago".</p>
        <div class="callout tip"><span class="clabel">◆ Por qué importa</span><p>Este curso no enseña dónde hacer clic, enseña por qué cambiás cada valor. El que entiende el porqué resuelve cualquier motor. El que memoriza botones se traba en el primero raro.</p></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Tu BDV se programa desde <strong>TunerStudio</strong>: por USB con la compu, o por Bluetooth desde el celular. La lógica es la misma en los tres modelos; cambia cuánto podés controlar.</p></div>`},
      { id:"b0-2", module:"Módulo 0 · Fundamentos", title:"Aire, nafta y chispa: la mezcla que hace fuerza",
        html:`
        <p>El motor hace fuerza quemando <strong>aire y nafta</strong>. La proporción entre los dos define si ganás potencia, ahorrás combustible o rompés un pistón.</p>
        <p>Esa proporción es el <strong>AFR</strong> (o su versión normalizada, lambda). La mezcla justa teórica para la nafta es <strong>14,7:1</strong> — estequiométrica, lambda 1,00.</p>
        <ul>
          <li><strong>Rica</strong> (más nafta, ej. 12,5:1): más potencia, quema más fresca. Plena carga.</li>
          <li><strong>Pobre</strong> (menos nafta, ej. 15,5:1): más económica, pero peligrosa bajo carga.</li>
        </ul>
        <p>Mezcla pobre bajo carga:</p>
        <ul>
          <li>sube la temperatura de combustión</li>
          <li>favorece la detonación</li>
          <li>puede fundir o romper un pistón</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Afinar el combustible es lograr el AFR objetivo en cada punto. Nada más, y nada menos.</p></div>`},
      { id:"b0-3", module:"Módulo 0 · Fundamentos", title:"Cómo mide la carga tu ECU: Speed Density, Alpha-N y MAF",
        html:`
        <p>Para poner nafta, la ECU primero necesita saber <strong>cuánto aire entra</strong>. Hay tres formas de averiguarlo, y elegir mal condiciona todo el tune.</p>
        <ul>
          <li><strong>Speed Density (MAP):</strong> calcula el aire por la presión del múltiple y las vueltas. El más común, y el que mejor anda con turbo.</li>
          <li><strong>Alpha-N (TPS):</strong> usa la posición del acelerador y las vueltas. Para comando bravo o admisiones independientes (ITB), donde el MAP no es estable.</li>
          <li><strong>MAF:</strong> usa un medidor de flujo. Muy preciso en aspirados de calle.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Con turbo y un sensor MAP, elegí Speed Density. Alpha-N con turbo te deja ciego a la presión.</p></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> soporta Speed Density, Alpha-N, MAF y mezclas: Alpha-N abajo, Speed Density arriba. Por eso se elige en proyectos exigentes.</p></div>`}
    ]
  },
  {
    title:"PRIMEROS PASOS EN TUNERSTUDIO",
    lessons:[
      { id:"b1-1", module:"Módulo 1 · TunerStudio", title:"Instalar TunerStudio y crear el proyecto",
        html:`
        <p>TunerStudio es el software con el que configurás y afinás tu ECU. Antes de tocar nada, dejalo instalado y con un proyecto creado.</p>
        <p>Tiene una versión <strong>gratuita</strong> que alcanza para lo básico y una <strong>registrada</strong> que suma el autotune y tableros avanzados — la vas a necesitar en el Avanzado.</p>
        <ol>
          <li>Descargá e instalá TunerStudio del sitio oficial.</li>
          <li>Creá un proyecto nuevo con un nombre claro (ej. "Gol Turbo — MegaSquirt 3 Pro").</li>
          <li>Elegí el firmware que corresponde a tu placa.</li>
          <li>Cargá el tune base como punto de partida.</li>
        </ol>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 2</strong> corre firmware <strong>MS2/Extra</strong>; la <strong>MegaSquirt 3 mini</strong> y la <strong>MegaSquirt 3 Pro</strong>, firmware <strong>MS3</strong>. Confirmá con nosotros el firmware y el tune base de tu placa: arrancás sobre una configuración sana, no desde cero.</p></div>`},
      { id:"b1-2", module:"Módulo 1 · TunerStudio", title:"Conectar la ECU: USB y Bluetooth",
        html:`
        <p>Sin conexión, TunerStudio no ve la ECU. Necesitás dos datos: el <strong>puerto</strong> y la <strong>velocidad</strong> (baud).</p>
        <h3>Por USB</h3>
        <ol>
          <li>Conectá el cable USB-C entre la ECU y la compu.</li>
          <li>Windows le asigna un puerto COM. Si no lo toma, instalá el driver serie desde el Administrador de dispositivos.</li>
          <li>En TunerStudio, elegí ese COM y la velocidad. Ante la duda, usá Detect.</li>
        </ol>
        <h3>Por Bluetooth</h3>
        <p>Emparejás la ECU una vez; el sistema la ve como un COM más y la conectás igual que por USB.</p>
        <div class="callout check"><span class="clabel">✓ Cómo comprobarlo</span><p>Conectada, el tablero debe mostrar datos vivos: al girar el motor con el burro, las RPM se mueven. Si no hay datos, el problema es el COM o la velocidad, no el tune.</p></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>El Bluetooth es el adicional de BDV: ves el tablero del motor en vivo en el celular, para probar en el auto sin la notebook.</p></div>`},
      { id:"b1-3", module:"Módulo 1 · TunerStudio", title:"La interfaz: tablero, medidores y runtime",
        html:`
        <p>La primera vez, la pantalla abruma. Son cuatro zonas, y con eso alcanza:</p>
        <ul>
          <li><strong>Tablero:</strong> los medidores (RPM, temperatura, AFR, MAP) en tiempo real.</li>
          <li><strong>Runtime:</strong> el detalle numérico de todo lo que la ECU lee y hace ahora.</li>
          <li><strong>Menús:</strong> arriba, agrupados por tema.</li>
          <li><strong>Tablas:</strong> los mapas 3D (VE, AFR, avance) que vas a editar.</li>
        </ul>
        <p>Armate un tablero con lo que de verdad mirás al afinar: RPM, AFR objetivo, AFR real, MAP, temperatura de motor y duty de inyectores. Menos relojes, más foco.</p>
        <div class="callout tip"><span class="clabel">◆ Clave</span><p>Muchos parámetros están ocultos hasta que activás la función que los usa. Si buscás algo y no aparece, casi siempre falta habilitar su módulo.</p></div>`},
      { id:"b1-4", module:"Módulo 1 · TunerStudio", title:"Grabar cambios (burn) sin romper nada",
        html:`
        <p>Un cambio no queda guardado hasta que lo grabás. Y un tune sin respaldo se pierde justo cuando lo necesitás.</p>
        <p>Cuando cambiás un valor, TunerStudio lo manda a la ECU, pero queda en firme recién cuando hacés <strong>Burn</strong>. Sin grabar, al cortar la alimentación se pierde.</p>
        <ul>
          <li><strong>Online:</strong> conectado, los cambios se aplican al toque (grabá).</li>
          <li><strong>Offline:</strong> editás el tune sin la ECU, para preparar cambios en casa.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Un cambio por vez. Si tocás cinco cosas juntas y algo mejora, no sabés cuál fue. Y si empeora, tampoco.</p></div>
        <div class="callout watch"><span class="clabel">⚠ Nunca hagas esto</span><p>No sobrescribas tu único tune bueno. Versioná con nombre y fecha: "base", "arranca", "ralentí ok", "calle ok".</p></div>`}
    ]
  },
  {
    title:"CONFIGURACIÓN BASE DEL MOTOR",
    lessons:[
      { id:"b2-1", module:"Módulo 2 · Configuración base", title:"Datos del motor: cilindros, orden de encendido y cilindrada",
        html:`
        <p>Esto le dice a la ECU qué motor está manejando. Si está mal, nada de lo que hagas después va a funcionar.</p>
        <ul>
          <li><strong>Número de cilindros</strong> y <strong>cilindrada</strong> total.</li>
          <li><strong>Orden de encendido:</strong> el orden real en que encienden. Sale del manual del motor.</li>
          <li><strong>Tipo de motor</strong> y ciclos.</li>
        </ul>
        <div class="callout watch"><span class="clabel">⚠ Si está mal</span><p>Un orden de encendido cruzado, en secuencial o COP, provoca:</p><ul><li>motor que no arranca o "tose"</li><li>backfire por admisión o escape</li><li>marcha bruta e irregular</li></ul></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Capacidad por modelo: la <strong>MegaSquirt 2</strong> soporta hasta 8 cilindros, la <strong>MegaSquirt 3 mini</strong> hasta 12, y la <strong>MegaSquirt 3 Pro</strong> hasta 16 (con hasta 8 bobinas individuales).</p></div>`},
      { id:"b2-2", module:"Módulo 2 · Configuración base", title:"Inyectores: caudal, dead time y duty cycle",
        html:`
        <p>La ECU calcula la nafta a partir de cuánto entrega cada inyector. Tres datos definen ese cálculo.</p>
        <ul>
          <li><strong>Caudal:</strong> el tamaño del inyector (cc/min o lb/hr). Dato del inyector.</li>
          <li><strong>Dead time:</strong> lo que tarda en abrir de verdad tras la orden. Depende del voltaje, por eso va en tabla.</li>
          <li><strong>Duty cycle:</strong> el porcentaje del tiempo que está abierto.</li>
        </ul>
        <div class="callout watch"><span class="clabel">⚠ Si está mal (dead time)</span><p>No da un error obvio, ensucia todo:</p><ul><li>ralentí inestable</li><li>mezcla distinta entre ralentí y carga</li><li>correcciones que nunca terminan de cerrar</li><li>AFR que cambia aunque la VE esté bien</li></ul></div>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Nunca corrijas el AFR desde la tabla VE si el dead time está mal. Estarías tapando el error, no arreglándolo.</p></div>
        <div class="callout tip"><span class="clabel">◆ Duty alto = inyector chico</span><p>Si el duty llega a 85–90% antes de la potencia objetivo, el inyector quedó chico. No subas nafta: cambiá a uno más grande.</p></div>`},
      { id:"b2-3", module:"Módulo 2 · Configuración base", title:"Bobinas y salidas de encendido",
        html:`
        <p>Definís cómo dispara la chispa: una bobina cada dos cilindros, o una por cilindro.</p>
        <ul>
          <li><strong>Chispa perdida:</strong> una bobina cada dos cilindros. Simple y robusto.</li>
          <li><strong>COP:</strong> una bobina por cilindro. Más control, necesita sincro de leva.</li>
        </ul>
        <p>También configurás la <strong>lógica de la señal</strong> (qué nivel enciende la bobina), según tu módulo.</p>
        <div class="callout watch"><span class="clabel">⚠ Si está mal (lógica invertida)</span><ul><li>el motor no prende</li><li>la bobina no corta y se recalienta</li><li>en el peor caso, se quema la salida o el módulo</li></ul></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Todas las BDV traen 4 salidas de encendido independientes. La <strong>MegaSquirt 3 Pro</strong> tiene 8, con hasta 8 bobinas individuales para COP.</p></div>`}
    ]
  },
  {
    title:"SINCRONIZACIÓN: EL PASO QUE HACE ARRANCAR",
    lessons:[
      { id:"b3-1", module:"Módulo 3 · Sincronización", title:"Rueda fónica y sensores: cigüeñal y leva",
        html:`
        <p>Sin saber dónde está el cigüeñal, la ECU no puede disparar ni la chispa ni los inyectores. Esa referencia sale de una <strong>rueda dentada</strong> y un sensor.</p>
        <ul>
          <li><strong>Inductivo (VR):</strong> genera su propia señal, sin alimentación. Muy común de fábrica.</li>
          <li><strong>Hall:</strong> necesita alimentación y da una señal digital limpia.</li>
        </ul>
        <p>La rueda suele ser <strong>missing tooth</strong> (le faltan uno o más dientes que marcan la referencia): 36-1, 60-2. El sensor de <strong>leva</strong> agrega en qué vuelta está — necesario para secuencial y COP.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Todas las BDV aceptan sensores hall e inductivos, de cigüeñal y de leva. Te adaptás a casi cualquier motor sin cambiar la rueda fónica.</p></div>`},
      { id:"b3-2", module:"Módulo 3 · Sincronización", title:"Trigger angle, diente #1 y sincronía de leva",
        html:`
        <p>De esta pantalla, un número importa más que todos: el <strong>trigger angle</strong>. Si está mal, el avance real no es el que ves.</p>
        <ul>
          <li><strong>Dientes</strong> y cuántos faltan (36-1, 60-2).</li>
          <li><strong>Trigger angle:</strong> el ángulo del cigüeñal cuando pasa el diente de referencia.</li>
          <li><strong>Flanco:</strong> si dispara con el flanco de subida o de bajada.</li>
          <li><strong>Sincro de leva:</strong> para ir secuencial.</li>
        </ul>
        <div class="callout watch"><span class="clabel">⚠ Si está mal (trigger angle)</span><ul><li>el avance real no coincide con el de pantalla</li><li>puede detonar aunque la tabla se vea conservadora</li><li>cuesta arrancar o no arranca</li></ul></div>
        <div class="callout check"><span class="clabel">✓ Cómo comprobarlo</span><ol><li>Fijá un avance en la ECU, por ejemplo 10°.</li><li>Con lámpara estroboscópica, mirá la marca del cigüeñal.</li><li>Ajustá el trigger angle hasta que la marca quede en 10° reales.</li></ol></div>`},
      { id:"b3-3", module:"Módulo 3 · Sincronización", title:"Verificar la sincro: tooth logger y errores típicos",
        html:`
        <p>Antes de intentar arrancar, comprobá que la ECU lee bien la rueda.</p>
        <ul>
          <li><strong>Tooth logger:</strong> muestra los dientes que detecta al girar con el burro. Tenés que ver un patrón limpio y el hueco del diente faltante.</li>
          <li><strong>Composite logger:</strong> muestra cigüeñal y leva juntos.</li>
        </ul>
        <div class="callout watch"><span class="clabel">⚠ Si está mal</span><ul><li><strong>No arranca:</strong> señal ruidosa, flanco invertido o dientes mal cargados.</li><li><strong>Backfire:</strong> avance mal referenciado u orden de encendido cruzado.</li><li><strong>Pierde sincro a altas RPM:</strong> ruido eléctrico, sensor mal montado o luz (gap) mal.</li></ul></div>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Sin sincro no hay nada que afinar. Si un motor no arranca, empezá acá: el 80% de las veces el problema está en la sincronización.</p></div>`}
    ]
  },
  {
    title:"SENSORES Y CALIBRACIÓN",
    lessons:[
      { id:"b4-1", module:"Módulo 4 · Sensores", title:"Calibrar TPS y MAP",
        html:`
        <p>El TPS y el MAP le dicen a la ECU cuánta carga tiene el motor. Mal calibrados, arrastran el error a todo el tune.</p>
        <p><strong>TPS:</strong> marcás el 0% (pie afuera) y el 100% (a fondo).<br>
        <strong>MAP:</strong> elegís el sensor según su rango — aspirado ~1 bar; turbo 2 o 3 bar según el boost.</p>
        <div class="callout watch"><span class="clabel">⚠ Si está mal (TPS)</span><ul><li>el enriquecimiento por aceleración falla (tirón al pisar)</li><li>el ralentí queda inestable</li><li>el motor responde tarde al acelerador</li><li>si usás Alpha-N, toda la carga queda descalibrada</li></ul></div>
        <div class="callout check"><span class="clabel">✓ Cómo comprobarlo</span><p>En runtime: pie afuera = 0%, a fondo = 100%, sin saltos ni zonas muertas en el medio. El MAP, con motor parado a nivel del mar, debe leer ~100 kPa.</p></div>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Con turbo, el MAP tiene que cubrir tu presión máxima con margen. Un MAP que se satura rompe el mapa justo arriba, donde más importa.</p></div>`},
      { id:"b4-2", module:"Módulo 4 · Sensores", title:"Temperatura (CLT/IAT) y sonda O2",
        html:`
        <p>La temperatura maneja el frío; la sonda O2, la mezcla. Una de las dos define si podés mapear o no.</p>
        <p><strong>CLT</strong> manda el enriquecimiento en frío; <strong>IAT</strong> corrige por densidad. La mayoría de los sensores GM/Bosch ya están en la lista de calibración.</p>
        <ul>
          <li><strong>Narrowband:</strong> solo dice "rica o pobre" alrededor de 14,7. Sirve para calle básica, no para mapear.</li>
          <li><strong>Wideband:</strong> da el AFR exacto en todo el rango.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Nunca afines una tabla VE sin una wideband. Con una narrowband estás adivinando el número que justamente venís a corregir.</p></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Tu BDV tiene entrada dedicada de sonda O2, narrow o wideband.</p></div>`}
    ]
  },
  {
    title:"PRIMER ARRANQUE SEGURO",
    lessons:[
      { id:"b5-1", module:"Módulo 5 · Primer arranque", title:"Chequeos previos, cebado y modo de prueba de salidas",
        html:`
        <p>Antes de girar el motor, confirmá que cada salida hace lo suyo. Es la forma de no quemar nada por un cable cruzado.</p>
        <p>Con el motor sin girar:</p>
        <ul>
          <li><strong>Bomba:</strong> al dar contacto, la ECU la ceba unos segundos. Escuchala.</li>
          <li><strong>Presión de combustible:</strong> que llegue a lo que pide el sistema.</li>
          <li><strong>Inyectores y bobinas:</strong> en el pin correcto y en el orden correcto.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> tiene un modo de prueba con el motor parado: activás bomba, inyectores, bobinas, válvulas y solenoides uno por uno para confirmar que responden antes de arrancar.</p></div>`},
      { id:"b5-2", module:"Módulo 5 · Primer arranque", title:"Required Fuel y arranque en frío",
        html:`
        <p>Required Fuel es el número base de nafta, calculado a partir de cilindrada, cilindros y caudal de inyector. TunerStudio lo calcula con un asistente.</p>
        <p>De ahí en más, el arranque en frío depende de dos ajustes:</p>
        <ul>
          <li><strong>Cranking:</strong> el pulso extra mientras gira el burro. Más nafta en frío.</li>
          <li><strong>After-start:</strong> el enriquecimiento apenas prende, que se desvanece en segundos.</li>
        </ul>
        <div class="callout watch"><span class="clabel">⚠ Si está mal</span><ul><li><strong>Arranca y se apaga:</strong> falta after-start o warmup.</li><li><strong>Se ahoga (huele a nafta, no prende):</strong> cranking de más — bajalo. A fondo el acelerador hay un "flood clear" que corta nafta para limpiar.</li><li><strong>Ni tose:</strong> el problema no es combustible, volvé a sincronización.</li></ul></div>`}
    ]
  },
  {
    title:"COMBUSTIBLE: MAPEAR",
    lessons:[
      { id:"b6-1", module:"Módulo 6 · Combustible", title:"Qué es mapear y la tabla VE",
        html:`
        <p>Mapear es una sola cosa: lograr el AFR objetivo en cada punto. La tabla <strong>VE</strong> es donde eso se define.</p>
        <p>La VE es un mapa 3D con la <strong>carga</strong> (MAP) en vertical y las <strong>RPM</strong> en horizontal. Cada celda dice cuánto aire entra ahí — y de ahí sale la nafta.</p>
        <ol>
          <li>Definís un AFR objetivo.</li>
          <li>Recorrés cada zona y comparás el AFR real (wideband) contra el objetivo.</li>
          <li>Pobre, subís VE; rica, bajás. Interpolás para que quede suave.</li>
        </ol>
        <div class="callout check"><span class="clabel">✓ Cómo comprobarlo</span><p>Una VE sana es suave, sin picos ni pozos bruscos entre celdas vecinas. Un "diente de sierra" en la tabla casi siempre es un error de mapeo, no una necesidad del motor.</p></div>`},
      { id:"b6-2", module:"Módulo 6 · Combustible", title:"AFR objetivo y ajuste manual",
        html:`
        <p>Primero decidís qué mezcla querés en cada zona. Después ajustás la VE hasta alcanzarla.</p>
        <ul>
          <li><strong>Ralentí y crucero:</strong> ~14,7 (económico y limpio).</li>
          <li><strong>Carga parcial:</strong> levemente rico.</li>
          <li><strong>Plena carga, aspirado:</strong> ~12,8–13,2.</li>
          <li><strong>Plena carga, turbo:</strong> ~11,5–12,2 según boost. La nafta extra enfría y protege.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Bajo carga y boost, ante la duda, del lado rico. Pobre arriba sube la temperatura, favorece la detonación y rompe pistones. La potencia se busca con margen, de a poco — nunca de un salto.</p></div>`},
      { id:"b6-3", module:"Módulo 6 · Combustible", title:"Arranque en frío: warmup y post-arranque",
        html:`
        <p>Un motor frío pide más nafta que uno caliente: el combustible se condensa en las paredes frías. Si no se la das, no toma o se apaga.</p>
        <p>Lo maneja el <strong>enriquecimiento de calentamiento (warmup)</strong>: una curva de porcentaje extra según la temperatura.</p>
        <ul>
          <li>A -10 °C puede pedir +50% o más.</li>
          <li>A temperatura de régimen, 0% extra: la VE ya alcanza.</li>
        </ul>
        <div class="callout check"><span class="clabel">✓ Cómo comprobarlo</span><p>Afiná el frío en un arranque real de mañana, con el motor bien frío. Es la única forma de ver la curva completa; con el motor tibio no la vas a calibrar bien.</p></div>`},
      { id:"b6-4", module:"Módulo 6 · Combustible", title:"Enriquecimiento por aceleración y corte en desaceleración",
        html:`
        <p>Cuando pisás de golpe, el aire entra al instante y la nafta llega tarde. Ese desfasaje es el tirón que hay que eliminar.</p>
        <p>Lo corrige el <strong>enriquecimiento por aceleración</strong>: un pulso extra al detectar un cambio brusco, disparado por TPSdot (velocidad del acelerador) o MAPdot.</p>
        <div class="callout watch"><span class="clabel">⚠ Si está mal</span><ul><li><strong>Poco:</strong> pozo o tirón al acelerar.</li><li><strong>Mucho:</strong> humo negro y ahogo momentáneo.</li></ul></div>
        <p>Del otro lado, el <strong>corte en desaceleración (DFCO)</strong> corta la nafta al soltar el acelerador con el motor girando: ahorra y frena con motor limpio.</p>
        <div class="callout tip"><span class="clabel">◆ Cómo se ajusta</span><p>Buscá el mínimo enriquecimiento que elimine el pozo, con pisadas rápidas en distintas marchas y el AFR en el log durante la transición.</p></div>`}
    ]
  },
  {
    title:"RALENTÍ",
    lessons:[
      { id:"b7-1", module:"Módulo 7 · Ralentí", title:"Control de ralentí: paso a paso y PWM",
        html:`
        <p>El ralentí estable se logra controlando cuánto aire entra con el acelerador cerrado. La válvula que lo hace (IAC) es de dos tipos:</p>
        <ul>
          <li><strong>Paso a paso (stepper):</strong> un motorcito que abre y cierra por pasos. Muy común de fábrica.</li>
          <li><strong>PWM:</strong> una válvula comandada por señal modulada.</li>
        </ul>
        <p>Ajustes que suman: <strong>idle advance</strong> (usar el avance para estabilizar), <strong>dashpot</strong> (que no se apague al soltar de golpe) y <strong>AC idle-up</strong> (sube el ralentí con el aire acondicionado).</p>
        <div class="callout watch"><span class="clabel">⚠ Si está mal</span><ul><li><strong>Se queda acelerado:</strong> válvula abierta de más o TPS que no ve el 0%.</li><li><strong>Se apaga al soltar:</strong> falta dashpot o el ralentí base es muy bajo.</li></ul></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Todas las BDV traen salida paso a paso de 2, 3 y 4 cables: manejás la mayoría de las válvulas IAC de fábrica sin adaptadores.</p></div>`}
    ]
  },
  {
    title:"CORRECCIONES Y DIAGNÓSTICO",
    lessons:[
      { id:"b8-1", module:"Módulo 8 · Correcciones y diagnóstico", title:"Correcciones automáticas: aire, batería y altitud",
        html:`
        <p>La ECU corrige sola varias cosas para que el tune no dependa del día. Conocerlas te ahorra re-mapear de gusto.</p>
        <ul>
          <li><strong>Por temperatura de aire (IAT):</strong> el aire caliente es menos denso — saca nafta; el frío, agrega.</li>
          <li><strong>Por voltaje / dead time:</strong> si baja la batería, el inyector abre más lento; la ECU alarga el pulso.</li>
          <li><strong>Barométrica / altitud:</strong> en altura hay menos aire — corrige para que no se vaya de rica.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Si el auto "anda distinto según el día" o el AFR se corre solo, revisá estas correcciones antes de tocar la VE. La mayoría de esos misterios son correcciones mal configuradas, no la tabla.</p></div>`},
      { id:"b8-2", module:"Módulo 8 · Correcciones y diagnóstico", title:"Datalogging: grabar y leer tu primer log",
        html:`
        <p>Afinar sin datalog es adivinar. El log es la grabación de todo lo que hizo el motor mientras manejabas.</p>
        <p>Grabá una salida tranquila y mirá:</p>
        <ul>
          <li><strong>AFR real vs objetivo:</strong> ¿logra la mezcla que le pediste?</li>
          <li><strong>Temperatura de motor:</strong> ¿estabiliza donde debe?</li>
          <li><strong>Duty de inyectores:</strong> ¿queda margen?</li>
          <li><strong>RPM y MAP:</strong> para ubicar en qué celda estabas.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Con el Bluetooth ves estos valores en vivo en el celular mientras otro maneja — práctico para cazar el punto exacto donde algo se va de rango.</p></div>`},
      { id:"b8-3", module:"Módulo 8 · Correcciones y diagnóstico", title:"Diagnóstico de arranque y ralentí",
        html:`
        <p>Un preparador no prueba al azar. Ante un síntoma, tiene una lista corta de causas probables y las descarta en orden.</p>
        <ul>
          <li><strong>No arranca (ni tose):</strong> sincronización. Señal, flanco y dientes con el tooth logger. ¿Hay chispa? ¿Ceba la bomba?</li>
          <li><strong>Arranca y se apaga:</strong> after-start o warmup; que el ralentí tenga aire.</li>
          <li><strong>Ratea en ralentí:</strong> mezcla despareja, IAC mal ajustado o warmup pobre.</li>
          <li><strong>Se queda acelerado:</strong> IAC abierto de más, TPS que no ve el 0% o toma de aire falsa.</li>
          <li><strong>Se ahoga:</strong> cranking o prime de más.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Un síntoma, una hipótesis, un cambio, una prueba. Cambiá de a una cosa o no vas a saber qué la arregló.</p></div>`}
    ]
  },
  {
    title:"CIERRE: LISTO PARA LA CALLE",
    lessons:[
      { id:"b9-1", module:"Módulo 9 · Cierre", title:"Respaldos, versiones y entrega final",
        html:`
        <p>Que un auto "ande" no es lo mismo que esté terminado. Terminado es que ande bien en toda condición y quede documentado.</p>
        <ul>
          <li><strong>Probá los extremos:</strong> arranque en frío de mañana, ciudad con tráfico, ruta sostenida y una pisada a fondo controlada.</li>
          <li><strong>Versioná con nombre y fecha:</strong> "calle final — jul".</li>
          <li><strong>Anotá</strong> qué inyectores, sensores y combustible usaste.</li>
        </ul>
        <p>Con esto sabés hacer arrancar, afinar y dejar un auto listo para la calle. El <strong>Avanzado</strong> te lleva a turbo, competición y afinación fina.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>El soporte de BDV es directo, de quien fabrica la placa. ¿Tenés preguntas o dudas? Escribinos por WhatsApp con tu tune y tu log.</p></div>`}
    ]
  }
];

/* ============================================================
   CURSO AVANZADO
   ============================================================ */
COURSES.avanzado.modules = [
  {
    title:"MAPEO ASISTIDO",
    lessons:[
      { id:"a1-1", module:"Módulo 1 · Mapeo asistido", title:"VE Analyze Live (Autotune): mapear con la wideband",
        html:`
        <p>El autotune corrige la VE mientras manejás. Bien usado, te ahorra horas. Mal usado, te rompe el motor.</p>
        <p><strong>VE Analyze Live</strong> (versión registrada) compara el AFR real con el objetivo y ajusta cada celda que pisás.</p>
        <ol>
          <li>Partí de una VE sana y un AFR objetivo bien puesto.</li>
          <li>Activalo y cubrí zonas de a poco.</li>
          <li>Dejá que corrija carga parcial y crucero; la alta carga, a mano.</li>
        </ol>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>El autotune no entra a plena carga ni a boost. Son pocas pasadas, rápidas y peligrosas: esas celdas se ajustan a mano, con el log delante.</p></div>`},
      { id:"a1-2", module:"Módulo 1 · Mapeo asistido", title:"Filtros, peso de muestras y AFR objetivo",
        html:`
        <p>El autotune es tan bueno como los datos que le dejás entrar. Los filtros deciden qué muestras cuentan.</p>
        <ul>
          <li><strong>Filtros de estado:</strong> ignorar muestras en aceleración brusca, en frío, con DFCO activo o fuera de rango.</li>
          <li><strong>Peso de muestras:</strong> cuánto confía en cada lectura. Más peso corrige rápido pero ruidoso; menos, suave y lento.</li>
          <li><strong>Delay de sonda:</strong> compensa el tiempo que tarda el gas en llegar a la wideband.</li>
        </ul>
        <div class="callout check"><span class="clabel">✓ Cómo comprobarlo</span><p>Mirá los histogramas: cuántas muestras juntaste por celda. Una celda con dos lecturas no es dato, es ruido — no confíes en ella.</p></div>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Definí el AFR objetivo antes de autotunear. El autotune persigue ese objetivo: si está mal, vas a tener una VE perfecta hacia el número equivocado.</p></div>`}
    ]
  },
  {
    title:"LEER LOS DATOS COMO UN PRO",
    lessons:[
      { id:"a2-1", module:"Módulo 2 · Datalogs", title:"MegaLogViewer: qué mirar primero",
        html:`
        <p>Un log tiene cientos de canales. Leído sin orden, no dice nada. Con orden, te lleva al problema en minutos.</p>
        <p><strong>MegaLogViewer</strong> analiza logs en profundidad e incluso ajusta la VE offline. Leelo en este orden:</p>
        <ol>
          <li><strong>Sincro:</strong> ¿pérdidas o errores de captura? Si sí, nada más importa.</li>
          <li><strong>AFR real vs objetivo:</strong> ¿dónde se aleja y en qué condición?</li>
          <li><strong>Duty de inyectores y presión de combustible:</strong> ¿queda margen? ¿aguanta bajo carga?</li>
          <li><strong>Avance y temperatura:</strong> ¿coherentes con la carga?</li>
        </ol>
        <div class="callout tip"><span class="clabel">◆ Método</span><p>Superponé AFR objetivo y real en un mismo gráfico: la distancia entre las dos líneas es tu lista de tareas. Donde se pegan, está afinado; donde se separan, hay trabajo.</p></div>`},
      { id:"a2-2", module:"Módulo 2 · Datalogs", title:"Detectar problemas en el log",
        html:`
        <p>Cada problema deja una firma en el log. Aprender a reconocerla es diagnosticar sin ver el auto.</p>
        <ul>
          <li><strong>Pobre bajo carga:</strong> el AFR sube al pisar a fondo. Falta VE arriba o falta combustible.</li>
          <li><strong>Bomba o inyector insuficiente:</strong> el AFR se va de pobre a medida que sube el boost y el duty ya está al tope.</li>
          <li><strong>Misfire / bobina fallando:</strong> pinchazos de AFR pobre erráticos y tirones, a veces en un cilindro.</li>
          <li><strong>Pérdida de sincronismo:</strong> saltos de RPM imposibles o contadores de error subiendo.</li>
          <li><strong>Presión de combustible que cae:</strong> AFR pobre progresivo arriba pese a VE correcta.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Ante cualquier pobre bajo carga o boost, primero sacá presión y después diagnosticá. Un log lindo no vale un pistón.</p></div>`}
    ]
  },
  {
    title:"ENCENDIDO AVANZADO",
    lessons:[
      { id:"a3-1", module:"Módulo 3 · Encendido", title:"Tabla de avance y dwell",
        html:`
        <p>El avance define cuánto antes salta la chispa. Es de donde sale la potencia, y también donde se rompen los motores.</p>
        <p>Más avance da más tiempo para quemar, hasta un óptimo (<strong>MBT</strong>). Pasado ese punto no ganás nada y aparece detonación.</p>
        <ul>
          <li>Más avance en baja carga y crucero (la mezcla pobre quema lento).</li>
          <li>Menos avance en alta carga y boost (la mezcla densa quema rápido y detona fácil).</li>
        </ul>
        <p>El <strong>dwell</strong> es el tiempo de carga de la bobina: poco = chispa débil; mucho = calienta y la arruina.</p>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Antes de tocar el encendido, asegurate de que el combustible esté correcto. Subir avance sobre una mezcla pobre es la receta más rápida para romper un motor. Y subilo de a 1–2° por vez, solo mientras siga ganando.</p></div>`},
      { id:"a3-2", module:"Módulo 3 · Encendido", title:"Detonación: qué es y cómo dejar margen",
        html:`
        <p>La detonación no avisa dos veces. Suena a canicas bajo carga y rompe pistones. La clave es no acercarse.</p>
        <p>Es cuando la mezcla se autoenciende de forma descontrolada, en vez de quemar parejo desde la chispa. La causan el exceso de avance, la mezcla pobre bajo carga, el boost alto, el aire caliente o el bajo octanaje.</p>
        <p>Cómo dejar margen:</p>
        <ul>
          <li><strong>AFR:</strong> del lado rico bajo carga y boost — enfría la cámara.</li>
          <li><strong>Avance:</strong> conservador arriba; no persigas el último grado.</li>
          <li><strong>EGT:</strong> si la tenés, es tu termómetro de qué tan al límite estás.</li>
          <li><strong>Combustible:</strong> más boost pide más octanaje.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> tiene entradas ADC para sensores como EGT: un dato objetivo para afinar al límite sin jugártela de oído.</p></div>`}
    ]
  },
  {
    title:"TURBO Y CONTROL DE BOOST",
    lessons:[
      { id:"a4-1", module:"Módulo 4 · Turbo", title:"Wastegate y control de boost: lazo abierto vs cerrado",
        html:`
        <p>El control de boost decide cuánta presión genera el turbo, comandando la <strong>wastegate</strong> a través de una solenoide. La diferencia entre lazo abierto y cerrado es qué tan consistente es esa presión.</p>
        <ul>
          <li><strong>Lazo abierto:</strong> duty fijo según RPM. Simple, pero el boost varía con la temperatura y el día.</li>
          <li><strong>Lazo cerrado:</strong> le ponés un objetivo y la ECU ajusta sola (PID) para clavarlo.</li>
        </ul>
        <p>Se empieza en lazo abierto para conocer el sistema y se pasa a cerrado con un objetivo realista.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Todas las BDV tienen control de boost. La <strong>MegaSquirt 3 Pro</strong> suma lazo cerrado y hasta dos mapas de presión turbo.</p></div>`},
      { id:"a4-2", module:"Módulo 4 · Turbo", title:"Boost por marcha, velocidad o potenciómetro",
        html:`
        <p>El mismo boost en todas las marchas no sirve: en las cortas patina, en las largas queda corto.</p>
        <ul>
          <li><strong>Por marcha:</strong> menos presión en 1ª y 2ª (tracción), más en las largas.</li>
          <li><strong>Por velocidad:</strong> lo mismo, referenciado a la velocidad de rueda.</li>
          <li><strong>Por potenciómetro:</strong> una perilla para subir o bajar el objetivo en vivo.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> permite control de boost por potenciómetro, por velocidad o por marcha.</p></div>`},
      { id:"a4-3", module:"Módulo 4 · Turbo", title:"Seguridad de boost: boost cut y protección",
        html:`
        <p>El turbo es donde más rápido se rompe un motor. Las protecciones no son opcionales.</p>
        <ul>
          <li><strong>Boost cut:</strong> si la presión supera un límite seguro (un caño salido, una wastegate trabada), la ECU corta.</li>
          <li><strong>Protección por AFR pobre:</strong> si bajo boost la mezcla se va de pobre, actuar antes de que detone.</li>
          <li><strong>Overboost escalonado:</strong> permitir un pico breve, cortar si se sostiene.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Configurá el boost cut antes de la primera pasada fuerte, no después del primer susto. Es lo que te salva de un caño que se sale a máxima carga.</p></div>`}
    ]
  },
  {
    title:"LAZO CERRADO",
    lessons:[
      { id:"a5-1", module:"Módulo 5 · Lazo cerrado", title:"Mezcla, ralentí y boost autocorregidos",
        html:`
        <p>El lazo cerrado deja que la ECU se corrija sola en vivo. Es un afinador fino, no un tapa-agujeros.</p>
        <ul>
          <li><strong>Mezcla (EGO):</strong> con la wideband, ajusta la nafta para mantener el AFR objetivo, dentro de un límite (ej. ±10%).</li>
          <li><strong>Ralentí cerrado:</strong> mantiene las RPM clavadas ajustando aire y avance.</li>
          <li><strong>Boost cerrado:</strong> clava el boost objetivo.</li>
        </ul>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Si la ECU corrige +25% todo el tiempo, tu VE está mal. Arreglá la tabla, no subas el límite de corrección — estarías escondiendo el problema.</p></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> tiene control de circuito cerrado de mezcla, de presión turbo y de ralentí.</p></div>`}
    ]
  },
  {
    title:"FUNCIONES DE COMPETICIÓN",
    lessons:[
      { id:"a6-1", module:"Módulo 6 · Competición", title:"Launch control (fijo y variable)",
        html:`
        <p>Una buena largada se define antes de soltar el embrague, con el motor sostenido en las vueltas justas.</p>
        <p>El <strong>launch control</strong> mantiene las RPM con el acelerador a fondo: cortás nafta y chispa a un límite (2-step) y soltás el embrague con el motor listo.</p>
        <ul>
          <li><strong>Fijo:</strong> un solo RPM de largada.</li>
          <li><strong>Variable:</strong> el límite cambia (por tiempo, velocidad o perilla), útil para construir boost antes de largar.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Todas las BDV traen control de largada. La <strong>MegaSquirt 3 Pro</strong> suma launch control fijo o variable.</p></div>`},
      { id:"a6-2", module:"Módulo 6 · Competición", title:"Flat-shift y shift-cut por marcha",
        html:`
        <p>Levantar el pie para cambiar cuesta boost y tiempo. El flat-shift y el shift-cut te dejan cambiar a fondo.</p>
        <p><strong>Flat-shift:</strong> la ECU corta encendido e inyección un instante para liberar la transmisión mientras metés el cambio, y retoma.</p>
        <p><strong>Shift-cut para cajas secuenciales:</strong> con un sensor en la palanca, hace un corte preciso y con tiempos programables por marcha. Cada marcha puede pedir un tiempo distinto.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> tiene shift-cut con tiempos independientes para 6 marchas, más limitador y flat-shift.</p></div>`},
      { id:"a6-3", module:"Módulo 6 · Competición", title:"Control de tracción",
        html:`
        <p>Potencia que no llega al piso no sirve. El control de tracción evita que las ruedas motrices patinen.</p>
        <p>Compara la velocidad de las ruedas motrices contra las libres. Si patinan, interviene cortando potencia o bajando boost hasta recuperar agarre.</p>
        <p>Configurás cuánto <strong>slip</strong> se permite y qué tan agresiva es la intervención. Muy agresivo frena; muy suave no sirve. Se calibra en pista.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>El control de tracción es una función de la <strong>MegaSquirt 3 Pro</strong>.</p></div>`},
      { id:"a6-4", module:"Módulo 6 · Competición", title:"Anti-lag",
        html:`
        <p>El lag es el tiempo muerto del turbo. El anti-lag lo elimina manteniéndolo soplando cuando soltás.</p>
        <p>Retrasa mucho el encendido y mete combustible, de modo que parte de la combustión ocurre en el escape y sigue moviendo el turbo.</p>
        <div class="callout watch"><span class="clabel">⚠ Nunca hagas esto</span><p>No lo uses en la calle ni sin el hardware preparado. Genera mucho calor y es duro con motor, turbo y escape. Se usa medido, en competición.</p></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> incluye anti-lag.</p></div>`}
    ]
  },
  {
    title:"SECUENCIAL Y AFINACIÓN FINA",
    lessons:[
      { id:"a7-1", module:"Módulo 7 · Secuencial", title:"Inyección secuencial y timing de inyección",
        html:`
        <p>La inyección secuencial dispara cada inyector en su momento, no todos juntos. Da mejor ralentí, mejor respuesta y control fino, pero necesita <strong>sincro de leva</strong>.</p>
        <p>El <strong>timing de inyección</strong> (en qué grados se abre el inyector) se ajusta, fijo o por mapa, para optimizar el llenado. En la mayoría de los proyectos el default anda bien; en afinación fina se explora.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La secuencial completa es donde manda la <strong>MegaSquirt 3 Pro</strong> (hasta 8 cilindros secuencial), con inicio de inyección de 0° a 720°, fijo o variable por mapa 12×12.</p></div>`},
      { id:"a7-2", module:"Módulo 7 · Secuencial", title:"Trims por cilindro: emparejar los cilindros",
        html:`
        <p>No todos los cilindros reciben lo mismo. Emparejarlos es lo que te deja llegar al límite con seguridad.</p>
        <p>La geometría del múltiple deja unos más ricos o pobres. Los <strong>trims por cilindro</strong> ajustan combustible (y a veces avance) cilindro por cilindro.</p>
        <div class="callout check"><span class="clabel">✓ Cómo comprobarlo</span><p>Mirá EGT por cilindro o sondas individuales: emparejá las temperaturas ajustando cada trim. Un cilindro más caliente que el resto es el que primero va a fallar bajo carga.</p></div>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> tiene ocho mapas de combustible y ocho de encendido de 5×5 para corregir las variaciones entre cilindros.</p></div>`}
    ]
  },
  {
    title:"ESTRATEGIAS MULTI-MAPA",
    lessons:[
      { id:"a8-1", module:"Módulo 8 · Multi-mapa", title:"Doble tabla por pulsador y doble mapa por interruptor",
        html:`
        <p>A veces necesitás dos configuraciones en el mismo auto y poder cambiar en el momento.</p>
        <ul>
          <li><strong>Doble tabla (DT) por pulsador:</strong> activás una segunda tabla con un botón — un mapa más suave para lluvia o para prestar el auto.</li>
          <li><strong>Doble mapa por interruptor:</strong> cambiás entre dos juegos completos de combustible, encendido y boost con una llave — "calle / pista" o "nafta común / nafta de carrera".</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Todas las BDV tienen DT por pulsador. La <strong>MegaSquirt 3 Pro</strong> permite además dos mapas de combustible, encendido y boost por interruptor.</p></div>`}
    ]
  },
  {
    title:"DISTRIBUCIÓN VARIABLE (VVT)",
    lessons:[
      { id:"a9-1", module:"Módulo 9 · VVT", title:"Control de árboles: hasta 4 válvulas",
        html:`
        <p>La distribución variable mueve los árboles según las vueltas. Bien usada, te da torque abajo y potencia arriba, sin tener que elegir entre uno y otro.</p>
        <p>La ECU comanda el solenoide de VVT en lazo cerrado (PID) para llevar cada árbol al ángulo objetivo de una tabla. Se afina buscando el ángulo que más torque da en cada zona.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Todas las BDV manejan VVT. La <strong>MegaSquirt 3 Pro</strong> soporta distribuciones continuas y on-off, con tablas independientes y hasta 4 válvulas.</p></div>`}
    ]
  },
  {
    title:"MARIPOSA ELECTRÓNICA",
    lessons:[
      { id:"a10-1", module:"Módulo 10 · Mariposa electrónica", title:"Control de mariposa: calibración y seguridad",
        html:`
        <p>Una mariposa electrónica no tiene cable: la ECU lee el pedal y comanda la mariposa. Lo primero acá no es la potencia, es la seguridad.</p>
        <p>Habilita cruise real, control de tracción por mariposa y gestión fina del ralentí. Lo crítico es la <strong>calibración</strong> (aprender los topes de pedal y mariposa) y el <strong>failsafe</strong>: doble sensor en pedal y mariposa, y ante cualquier incoherencia el sistema cierra la mariposa, nunca abre por error.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>BDV tiene un producto dedicado, el <strong>Control de mariposa electrónica</strong>: soporta cualquier mariposa, se calibra por USB de forma automática, maneja el ralentí y trae seguridad ante falla de los sensores de pedal y mariposa.</p></div>`}
    ]
  },
  {
    title:"PROTECCIONES Y SEGURIDAD",
    lessons:[
      { id:"a11-1", module:"Módulo 11 · Seguridad", title:"Limitador, protecciones y failsafes",
        html:`
        <p>Un motor de potencia sin protecciones es una bomba de tiempo. Estas son las que no pueden faltar:</p>
        <ul>
          <li><strong>Limitador de RPM:</strong> corta antes de pasarse. Preferí el corte suave para no castigar la transmisión.</li>
          <li><strong>Presión de aceite:</strong> si cae, avisar o cortar antes de fundir.</li>
          <li><strong>Temperatura:</strong> actuar si el motor se recalienta.</li>
          <li><strong>Mezcla pobre:</strong> si bajo carga el AFR se va de pobre, intervenir.</li>
          <li><strong>Failsafe / limp:</strong> ante falla de un sensor clave, ir a un modo seguro en vez de romper.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Las salidas programables de tu BDV (2 en la MegaSquirt 2, 6 en la MegaSquirt 3 mini, 8 en la MegaSquirt 3 Pro) te dejan armar estas protecciones y avisos a medida del proyecto.</p></div>`},
      { id:"a11-2", module:"Módulo 11 · Seguridad", title:"Sensores externos por ADC: EGT y presiones",
        html:`
        <p>Para afinar al límite, necesitás ver más de lo que traen los sensores básicos.</p>
        <ul>
          <li><strong>EGT (temperatura de escape):</strong> el mejor termómetro de qué tan al límite está la combustión. Clave para turbo y para trims por cilindro.</li>
          <li><strong>Presión de combustible / aceite:</strong> para proteger y para diagnosticar caídas bajo carga.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> trae entradas ADC para sensores externos (presión, temperatura, EGT) y 4 entradas de 5V y 1 de 12V.</p></div>`}
    ]
  },
  {
    title:"EXTRAS Y MÉTODO PROFESIONAL",
    lessons:[
      { id:"a12-1", module:"Módulo 12 · Cierre", title:"Metanol por PWM, alternador y salidas programables",
        html:`
        <p>Estas funciones no las usa todo proyecto, pero cuando hacen falta, definen el resultado.</p>
        <ul>
          <li><strong>Bomba de metanol/agua por PWM:</strong> la ECU regula la inyección proporcional a la carga — enfría la admisión y sube el octanaje efectivo.</li>
          <li><strong>Control de alternador:</strong> evita caídas de tensión que ensucian sensores e inyección.</li>
          <li><strong>Salidas programables (on/off o PWM):</strong> ventiladores, válvulas, testigos, etapas.</li>
        </ul>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>La <strong>MegaSquirt 3 Pro</strong> tiene mapa para la bomba de metanol por PWM, control de alternador y salidas programables (3 de 3A y 2 de 5A). Su modo de prueba con motor parado te deja verificar cada una antes de rodar.</p></div>`},
      { id:"a12-2", module:"Módulo 12 · Cierre", title:"El método del preparador",
        html:`
        <p>Lo que separa a un profesional no es saber más pantallas. Es el orden con el que trabaja.</p>
        <p>El orden correcto para calibrar cualquier proyecto:</p>
        <ol>
          <li>Hardware y sincro impecables.</li>
          <li>Arranque y ralentí estables.</li>
          <li>Combustible (VE/AFR) en carga parcial y crucero.</li>
          <li>Encendido con margen.</li>
          <li>Plena carga / boost, de a poco, con el log delante.</li>
          <li>Protecciones activas y probadas.</li>
          <li>Terminado en calle o pista, en distintas condiciones.</li>
        </ol>
        <div class="callout rule"><span class="clabel">▸ Regla</span><p>Una cosa por vez, todo con datalog, y versionado con nombre y fecha. El que documenta resuelve en minutos lo que al desprolijo le lleva horas.</p></div>`},
      { id:"a12-3", module:"Módulo 12 · Cierre", title:"Proyecto final: de la ECU en blanco al auto documentado",
        html:`
        <p>El cierre del curso es hacerlo completo, solo, con método. Agarrá un proyecto (idealmente turbo) y llevalo de punta a punta:</p>
        <ol>
          <li>Configurar el <strong>hardware</strong>: motor, inyectores, bobinas, sensores.</li>
          <li>Resolver la <strong>sincronización</strong> y verificarla con el tooth logger.</li>
          <li><strong>Arrancar</strong> y estabilizar el <strong>ralentí</strong>.</li>
          <li>Calibrar <strong>combustible</strong> y <strong>encendido</strong>.</li>
          <li>Afinar <strong>conducción normal</strong> con autotune y ajuste manual.</li>
          <li>Configurar <strong>control de boost</strong> y sus <strong>protecciones</strong>.</li>
          <li>Sumar las <strong>funciones de competición</strong> que el auto use.</li>
          <li>Entregar una <strong>calibración documentada</strong> y versionada.</li>
        </ol>
        <p>Si podés hacer esto con criterio, ya no dependés de nadie: sabés gestionar un motor.</p>
        <div class="callout bdv"><span class="clabel">/// EN TU BDV</span><p>Y si en el proyecto real te trabás, del otro lado hay soporte directo de quien fabrica tu ECU. ¿Tenés preguntas o dudas? Escribinos con tu tune y tu log.</p></div>`}
    ]
  }
];
