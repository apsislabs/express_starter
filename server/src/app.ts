import { log } from "./logger";
import { createServer } from "./server";

const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 80;

log.info("starting");
log.debug("connecting to database");
import { migrate } from "./db";

const run = async () => {
  await migrate();

  createServer().listen(port, () => {
    log.info({ port }, `listening at http://${hostname}:${port}`);
  });
};

run();
