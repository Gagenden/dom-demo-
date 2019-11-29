window.dom = {
  // 增加
  // 创建节点
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim(); /* trim函数去除字符串两端的空格*/
    return container.content.firstChild;
  },
  // 新增弟弟
  after(node1, node2) {
    node1.parentNode.insertBefore(node2, node1.nextSibling);
  },
  // 新增哥哥
  before(node1, node2) {
    node1.parentNode.insertBefore(node2, node1);
  },
  // 新增儿子
  append(parent, node) {
    parent.appendChild(node);
  },
  // 新增爸爸
  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },

  // 删除
  // 删除某个节点
  remove(node) {
    return node.parentNode.removeChild(node);
  },
  // 删除某个节点的全部后代
  empty(parent) {
    // const childNodes = parent.childNodes
    const { childNodes } = parent;
    const array = [];
    let x = parent.firstChild;
    while (x) {
      array.push(dom.remove(x));
      x = parent.firstChild;
    }
    return array;
  },
  // 修改
  // 改某一个属性/获取某个属性值
  attr(node, name, value) {
    // 重载
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    }
    if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  // 设置或者得到某个节点的文本内容
  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        // 适配
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  // 设置或得到HTML内容
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },

  // 设置样式
  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(div, 'color', 'red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        // dom.style(div,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(div, {'color': 'red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },

  //添加class
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    contains(node, className) {
      return node.classList.contains(className);
    },
    replace(node, oldClassName, newClassName) {
      node.classList.replace(oldClassName, newClassName);
    }
  },

  // 点击事件
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },

  // 找
  find(selector, scope) {
    // (要找的选择器， 范围)
    return (scope || document).querySelectorAll(selector);
  },

  // 找爸爸
  parent(node) {
    return node.parentNode;
  },

  // 找儿子
  children(node) {
    return node.children;
  },

  //找兄弟姐妹
  siblings(node) {
    return Array.from(node.parentNode.children).filter(n => n !== node);
  },

  // 找弟弟
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
  },

  // 找哥哥
  previous(node) {
    let x = node.nextPrevious;
    while (x && x.nodeType === 3) {
      x = x.nextPrevious;
    }
  },
  // 遍历所有节点
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  // 找下标
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  }
};
