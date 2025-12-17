import { NextResponse } from "next/server";

import { GenerateEmailTemplateAIModel } from "@/config/AiModel"

export async function POST(request) {
    try {
        const { prompt } = await request.json();
        
        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        let result;
        try {
            result = await GenerateEmailTemplateAIModel.generateContent(prompt);
        } catch (generateError) {
            console.error("GenerateContent error:", generateError);
            if (generateError?.error?.errorDetails || 
                generateError?.message?.includes('tools') || 
                generateError?.message?.includes('generation_config')) {
                
                const errorDetails = generateError?.error?.errorDetails;
                let errorMessage = "Invalid request to AI model - tools parameter not supported in generation_config";
                
                if (Array.isArray(errorDetails) && errorDetails.length > 0) {
                    try {
                        const messages = errorDetails.map(detail => {
                            if (detail && typeof detail === 'object' && Array.isArray(detail.fieldViolations)) {
                                return detail.fieldViolations
                                    .map(v => v?.description || '')
                                    .filter(Boolean)
                                    .join('; ');
                            }
                            return detail?.description || '';
                        }).filter(Boolean);
                        
                        if (messages.length > 0) {
                            errorMessage = messages.join('; ');
                        }
                    } catch (e) {
                        console.error("Error parsing errorDetails:", e);
                    }
                }
                
                return NextResponse.json(
                    { 
                        error: "AI model configuration error", 
                        details: errorMessage
                    },
                    { status: 400 }
                );
            }
            
            throw generateError;
        }
        
        const aiResp = result.response.text();
        console.log(aiResp);
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(aiResp);
        } catch (parseError) {
            console.error("Error parsing AI response:", parseError);
            return NextResponse.json(
                { error: "Failed to parse AI response", details: parseError.message },
                { status: 500 }
            );
        }

        return NextResponse.json(parsedResponse);
    }
    catch(e){
        console.error("AI generation error:", e);
        console.error("Error type:", typeof e);
        console.error("Error structure:", JSON.stringify(e, null, 2));
        
        if (e?.error && typeof e.error === 'object' && !Array.isArray(e.error)) {
            if (e.error.errorDetails && Array.isArray(e.error.errorDetails)) {
                try {
                    const errorMessages = e.error.errorDetails.map(detail => {
                        if (detail && typeof detail === 'object') {
                            if (Array.isArray(detail.fieldViolations)) {
                                return detail.fieldViolations
                                    .map(v => v?.description || v?.field || '')
                                    .filter(Boolean)
                                    .join('; ');
                            }
                            return detail['@type'] || detail.description || JSON.stringify(detail);
                        }
                        return String(detail);
                    }).filter(Boolean).join('; ');
                    
                    return NextResponse.json(
                        { 
                            error: "AI model configuration error", 
                            details: errorMessages || "Invalid request to AI model - tools parameter not supported",
                            status: e.error.status || 400
                        },
                        { status: e.error.status || 400 }
                    );
                } catch (mapError) {
                    console.error("Error processing errorDetails:", mapError);
                    return NextResponse.json(
                        { 
                            error: "AI model configuration error", 
                            details: "Invalid request to AI model - tools parameter not supported in generation_config",
                            status: e.error.status || 400
                        },
                        { status: e.error.status || 400 }
                    );
                }
            }
            if (e.error.message) {
                return NextResponse.json(
                    { 
                        error: "AI generation failed", 
                        details: e.error.message,
                        status: e.error.status || 400
                    },
                    { status: e.error.status || 400 }
                );
            }
        }
        const errorStr = String(e?.message || e || '');
        if (errorStr.includes('tools') || errorStr.includes('generation_config')) {
            return NextResponse.json(
                { 
                    error: "AI model configuration error", 
                    details: "The 'tools' parameter is not supported in generation_config. Please remove it from the request.",
                    status: 400
                },
                { status: 400 }
            );
        }
        if (e instanceof Error) {
            return NextResponse.json(
                { error: "Failed to generate email template", details: e.message },
                { status: 500 }
            );
        }
        const errorMessage = e?.message || (typeof e === 'string' ? e : JSON.stringify(e));
        return NextResponse.json(
            { error: "Failed to generate email template", details: errorMessage },
            { status: 500 }
        );
    }
}