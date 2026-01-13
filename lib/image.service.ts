
import { supabase } from './supabase.server';

export async function uploadProductImage(file: File[], folder: string) {
  const uploads = file.map(async (f, index)=>{

  const ext = f.name.split('.').pop();
  const fileName = `${folder}/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from('products')
    .upload(fileName, f, {
      contentType: f.type,
      upsert: false
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from('products')
    .getPublicUrl(fileName);

  return {
    url: data.publicUrl,
    order: index
  };
  });

  return Promise.all(uploads);

}
