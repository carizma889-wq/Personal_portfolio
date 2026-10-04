import { supabase } from "../supabaseClient.js";

export async function fetchContact() {
  const { data, error } = await supabase.from("contact_links").select("*");

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}
export async function fetchSkills() {
  const { data, error } = await supabase.from("Skills").select("*");

  if (error) {
    console.log(error);
  } else {
    return data;
  }
}

export async function fetchShowcase() {
  const { data, error } = await supabase.from("Showcase").select("*");

  if (error) {
    console.log(error);
  } else {
    return data;
  }
}
