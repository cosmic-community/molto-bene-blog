// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Articolo interface
export interface Articolo extends CosmicObject {
  type: 'articoli';
  metadata: {
    titolo: string;
    contenuto: string;
    immagine_principale?: {
      url: string;
      imgix_url: string;
    };
    tempo_preparazione?: number;
    difficolta?: {
      key: string;
      value: string;
    };
    autore?: Autore;
    categoria?: Categoria;
  };
}

// Autore interface
export interface Autore extends CosmicObject {
  type: 'autori';
  metadata: {
    nome: string;
    biografia?: string;
    foto_profilo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
  };
}

// Categoria interface
export interface Categoria extends CosmicObject {
  type: 'categorie';
  metadata: {
    nome: string;
    descrizione?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guard for Articolo
export function isArticolo(obj: CosmicObject): obj is Articolo {
  return obj.type === 'articoli';
}

// Type guard for Autore
export function isAutore(obj: CosmicObject): obj is Autore {
  return obj.type === 'autori';
}

// Type guard for Categoria
export function isCategoria(obj: CosmicObject): obj is Categoria {
  return obj.type === 'categorie';
}

// Type literals for select-dropdown values
export type DifficoltaLevel = 'Facile' | 'Media' | 'Difficile';