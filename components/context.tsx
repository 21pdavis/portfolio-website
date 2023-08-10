import { createContext } from 'react';
const contentful = require('contentful');

const context = createContext({
  contentfulClient: null,
  getEntryByKeyAndType: null
});

export const ContextProvider = ({ children }) => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  });

  async function getEntryByKeyAndType(key: string, type: "projectCard" | "projectPage") {
    try {
      const entry = await client.getEntries({
        content_type: type,
        'fields.key': key //TODO: maybe lowercase Key?
      })

      // console.log(`entry is ${JSON.stringify(entry, null, 2)}`);

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

  return (
    <context.Provider
      value=
      {{
        contentfulClient: client,
        getEntryByKeyAndType
      }}
    >
      {children}
    </context.Provider>
  )
}

export default context;
