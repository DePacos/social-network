import { Message } from '@/app/types/types'

const DB_NAME = 'Messages'
const STORE_NAME = 'RemovedMessages'
const RECIPIENT_INDEX = 'recipientIndex'

export const openDataBase = (): Promise<IDBDatabase> => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const openRequest = indexedDB.open(DB_NAME, 1)

    openRequest.onupgradeneeded = event => {
      const db = (event.target as IDBOpenDBRequest).result

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' })

        store.createIndex(RECIPIENT_INDEX, 'recipientId', { unique: false })
      }
    }

    openRequest.onsuccess = event =>
      resolve((event.target as IDBOpenDBRequest).result)
    openRequest.onerror = event =>
      reject((event.target as IDBOpenDBRequest).error)
  })
}

const onTransaction = async (
  transactionOption: 'readwrite' | 'readonly' | 'versionchange',
): Promise<{
  store: IDBObjectStore | undefined
  transaction: IDBTransaction | undefined
  error: null | string
}> => {
  try {
    const db = await openDataBase()
    const transaction = db.transaction(STORE_NAME, transactionOption)
    const store = transaction.objectStore(STORE_NAME)

    return { error: null, store, transaction }
  } catch (error) {
    return {
      error: `Transaction error: ${error}`,
      store: undefined,
      transaction: undefined,
    }
  }
}

export const getMessagesByRecipient = async (
  recipientId: number,
): Promise<Message[] | string> => {
  const { error, store } = await onTransaction('readonly')

  return new Promise((resolve, reject) => {
    if (store) {
      const index = store.index(RECIPIENT_INDEX)
      const request = index.getAll(recipientId)

      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    } else {
      reject(error)
    }
  })
}

export const saveDeletedMessage = async (
  message: Message,
): Promise<boolean | string> => {
  const { error, store, transaction } = await onTransaction('readwrite')

  return new Promise((resolve, reject) => {
    if (store && transaction) {
      const newMessage = { ...message, removed: true }

      store.put(newMessage)
      transaction.oncomplete = () => resolve(true)
      transaction.onerror = () => reject(transaction.error)
    } else {
      reject(error)
    }
  })
}

export const removeRemovedMessage = async (
  messageId: string,
): Promise<boolean | string> => {
  const { error, store, transaction } = await onTransaction('readwrite')

  return new Promise((resolve, reject) => {
    if (store && transaction) {
      store.delete(messageId)
      transaction.oncomplete = () => resolve(true)
      transaction.onerror = () => reject(transaction.error)
    } else {
      reject(error)
    }
  })
}
