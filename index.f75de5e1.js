"use strict";
const tr = document.querySelectorAll("tr");
for (const i of tr){
    const copy = i.cells[1].cloneNode(true);
    i.cells[4].before(copy);
}

//# sourceMappingURL=index.f75de5e1.js.map
