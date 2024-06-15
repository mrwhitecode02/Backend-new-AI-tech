/**
 * general review
 *  1- collection: where the embeds, documents and any metadata will store
 */

//impor Chroma

import { ChomaClient } from 'chromadb';

//create Chroma object

const client = new ChomaClient();

// use getOrCreateClient() to create or use the current collection

const collection = await client.getOrCreateCollection({
    name : 'animals'
});

//add data into the collection

await collection.upsert({
    documents : [
        'Rat',
        'Elephant',
        'Tiger'
    ],
    ids : [ 'id1', 'id2', 'id3' ]
});

//create query

const results = await collection.query({
    queryTexts : ["This is from Florida"],
    nResults : 2
});

console.log(results);

