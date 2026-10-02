import assert from 'node:assert/strict';
// @ts-ignore Node strip-types requires explicit TypeScript extension
import {execute,agents} from '../lib/engine.ts';
assert.equal(new Set(agents.map(a=>a.id)).size,1000);
const r=await execute({task:'Assess manufacturing yield',count:1000,concurrency:32});
assert.equal(r.completed,1000);assert.equal(new Set(r.results.map(x=>x.agentId)).size,1000);assert.ok(r.peakConcurrency<=32);
const blocked=await execute({task:'Make payment',count:10,concurrency:4,action:'checkout.complete'});assert.equal(blocked.blocked,10);assert.equal(blocked.completed,0);
await assert.rejects(()=>execute({task:'',count:1,concurrency:1}));await assert.rejects(()=>execute({task:'test',count:1001,concurrency:1}));await assert.rejects(()=>execute({task:'test',count:1,concurrency:33}));
console.log(JSON.stringify({uniqueAgents:1000,completed:r.completed,peakWorkers:r.peakConcurrency,policyDenials:blocked.blocked,status:'passed'}));
