const div = dom.create("<div><span></span></div>");
console.log(div);
dom.after(test, div);
const div2 = dom.create("<div>哥哥</div>");
dom.before(test, div2);
dom.append(test, div);
// dom.remove(div)
dom.empty(test);
dom.attr(test, "title", "123");
console.log(`title: ${dom.attr(test, "title")}`);
console.log(dom.text(text));
dom.text(text, "1325");

const html = dom.html(text);
console.log(`html: ${html}`);
dom.html(text, "<span>哈哈哈哈</span>");

dom.style(text, {
    color: "red"
});
dom.style(text, "border", "solid 1px blue");
console.log(dom.style(text, "color"));

dom.class.add(test, "blue");
dom.class.remove(test, "bac")
console.log(dom.class.contains(test, "bac"))
dom.class.replace(test, "blue", "bac")

const fn = () => {
    console.log('点击')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

console.log(dom.find('#test')[0])

console.log(dom.parent(text))
console.log(dom.parent(s1))

console.log(dom.children(text))
console.log(dom.children(par))

console.log(dom.siblings(s2))

dom.each(dom.find('#par'), (n) => dom.style(n, 'color', 'blue'))

console.log(dom.index(s3))