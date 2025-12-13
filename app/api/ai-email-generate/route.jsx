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

        const result = await GenerateEmailTemplateAIModel.generateContent(prompt);
        const aiResp = result.response.text();
        console.log(aiResp);

        // Parse the response and handle errors
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
        
        // Handle the specific error about tools in generation_config
        if (e?.error?.errorDetails || e?.message?.includes('tools') || e?.message?.includes('generation_config')) {
            const errorDetails = e?.error?.errorDetails;
            const errorMessage = Array.isArray(errorDetails) 
                ? errorDetails.map(detail => detail?.fieldViolations?.[0]?.description || detail).join('; ')
                : e.message || "Invalid request to AI model";
            
            return NextResponse.json(
                { 
                    error: "AI model configuration error", 
                    details: errorMessage,
                    originalError: e.error || e
                },
                { status: 400 }
            );
        }
        
        // Check if error has error property with details (handle non-iterable errors)
        if (e?.error && typeof e.error === 'object' && !Array.isArray(e.error)) {
            // Check if error.errorDetails exists and is iterable
            if (e.error.errorDetails && Array.isArray(e.error.errorDetails)) {
                const errorMessages = e.error.errorDetails.map(detail => {
                    if (typeof detail === 'object' && detail.fieldViolations) {
                        return detail.fieldViolations.map(v => v.description).join('; ');
                    }
                    return String(detail);
                }).join('; ');
                
                return NextResponse.json(
                    { 
                        error: "AI generation failed", 
                        details: errorMessages || JSON.stringify(e.error)
                    },
                    { status: 400 }
                );
            }
            
            return NextResponse.json(
                { 
                    error: "AI generation failed", 
                    details: e.error.message || JSON.stringify(e.error)
                },
                { status: 400 }
            );
        }
        
        // Handle string errors or other error types
        const errorMessage = e?.message || (typeof e === 'string' ? e : String(e));
        return NextResponse.json(
            { error: "Failed to generate email template", details: errorMessage },
            { status: 500 }
        );
    }
}