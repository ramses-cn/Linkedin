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
        version: 'v1.1',
        status: 'playable',
        icon: '💼',
        accent: '#facc15',
        accentRgb: '250, 204, 21',
        genre: 'Arcade 2D',
        controls: 'Teclado · D-Pad · Táctil',
        description: 'Recolecta sobres de pago y café mientras esquivas la burocracia a través de 5 pisos corporativos hasta llegar a tus vacaciones en la playa.',
        tags: ['5 Pisos', 'Pausa + i-Frames', 'Audio Retro', 'Tarjeta LinkedIn'],
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
        badge: 'DINOCORP v4.1 DELUXE',
        version: 'v4.1 Deluxe',
        status: 'playable',
        icon: '🦖',
        accent: '#22c55e',
        accentRgb: '34, 197, 94',
        genre: 'Plataformas 2D',
        controls: 'Teclado · Multi-Touch · Gamepad',
        description: 'Corre, salta con Coyote Time y usa el Dash Ejecutivo a través de 4 mundos corporativos (con Warp Zone secreta y Jefe 5:55 PM) para llegar a casa a tiempo.',
        tags: ['4 Mundos', 'Chiptune 8-Bits', '12 Carpetas', 'Jefe Final'],
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
        version: 'v1.1',
        status: 'playable',
        icon: '👔',
        accent: '#38bdf8',
        accentRgb: '56, 189, 248',
        genre: 'Shooter Roguelite 2D',
        controls: 'WASD / Flechas + Ratón · Doble Joystick',
        description: 'Sobrevive en una oficina procedural infestada de zombis corporativos, desbloquea armas y bonos de RRHH, y enfrenta al Jefe de Área cada 20 bajas.',
        tags: ['Mapa 3000×3000', '3 Armas', 'Audio Retro', 'Jefe de Área'],
        path: 'games/supervivencia-corporativa/index.html',
        folder: 'games/supervivencia-corporativa/',
        highScoreKey: 'supervivencia_highscore',
        highScoreField: 'bestKills',
        scorePrefix: '',
        scoreSuffix: ' bajas'
    }
];
