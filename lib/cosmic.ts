import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all articoli with relationships
export async function getArticoli() {
  try {
    const response = await cosmic.objects
      .find({ type: 'articoli' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch articoli');
  }
}

// Get single articolo by slug
export async function getArticoloBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'articoli',
        slug
      })
      .depth(1)
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch articolo');
  }
}

// Get all categorie
export async function getCategorie() {
  try {
    const response = await cosmic.objects
      .find({ type: 'categorie' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categorie');
  }
}

// Get articoli by categoria
export async function getArticoliByCategoria(categoriaId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'articoli',
        'metadata.categoria': categoriaId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch articoli by categoria');
  }
}

// Get all autori
export async function getAutori() {
  try {
    const response = await cosmic.objects
      .find({ type: 'autori' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch autori');
  }
}

// Get autore by slug
export async function getAutoreBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'autori',
        slug
      })
      .depth(1)
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch autore');
  }
}