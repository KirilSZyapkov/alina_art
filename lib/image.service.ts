
import { supabase } from './supabase.server';

export async function uploadProductImage(file: File) {
  const ext = file.name.split('.').pop();
  const fileName = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from('products')
    .upload(fileName, file, {
      contentType: file.type,
      upsert: false
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from('products')
    .getPublicUrl(fileName);

  return data.publicUrl;
}
