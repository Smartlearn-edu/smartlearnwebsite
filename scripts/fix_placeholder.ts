import { db } from "../lib/db/src/index";
import { pluginsTable } from "../lib/db/src/schema/plugins";
import { eq } from "drizzle-orm";

async function main() {
  await db.update(pluginsTable).set({ placeholder: false }).where(eq(pluginsTable.slug, 'local_smartdashboard'));
  console.log("Updated local_smartdashboard placeholder to false");
  process.exit(0);
}
main().catch(console.error);
