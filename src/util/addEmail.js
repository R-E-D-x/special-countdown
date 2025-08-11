import { supabase } from '../../supabaseClient';

export default async function addEmail(name, content) {
    const { data, error } = await supabase
        .from('mails') // table name
        .insert([{ name, content }]) // column name: value
        .select()

    if (error) {
        return false
    } else {
        return data
    }
}
