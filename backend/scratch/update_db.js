const { poolPromise } = require("../config/db");
const { initDB } = require("../config/init");

(async () => {
  try {
    const pool = await poolPromise;
    await initDB(pool);
    console.log("DB update executed successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
