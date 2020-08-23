function findMatching(a, s) {
    return a.filter(e => {if (e.toLowerCase() === s.toLowerCase()) {return e}})
}

function fuzzyMatch(a, s) {
    return a.filter(e => {
        let c = s.split("");
        let b = e.split("");
        let n = false;
        for (let i = 0; i < c.length; i++) {
            if (b[i] === c[i]) {n = true} else {n = false}
        }
        if (n) {return e};
    })
}

function matchName(a, s) {
    return a.filter(e => {
        if (e["name"] === s) {return e}
    })
}