import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const SaveTemplate=mutation({
    args:{
        tid:v.string(),
        design:v.any(),
        email:v.string(),
        description:v.string()
    },
    handler:async(ctx,args)=>{
        try{
            const result=await ctx.db.insert('emailTemplates',{
                tid:args.tid,
                design:args.design,
                email:args.email,
                description:args.description
            });
            return result;
        }
        catch(e){
          
        }
    }
})

export const GetTemplateDesign=query({
    args:{
        email:v.string(),
        tid:v.string()
    },
    handler:async(ctx,args)=>{
        try{
        const result = await ctx.db.query('emailTemplates')
        .filter((q)=>q.and(q.eq(q.field('tid'),args.tid), q.eq(q.field('email'),args.email)))
        .collect();

        return result[0];
        }
        catch(e){
            return {}
        }
    }
})

export const updateTemplateDesign=mutation({
    args:{
        tid:v.string(),
        design:v.any(),
    },
    handler:async(ctx, args)=>{
        try {
            const result=await ctx.db.query('emailTemplates').filter(q=>q.eq(q.field('tid'),args.tid))
            .collect();

            if(result.length === 0) {
                throw new Error('Template not found');
            }

            const docId=result[0]._id;
            console.log(docId);

            await ctx.db.patch(docId,{
                design:args.design
            });
            
            return { success: true };
        } catch(e) {
            console.error("Error updating template:", e);
            throw e;
        }
    }
})

export const GetAllUserTemplate=query({
    args:{
        email:v.string()
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.query('emailTemplates').filter(q=>q.eq(q.field('email'),args.email))
        .collect();

        return result;
    }
})

export const DeleteTemplate=mutation({
    args:{
        tid:v.string(),
        email:v.string()
    },
    handler:async(ctx,args)=>{
        try{
            const result=await ctx.db.query('emailTemplates')
                .filter(q=>q.and(q.eq(q.field('tid'),args.tid), q.eq(q.field('email'),args.email)))
                .collect();
            
            if(result.length > 0){
                await ctx.db.delete(result[0]._id);
                return { success: true };
            }
            throw new Error('Template not found');
        }
        catch(e){
            console.error("Error deleting template:", e);
            throw e;
        }
    }
})