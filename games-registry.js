/**
 * Catálogo central de juegos de la Portada (Arcade Hub).
 *
 * Para agregar un nuevo juego sin que interfiera con los demás:
 * 1. Crea su propia carpeta aislada en `games/<slug>/` (por ejemplo, `games/mi-juego/index.html`).
 * 2. Añade una entrada al arreglo `window.GAMES_CATALOG` con un `number` secuencial.
 * Cada entrada se renderiza en su propia fila horizontal independiente en `index.html`.
 */
window.GAMES_CATALOG = [
    {
        id: 'oficina-1984',
        number: '01',
        title: 'Oficina 80s: Carrera hacia las Vacaciones',
        badge: 'OFICINA ARCADE 1984',
        version: 'v2.0',
        status: 'playable',
        icon: '💼',
        accent: '#facc15',
        accentRgb: '250, 204, 21',
        genre: 'Arcade 2D',
        controls: 'Teclado · D-Pad · Táctil',
        description: 'Recolecta sobres y bonos dorados con multiplicador de combo mientras esquivas la burocracia en 5 pisos temáticos hasta tus vacaciones.',
        tags: ['5 Pisos', 'Combos x4', 'Synth 80s', 'Tarjeta LinkedIn'],
        path: 'games/oficina-1984/index.html',
        folder: 'games/oficina-1984/',
        highScoreKey: 'arcade_highscore',
        scorePrefix: '$',
        scoreSuffix: ''
    },
    {
        id: 'dinocorp-v4',
        number: '02',
        title: 'DinoCorp: Misión Salida a Tiempo',
        badge: 'DINOCORP v4.2 DELUXE',
        version: 'v4.2 Deluxe',
        status: 'playable',
        icon: '🦖',
        accent: '#22c55e',
        accentRgb: '34, 197, 94',
        genre: 'Plataformas 2D',
        controls: 'Teclado · Multi-Touch · Gamepad',
        description: 'Corre, salta con Coyote Time y usa el Dash Ejecutivo a través de 4 mundos con medallas por sector, Warp Zone y Jefe 5:55 PM.',
        tags: ['4 Mundos', 'Medallas', 'Chiptune 8-Bits', 'Tarjeta LinkedIn'],
        path: 'games/dinocorp/index.html',
        folder: 'games/dinocorp/',
        highScoreKey: 'dinocorp_v4_deluxe_save',
        highScoreField: 'highScore',
        scorePrefix: '$',
        scoreSuffix: ''
    },
    {
        id: 'supervivencia-corporativa',
        number: '03',
        title: 'Supervivencia Corporativa: Jefe de Área',
        badge: 'TOP-DOWN SHOOTER',
        version: 'v2.0',
        status: 'playable',
        icon: '👔',
        accent: '#38bdf8',
        accentRgb: '56, 189, 248',
        genre: 'Shooter Roguelite 2D',
        controls: 'WASD / Flechas + Ratón · Dash · Táctil',
        description: 'Sobrevive con radar táctico y Dash en una oficina infestada de zombis, auditores y practicantes; desbloquea mejoras y vence al Jefe de Área.',
        tags: ['Radar + Dash', '3 Armas', '7 Bonos RRHH', 'Tarjeta LinkedIn'],
        path: 'games/supervivencia-corporativa/index.html',
        folder: 'games/supervivencia-corporativa/',
        highScoreKey: 'supervivencia_highscore',
        highScoreField: 'bestKills',
        scorePrefix: '',
        scoreSuffix: ' bajas'
    }
];
