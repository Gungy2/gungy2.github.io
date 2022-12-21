import { readable } from 'svelte/store';

export const technologies = readable<Record<string, string>>({
  Java: 'java.svg',
  C: 'c.svg',
  Python: 'python.svg',
  Haskell: 'haskell.svg',
  JavaScript: 'js.svg',
  TypeScript: 'typescript.png',
  Elixir: 'elixir.svg',
  Elm: 'elm.svg',
  Rust: 'rust.png',
  Solidity: 'solidity.svg',
  Kotlin: 'kotlin.png',
  HTML5: 'html.svg',
  CSS: 'css.svg',
  Git: 'vc.svg',
  SQL: 'sql.svg',
  React: 'react.svg',
  Svelte: 'svelte.png',
  Flutter: 'flutter.png',
  Flask: 'flask.svg',
  'Apache Kafka': 'kafka.png',
});
