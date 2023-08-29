import { ContentType, ContentTypeCollection, createClient } from 'contentful';

// init contentful client with env keys
const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

const contentTypeIDs: string[] = [];
async function getAllContentTypes(): Promise<ContentTypeCollection> {
  try {
    const contentTypeInfo = await client.getContentTypes();
    console.log(`content types are: ${JSON.stringify(contentTypeInfo, null, 2)}`)
    
    // update local content type IDs
    const ids = contentTypeInfo.items.map(item => item.sys.id);
    contentTypeIDs.push(...ids);
    
    return contentTypeInfo;
  }
  catch (error) {
    console.log(error);
  }
}

// init content types
getAllContentTypes();

export async function getAllEntries() {
    try {
        const entries = await client.getEntries()
        if (entries.items)
            return entries.items
    } catch (error) {
        console.log(error)
    }
}

export async function getEntryByKeyAndType(key: string, type: string) {
    if (!contentTypeIDs.includes(type)) {
      throw new Error(`Content type ${type} is not valid`);
    }
  
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