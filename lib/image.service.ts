
import { supabase } from './supabase.server';

export async function uploadProductImage(file: File[], ownerId:string, productId:string, productName: string) {
  const uploads = file.map(async (f, index)=>{

  const filePath = `${ownerId}/${productId}/${productName}/${Date.now()}-${f.name}`;

  const { error } = await supabase.storage
    .from('alina_art')
    .upload(filePath, f, {
      contentType: f.type,
      upsert: false
    });

  if (error) throw error;

   const imgUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/alina_art/${filePath}`;

  return {
    url: imgUrl,
    order: index
  };
  });

  return Promise.all(uploads);

}
