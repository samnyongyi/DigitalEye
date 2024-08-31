import {instance} from "./apis";

export const patchSelectPeople = async(id,adult, child, senior, disable) =>{
    try{
        const res = await instance.patch('/api/basic/headcount',{
            id,
            adult,
            child,
            senior,
            disable,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
};