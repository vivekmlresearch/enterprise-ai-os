import {execute} from '../../../lib/engine';
export async function POST(req:Request){try{return Response.json(await execute(await req.json()));}catch(e){return Response.json({error:e instanceof Error?e.message:'Invalid request'},{status:400});}}
