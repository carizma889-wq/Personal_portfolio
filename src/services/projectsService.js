import { supabase } from "../supabaseClient.js";

export async function fetchContact() {
  const { data, error } = await supabase.from("contact_links").select("*");

  if (error) {
    console.log(error);
    return []
  } else {
    console.log("contact_links", data);
    return data
  }
}
export async function fetchSkills() {
  const { data, error } = await supabase.from("Skills").select("*");

  if (error) {
    console.log(data);
  } else {
    console.log("skillle", data);
    return data;
  }
}

export async function fetchShowcase() {
  const { data, error } = await supabase.from("Showcase").select("*");

  if (error) {
    console.log(data);
  } else {
    console.log("Showcase", data);
    return data;
  }
}
