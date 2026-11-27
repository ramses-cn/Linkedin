# Arcade Hub · Colección de Juegos Web

Portada interactiva y colección de mini-juegos web corporativos publicados en **GitHub Pages**:  
👉 **[Jugar en línea](https://ramses-cn.github.io/Linkedin/)**

---

## Juegos incluidos

Cada título vive en su propia carpeta aislada dentro de `games/` y se presenta en su propia fila horizontal en la portada para evitar conflictos de estilos, variables o bucles de juego.

| # | Juego | Género | Controles | Carpeta |
|---|---|---|---|---|
| 01 | **Oficina 80s: Carrera hacia las Vacaciones** (`v1.1`) | Arcade 2D | Flechas / WASD · D-Pad · Swipe · Pausa (`P`) | `games/oficina-1984/` |
| 02 | **DinoCorp: Misión Salida a Tiempo** (`v4.1 Deluxe`) | Plataformas 2D | Flechas / WASD · Espacio · `X` Sello · `C` Dash · Táctil · Gamepad | `games/dinocorp/` |
| 03 | **Supervivencia Corporativa: Jefe de Área** (`v1.1`) | Shooter Roguelite 2D | WASD / Flechas + Ratón · Doble Joystick Táctil · Pausa (`P`) | `games/supervivencia-corporativa/` |

---

## Arquitectura del repositorio

```text
Linkedin/
├── index.html                          # Portada Arcade Hub (1 juego por fila)
├── games-registry.js                   # Catálogo central (window.GAMES_CATALOG)
├── assets/
│   └── og-cover.png                    # Imagen Open Graph (1200x630) para LinkedIn
├── games/
│   ├── oficina-1984/index.html         # Juego #01 aislado
│   ├── dinocorp/index.html             # Juego #02 aislado
│   └── supervivencia-corporativa/index.html # Juego #03 aislado
├── .gitattributes
└── README.md
```

### Cómo agregar un nuevo juego
1. Crea una carpeta independiente en `games/<slug>/index.html` con un enlace de regreso a `../../index.html`.
2. Registra una nueva entrada en `games-registry.js` dentro de `window.GAMES_CATALOG`.
3. La portada renderizará automáticamente la nueva fila sin modificar ni interferir con los demás juegos.
