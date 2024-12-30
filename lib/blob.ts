import { put, del, list, get } from '@vercel/blob'
import { nanoid } from 'nanoid'

const STORE_ID = 'FdOsbQWWUiRHAv'


export async function uploadImage(file: File) {
  const { url } = await put(`${STORE_ID}/images/${nanoid()}-${file.name}`, file, { 
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN
  })
  return url
}

export async function deleteImage(url: string) {
  await del(url, { token: process.env.BLOB_READ_WRITE_TOKEN })
}

export async function listImages() {
  const { blobs } = await list({ prefix: `${STORE_ID}/images/`, token: process.env.BLOB_READ_WRITE_TOKEN })
  return blobs
}

export async function saveUser(userData: any) {
  const userId = nanoid()
  await put(`${STORE_ID}/users/${userId}.json`, JSON.stringify(userData), {
    access: 'private',
    token: process.env.BLOB_READ_WRITE_TOKEN
  })
  return userId
}

export async function getUser(userId: string) {
  const { blob } = await get(`${STORE_ID}/users/${userId}.json`, { token: process.env.BLOB_READ_WRITE_TOKEN })
  if (!blob) return null
  return JSON.parse(await blob.text())
}

export async function getUserByEmail(email: string) {
  const { blobs } = await list({ prefix: `${STORE_ID}/users/`, token: process.env.BLOB_READ_WRITE_TOKEN })
  for (const blob of blobs) {
    const { blob: userBlob } = await get(blob.url, { token: process.env.BLOB_READ_WRITE_TOKEN })
    const userData = JSON.parse(await userBlob.text())
    if (userData.email === email) {
      return { ...userData, id: blob.pathname.split('/').pop()?.replace('.json', '') }
    }
  }
  return null
}

