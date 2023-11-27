import test from 'tape'
import wtf from '../lib/index.js'

test('get metadata', (t) => {
  t.plan(2)
  const p = wtf.fetch('Toronto Raptors', {
    lang: 'en',
    'Api-User-Agent': 'wtf_wikipedia test script - <spencermountain@gmail.com>',
  })
  p.then(function (doc) {
    t.equal(doc.pageID(), 72879, 'got wikipedia id')
    t.equal(doc.wikidata(), 'Q132880', 'got wikidata id')
  })
  p.catch(function (e) {
    t.throw(e)
  })
})
