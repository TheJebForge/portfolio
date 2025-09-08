const fs = require("node:fs/promises");
const {getAllIndexes} = require("../src/indexUtils");

(async () => {
    const indices = await getAllIndexes();

    const data = JSON.stringify(indices);

    await fs.writeFile('./public/index.json', data);
})();