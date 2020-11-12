function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop]
        return true
    }
    return false;
}

const Article = {
    id: 1,
    name: "Gun"
}

removeProperty(Article, id)

console.log(Article)