import { createClient } from 'contentful';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export async function getAllEntries() {
    try {
        const entries = await client.getEntries()
        if (entries.items)
            return entries.items
    } catch (error) {
        console.log(error)
    }
}

export async function getEntryByKeyAndType(key: string, type: "projectCard" | "projectPage") {
    try {
      const entry = await client.getEntries({
        content_type: type,
        'fields.key': key //TODO: maybe lowercase Key?
      })

      if (entry.items.length > 0) {
        return entry.items[0];
      }
      else {
        throw new Error(`No entry found for key ${key} and type ${type}`);
      }
    }
    catch (error) {
      console.log(error);
    }
}