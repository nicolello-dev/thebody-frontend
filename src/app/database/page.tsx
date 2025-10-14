import DatabasePopups from "@/components/database/popups";
import { DatabaseChoice } from "@/components/database/databaseChoice";
import DatabaseLogs from "@/components/database/databaseLogs";
import { Header } from "@/components/header";

export default function DatabasePage() {
  return (
    <>
      <Header text="_SELEZIONA DIRECTORY//" />
      <DatabaseLogs />
      <DatabaseChoice />
      <DatabasePopups />
    </>
  );
}
