// 分词器
function tokenizer(input) {
  let current = 0
  let tokens = []
  while (current < input.length) {
    let char = input[current]
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })
      current++
      continue
    }
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      })
      current++
      continue
    }
    const blankRE = /\s/
    if (blankRE.test(char)) {
      current++
      continue
    }
    const numberRE = /[0-9]/
    if (numberRE.test(char)) {
      let value = ''
      while (numberRE.test(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({ type: 'number', value })
      continue
    }
    if (char === '"') {
      let value = ''
      char = input[++current]
      while (char !== '"') {
        value += char
        char = input[++current]
      }
      char = input[++current]
      tokens.push({ type: 'string', value })
      continue
    }
    const letterRE = /[a-z]/i
    if (letterRE.test(char)) {
      let value = ''
      while (letterRE.test(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({ type: 'name', value })
      continue
    }
    throw new TypeError('I dont know what this character is: ' + char);
  }
  return tokens;
}

// 解析器
function parser(tokens) {
  let current = 0
  function walk() {
    let token = tokens[current]
    if (token.type === 'number') {
      current++
      return {
        type: 'NumberLiteral', value: token.value
      }
    }
    if (token.type === 'string') {
      current++
      return {
        type: 'StringLiteral', value: token.value
      }
    }
    if (token.type === 'paren' && token.value === '(') {
      // 跳过 (
      token = tokens[++current]
      const node = {
        type: 'CallExpression',
        name: token.value,
        params: []
      }
      // 跳过 name
      token = tokens[++current]
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        node.params.push(walk())
        // 修正 token
        token = tokens[current]
      }
      // 跳过 )
      // 因为上面判断的条件，可以看出，当 ) 时会跳出循环，所以此时的 current 所在的位置，就是 ) 的位置
      current++;
      return node
    }
    throw new TypeError(token.type);
  }
  let ast = {
    type: 'Program',
    body: [],
  };
  while (current < tokens.length) {
    ast.body.push(walk())
  }
  return ast
}

// 遍历器
function traverser(ast, visitor) {

  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }
  // 主要是调用 enter & exit 两个钩子
  function traverseNode(node, parent) {
    let methods = visitor[node.type]
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }
    switch (node.type) {
      case 'Program':
        traverseArray(node.body, node)
        break
      case 'CallExpression':
        traverseArray(node.params, node)
        break
      case 'NumberLiteral':
      case 'StringLiteral':
        break
      default:
        throw new TypeError(node.type)
    }
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }
  traverseNode(ast, null)
}

function transformer(ast) {
  let newAst = {
    type: 'Program',
    body: []
  }
  ast._context = newAst.body
  traverser(ast, {
    NumberLiteral: {
      // 这里的 parent 是在 traverseArray(node.body, node) 初次传入的
      // 在被遍历的时候，body里面的一个个child被取出: => traverseNode(child, parent);
      // 这就是enter中的两个参数：node, parent
      enter(node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value
        })
      }
    },
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value
        })
      }
    },
    CallExpression: {
      enter(node, parent) {
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: []
        }
        node._context = expression.arguments
        if (parent.type !== 'CallExpression') {
          expression = {
            type: 'ExpressionStatement',
            expression: expression
          }
        }
        parent._context.push(expression);
      }
    }
  })
  return newAst
}


function codeGenerator(node) {
  switch (node.type) {
    case 'Program':
      return node.body.map(codeGenerator).join('\n')
      break;
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) + ';'
      )
    case 'CallExpression':
      return (
        codeGenerator(node.callee) + '(' + node.arguments.map(codeGenerator).join(', ') + ')'
      )
    case 'Identifier':
      return node.name
    case 'NumberLiteral':
      return node.value
    case 'StringLiteral':
      return '"' + node.value + '"'
    default:
      throw new TypeError(node.type);
  }
}

const test1 = '(add "a" (substr 1 2))'
const tokens1 = tokenizer(test1)
console.info(tokens1)

const ast1 = parser(tokens1)
console.info(JSON.stringify(ast1, null, 4))

const newAst1 = transformer(ast1)
console.info(JSON.stringify(newAst1, null, 2))

const code = codeGenerator(newAst1)
console.info(code)