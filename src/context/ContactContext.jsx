/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { fetchContact } from "@/services/projectsService";
const ContactContext = createContext({ contacts: [], loading: true });
export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContact()
      .then((data) => setContacts(data ?? []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, loading }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactContext);
}