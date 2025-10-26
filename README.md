# Molto Bene - Blog di Cucina Italiana

![App Preview](https://imgix.cosmicjs.com/e0864c70-b2c3-11f0-8dcc-651091f6a7c0-photo-1612874742237-6526221588e3-1761521479130.jpg?w=1200&h=300&fit=crop&auto=format,compress)

Un moderno blog di cucina italiana costruito con Next.js 16 e Cosmic CMS, che presenta ricette autentiche, profili di chef e organizzazione per categorie.

## ✨ Funzionalità

- 🍝 **Showcase delle Ricette**: Visualizzazione completa degli articoli con immagini ad alta risoluzione
- 👨‍🍳 **Profili degli Chef**: Pagine dedicate agli autori con biografia e informazioni di contatto
- 🏷️ **Categorie di Piatti**: Organizzazione per Primi Piatti, Secondi Piatti e Dolci
- ⏱️ **Informazioni Dettagliate**: Tempo di preparazione e livello di difficoltà per ogni ricetta
- 📱 **Design Responsive**: Esperienza ottimale su tutti i dispositivi
- 🚀 **Performance Ottimali**: Server-side rendering con Next.js 16 App Router
- 🎨 **Design Italiano Autentico**: Palette di colori ispirata alla tradizione italiana

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68feaec236b30fc40490a6ca&clone_repository=68feb04836b30fc40490a6f3)

## Prompts

Questa applicazione è stata creata utilizzando i seguenti prompts per generare la struttura dei contenuti e il codice:

### Content Model Prompt

> "Create a content model for an Italian food blog with posts, authors, and categories"

### Code Generation Prompt

> "Based on the content model I created for 'Create a content model for an Italian food blog with posts, authors, and categories', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

L'app è stata personalizzata per funzionare con la struttura dei contenuti Cosmic esistente e include tutte le funzionalità richieste sopra.

## 🛠️ Tecnologie Utilizzate

- **Next.js 16**: Framework React con App Router per rendering lato server
- **TypeScript**: Type-safety completa in tutta l'applicazione
- **Tailwind CSS**: Styling utility-first con design personalizzato
- **Cosmic CMS**: Headless CMS per la gestione dei contenuti
- **Imgix**: Ottimizzazione automatica delle immagini

## 📋 Prerequisiti

- Node.js 18+ o Bun
- Un bucket Cosmic con i seguenti object types:
  - `articoli` (Articoli)
  - `autori` (Autori)
  - `categorie` (Categorie)

## 🚀 Come Iniziare

### Installazione

```bash
# Clona il repository
git clone <repository-url>
cd molto-bene

# Installa le dipendenze
bun install
```

### Configurazione delle Variabili d'Ambiente

Crea un file `.env.local` nella root del progetto:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

⚠️ **Importante**: Non committare mai il file `.env.local` nel repository. È già incluso nel `.gitignore`.

### Avvio in Sviluppo

```bash
bun run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere l'applicazione.

### Build per Produzione

```bash
# Type check prima del build
bun run type-check

# Build dell'applicazione
bun run build

# Avvio in produzione
bun run start
```

## 📚 Esempi di Utilizzo Cosmic SDK

### Recuperare tutti gli Articoli con Relazioni

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'articoli' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const articoli = response.objects
```

### Recuperare un Articolo Specifico

```typescript
const response = await cosmic.objects
  .findOne({
    type: 'articoli',
    slug: 'carbonara-autentica-romana'
  })
  .depth(1)

const articolo = response.object
```

### Filtrare per Categoria

```typescript
const response = await cosmic.objects
  .find({
    type: 'articoli',
    'metadata.categoria': categoryId
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🔗 Integrazione Cosmic CMS

### Struttura del Content Model

**Articoli (articoli)**
- `titolo` (text): Titolo dell'articolo
- `contenuto` (html-textarea): Contenuto HTML della ricetta
- `immagine_principale` (file): Immagine di copertina
- `tempo_preparazione` (number): Tempo in minuti
- `difficolta` (select-dropdown): Facile, Media, Difficile
- `autore` (object): Relazione con Autori
- `categoria` (object): Relazione con Categorie

**Autori (autori)**
- `nome` (text): Nome dell'autore
- `biografia` (textarea): Biografia dello chef
- `foto_profilo` (file): Foto profilo
- `email` (text): Email di contatto

**Categorie (categorie)**
- `nome` (text): Nome della categoria
- `descrizione` (textarea): Descrizione della categoria

### Relazioni tra Object Types

L'applicazione utilizza il parametro `depth(1)` per recuperare automaticamente:
- L'autore completo per ogni articolo
- La categoria completa per ogni articolo
- Tutte le proprietà delle relazioni in una singola query

## 🚀 Opzioni di Deployment

### Vercel (Consigliato)

1. Fai push del codice su GitHub
2. Importa il progetto su [Vercel](https://vercel.com)
3. Configura le variabili d'ambiente:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Netlify

1. Fai push del codice su GitHub
2. Importa il progetto su [Netlify](https://netlify.com)
3. Configura le variabili d'ambiente
4. Deploy!

## 📝 Note Importanti

- Tutte le immagini sono ottimizzate automaticamente usando i parametri imgix
- L'applicazione usa il rendering lato server per performance ottimali
- I contenuti vengono recuperati dinamicamente dal bucket Cosmic
- Il type checking TypeScript previene errori di deployment

## 🤝 Supporto

Per domande o supporto:
- [Documentazione Cosmic](https://www.cosmicjs.com/docs)
- [Documentazione Next.js](https://nextjs.org/docs)
- [Documentazione Tailwind CSS](https://tailwindcss.com/docs)

<!-- README_END -->