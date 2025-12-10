import { NextResponse } from "next/server";

export { GenerateEmailTemplateAIModel } from "@/config/AiModel"
export { NextResponse } from "next/server"

export async function POST(request) {
    const { prompt } = await request.json();
    
    try{
        const result = await GenerateEmailTemplateAIModel.sendMessage(prompt);
        const aiResp=result.response.text();
        console.log(aiResp);

        return NextResponse.json(JSON.parse(aiResp));
    }
    catch(e){
        return NextResponse.json({error:e});
    }
}