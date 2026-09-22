# Reto Final: Aplicación de Gestión de Tareas con React

> Reemplaza a `_archivo/Proyecto Final React (original).pdf`. Rúbrica ajustada al temario real del curso (ver [`Temario.md`](Temario.md)) para que sea alcanzable por todos los aprendedores, con una extensión opcional para quien quiera ir más allá.

## Objetivo
Comprender la estructura y funcionamiento de React en la creación de aplicaciones web modernas, aplicando los conceptos fundamentales del framework mediante el desarrollo de una aplicación de gestión de tareas.

## Descripción
El aprendedor construye, a partir del Tema 4, una aplicación de gestión de tareas que crece sesión a sesión hasta cubrir todo lo visto en el curso. Se parte de [`Plantilla-Reto-Final/`](Plantilla-Reto-Final/).

---

## Requisitos obligatorios

- Crear, completar, editar y eliminar tareas
- Filtrar tareas (todas / pendientes / completadas)
- Persistencia de datos en `localStorage`
- Al menos 2 rutas con React Router (ej. lista de tareas y detalle/edición)
- Estado global con **Context API**
- Estilos con CSS Modules o styled-components, con **una transición/animación simple** y una **pasada básica de accesibilidad** (labels asociados, contraste, navegable por teclado)
- Al menos **1 hook personalizado** propio (ej. `useTareas` o similar)
- Al menos **2–3 pruebas** con Vitest + React Testing Library

## Extensión opcional (no gatea la entrega, es para ir más allá)

- Redux Toolkit en vez de/junto a Context API
- Consumir una API externa (ej. sugerencia de tarea, frase del día)
- `React.memo`/`useMemo` en la lista de tareas (recomendado siempre, obligatorio solo en la extensión)

---

## Avances (alineados a las sesiones del curso, no a semanas sueltas)

| Cuándo | Qué se espera tener avanzado |
|---|---|
| Semana 1 (Sesiones 1–2) | Boceto de diseño (pantallas, paleta, estructura de componentes) |
| Semana 2 (Sesiones 3–4) | Formulario de tareas funcionando + app arrancada con React Router |
| Semana 3 (Sesiones 5–6) | Estilos, transición, accesibilidad aplicados (+ API externa si se anima a la extensión) |
| Semana 4 (Sesiones 7–8) | Estado global con Context, `localStorage`, hook personalizado, pruebas |
| Semana 5 (Sesiones 9–10) | **Laboratorio de cierre** — sin contenido nuevo. Terminar pendientes, pulir, y ensayar la entrega con acompañamiento del profesor |

## Entrega del Proyecto Final

Para la revisión del proyecto:
1. Presentación de la aplicación funcionando
2. Explicación del código y decisiones de diseño
3. Demostración de las pruebas (`npm test`)
4. Revisión del documento de diseño inicial

El proyecto debe incluir:
- Código fuente completo
- Documentación básica de instalación y uso (`README.md` con `npm install` / `npm run dev`)
- Pruebas (Vitest + React Testing Library)
- Diseño responsive y con la pasada de accesibilidad de la sección de estilos

**Fecha de entrega:** Semana 5.

---

## Rúbrica de evaluación

| Criterio | Altamente competente (100–86%) | Competente (85–70%) | Aún sin desarrollar (69–0%) | Ponderación |
|---|---|---|---|---|
| 1. Documento de diseño | Incluye todos los elementos con detalle completo | Incluye la mayoría de los elementos | Elementos insuficientes o incompletos | 10% |
| 2. Estructura de componentes | Bien organizada y reutilizable | Funcional, con oportunidades de mejora | Confusa o inadecuada | 20% |
| 3. Estado global (Context API) | Implementado correctamente, separación clara de acciones | Funciona, implementación básica | Incorrecto o no funciona | 20% |
| 4. Funcionalidades (CRUD, filtros, rutas, `localStorage`) | Todas implementadas y funcionan correctamente | La mayoría implementadas, con algunos errores | Faltan funcionalidades importantes | 25% |
| 5. Estilos, accesibilidad y testing | Estilos encapsulados + transición + accesibilidad + pruebas pasando | Cumple parcialmente alguno de los cuatro | Ausente o con problemas graves | 25% |
| **Total** | | | | **100%** |

> El criterio de "Testing y calidad de código" del reto original se fusionó con Estilos/Accesibilidad (criterio 5) porque ambos se enseñan y se aplican juntos en las últimas sesiones del curso — ver el mapeo en `Temario.md`.

Solución de referencia (uso interno del instructor, no compartir antes de la entrega): [`Reto-Final-Referencia/`](Reto-Final-Referencia/).
