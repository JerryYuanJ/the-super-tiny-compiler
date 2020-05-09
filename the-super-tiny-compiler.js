'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * Today we're going to write a compiler together. But not just any compiler... A
 * super duper teeny tiny compiler! A compiler that is so small that if you
 * remove all the comments this file would only be ~200 lines of actual code.
 *
 * 今天我们一起来写一个编译器，但是不是任意的编译器，它是一个非常简单非常小的编译器！如果你删除掉所有的注释，
 * 这个文件大约只有200左右的实际代码。
 * 
 * We're going to compile some lisp-like function calls into some C-like
 * function calls.
 *
 * 我们要将一些 lisp-like 的函数调用 编译成 C-like 的函数调用
 * 
 * If you are not familiar with one or the other. I'll just give you a quick intro.
 * 如果你对这两种语言都不熟，我来给你做一个快速的介绍。
 *
 * If we had two functions `add` and `subtract` they would be written like this:
 * 假设我们有两个函数，一个是`add` 一个是 `substract`，在LISP和C中，它们写成如下形式:
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * Easy peezy right?
 * 是不是很简单
 * 
 * Well good, because this is exactly what we are going to compile. While this
 * is neither a complete LISP or C syntax, it will be enough of the syntax to
 * demonstrate many of the major pieces of a modern compiler.
 * 很好，因为这就是我们即将编译的代码。虽然这不是一个完整的LISP或C语法，
 * 但它足以说明现代编译器的许多主要部分。
 */

/**
 * Most compilers break down into three primary stages: Parsing, Transformation,
 * and Code Generation
 * 大多数的编译器都可以分解成三个主要步骤来工作: 解析，转换，生成代码。
 *
 * 1. *Parsing* is taking raw code and turning it into a more abstract
 *    representation of the code.
 * 
 * 1. *解析*，是接收原始代码，并且将它转换成一个更加抽象的代码表示。
 *
 * 2. *Transformation* takes this abstract representation and manipulates to do
 *    whatever the compiler wants it to.
 * 2. *转换*，会接收并且操纵这个抽象的表示，来完成编译器想做的事情
 *
 * 3. *Code Generation* takes the transformed representation of the code and
 *    turns it into new code.
 * 3. *代码生成* 接收上一步转化后的代码，然后将其转换成新代码。
 */

/**
 * Parsing
 * 解析
 * -------
 *
 * Parsing typically gets broken down into two phases: Lexical Analysis and
 * Syntactic Analysis.
 * 解析一般分成两步：词法分析和语法分析
 *
 * 1. *Lexical Analysis* takes the raw code and splits it apart into these things
 *    called tokens by a thing called a tokenizer (or lexer).
 *
 *    Tokens are an array of tiny little objects that describe an isolated piece
 *    of the syntax. They could be numbers, labels, punctuation, operators,
 *    whatever.
 * 1. *词法分析* 接收原始的代码，并通过tokenizer (or lexer)，将其拆分成一个个的token。
 * 
 *    Tokens 是一个对象数组，每个对象描述着语法的独立的小块，它们可以是 数字,标签
 *    标点, 操作符 或者其他。
 * 
 * 2. *Syntactic Analysis* takes the tokens and reformats them into a
 *    representation that describes each part of the syntax and their relation
 *    to one another. This is known as an intermediate representation or
 *    Abstract Syntax Tree.
 *
 *    An Abstract Syntax Tree, or AST for short, is a deeply nested object that
 *    represents code in a way that is both easy to work with and tells us a lot
 *    of information.
 * 
 * 2. *语法分析* 会接收这些tokens，然后把它们再格式化成另一种代表，用来描述语法的每一部分和他们之间的关系。
 *    这就是我们知道的中间代表，或者称为的抽象语法树(AST).
 * 
 *    一个抽象语法树，或者简称为AST，是一个表示着代码的深度嵌套的对象，这种方式既容易工作，又能告诉我们很多
 *    代码的信息。
 * 
 *
 * For the following syntax:
 * 对于下面的语法
 *
 *   (add 2 (subtract 4 2))
 *
 * Tokens might look something like this:
 * Tokens可能看起来像这样
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 抽象语法树可能长这样
 * And an Abstract Syntax Tree (AST) might look like this:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * Transformation
 * 转换
 * --------------
 *
 * The next type of stage for a compiler is transformation. Again, this just
 * takes the AST from the last step and makes changes to it. It can manipulate
 * the AST in the same language or it can translate it into an entirely new
 * language.
 * 
 * 解析之后就开始执行代码转换的操作。再次说明，转换只是接收上一步生成的AST，然后对其修改。
 * 它可以用同一种语言操作AST，也可以将它翻译成一种全新的语言。
 *
 * Let’s look at how we would transform an AST.
 * 
 * 我们来看看怎样转换一个AST。
 *
 * You might notice that our AST has elements within it that look very similar.
 * There are these objects with a type property. Each of these are known as an
 * AST Node. These nodes have defined properties on them that describe one
 * isolated part of the tree.
 * 
 * 你可能注意到了，我们的AST中的元素看起来都很相似。它们都是带有type属性的对象。每一个都是
 * AST节点。这些节点定义了AST的属性，这些属性是用来描述语法树的独立的部分的。
 *
 * We can have a node for a "NumberLiteral":
 * 我们可以有一个 "NumberLiteral" 的节点
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * Or maybe a node for a "CallExpression":
 * 或者一个 "CallExpression" 的节点
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * When transforming the AST we can manipulate nodes by
 * adding/removing/replacing properties, we can add new nodes, remove nodes, or
 * we could leave the existing AST alone and create an entirely new one based
 * on it.
 * 
 * 当转换AST的时候，我们可以通过添加/删除/替换属性来操纵节点，我们可以添加新的节点，移除节点，
 * 或者不去动这个已存在的AST，而是基于这个AST创建一个全新的AST。
 *
 * Since we’re targeting a new language, we’re going to focus on creating an
 * entirely new AST that is specific to the target language.
 * 
 * 因为我们的目标是新的语言(LISP -> C)，所以我们的重点是创建一个特定于目标语言的新的AST。
 * 
 *
 * Traversal
 * 遍历
 * ---------
 *
 * In order to navigate through all of these nodes, we need to be able to
 * traverse through them. This traversal process goes to each node in the AST
 * depth-first.
 * 
 * 为了能够访问到所有的节点，我们需要遍历它们。
 * 这个遍历的是深度优先的访问AST中的每一个节点。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * So for the above AST we would go:
 * 对于上面的AST，我们这样遍历的：
 *
 *   1. Program - Starting at the top level of the AST
 *   2. CallExpression (add) - Moving to the first element of the Program's body
 *   3. NumberLiteral (2) - Moving to the first element of CallExpression's params
 *   4. CallExpression (subtract) - Moving to the second element of CallExpression's params
 *   5. NumberLiteral (4) - Moving to the first element of CallExpression's params
 *   6. NumberLiteral (2) - Moving to the second element of CallExpression's params
 * 
 *   1. Program - 从AST最顶层开始
 *   2. CallExpression (add) - 移动到 Program 的 body 中的第一个元素
 *   3. NumberLiteral (2) - 移动到 CallExpression 的 params 的第一个元素
 *   4. CallExpression (subtract) - 移动到 CallExpression 的 params 的第二个元素
 *   5. NumberLiteral (4) - 移动到 CallExpression 的 params 的第一个元素
 *   6. NumberLiteral (2) - 移动到 CallExpression 的 params 的第二个元素
 *
 * If we were manipulating this AST directly, instead of creating a separate AST,
 * we would likely introduce all sorts of abstractions here. But just visiting
 * each node in the tree is enough for what we're trying to do.
 * 
 * 如果我们直接操作这个AST而不是创建一个独立的，我们可能会在这里介绍所有的抽象。但是
 * 只访问我们树中的每个节点对于我们尝试要达成的目标来说已经足够了。
 *
 * The reason I use the word "visiting" is because there is this pattern of how
 * to represent operations on elements of an object structure.
 * 
 * 我这里使用 "访问" 这个单词的原因是，有一种设计模式，可以让我们在对象结构的元素上表示操作。
 *
 * Visitors
 * 访问器
 * --------
 *
 * The basic idea here is that we are going to create a “visitor” object that
 * has methods that will accept different node types.
 *
 * 这里的基本思想是，我们将要创建一个 “访问器” 的对象，它里面有接收不同节点类型的方法。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * When we traverse our AST, we will call the methods on this visitor whenever we
 * "enter" a node of a matching type.
 * 
 * 当我们遍历AST的时候，如果 ”进入“ 了一个匹配的节点类型，我们将会调用这个访问器上的方法。
 *
 * In order to make this useful we will also pass the node and a reference to
 * the parent node.
 * 
 * 为了让这个更加有用，我们会将节点和它父节点的引用传进来
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * However, there also exists the possibility of calling things on "exit". Imagine
 * our tree structure from before in list form:
 * 
 * 然而，还有可能在 "退出" 的时候调用一些东西。想象一下如下的我们的之前的树结构：
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * As we traverse down, we're going to reach branches with dead ends. As we
 * finish each branch of the tree we "exit" it. So going down the tree we
 * "enter" each node, and going back up we "exit".
 * 
 * 当我们往下遍历的时候，我们将会达到一个终点。当我们完成了对树的每个分支的遍历之后，我们会 “退出” 
 * 遍历。所以往下遍历的时候我们 “进入” 节点，往上返回的时候我们 “退出” 节点。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * In order to support that, the final form of our visitor will look like this:
 * 为了支持上面的情况，我们访问器的最终形式如下：
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * Code Generation
 * 代码生成
 * ---------------
 *
 * The final phase of a compiler is code generation. Sometimes compilers will do
 * things that overlap with transformation, but for the most part code
 * generation just means take our AST and string-ify code back out.
 * 
 * 编译器的最后一步就是代码生成。有些时候，编译器会做一些事情与我们的代码转换重叠，但是
 * 大多数的情况下，代码生成只是接收AST然后把代码字符串化后返回。
 *
 * Code generators work several different ways, some compilers will reuse the
 * tokens from earlier, others will have created a separate representation of
 * the code so that they can print node linearly, but from what I can tell most
 * will use the same AST we just created, which is what we’re going to focus on.
 * 
 * 代码生成器以几种不同的方式工作，一些编译器会重用之前的 tokens，其他的会创建一个独立的代码表示
 * 以便可以线性的打印节点，但是从我看来，大多数会使用我们刚刚创建的相同的AST，这是我们要关注的。
 *
 * Effectively our code generator will know how to “print” all of the different
 * node types of the AST, and it will recursively call itself to print nested
 * nodes until everything is printed into one long string of code.
 * 
 * 我们的代码生成器会知道如何 “打印” AST 所有不同的节点类型，并且它会递归的调用自身来打印嵌套的节点
 * 知道所有的节点都被打印成一个长长的字符串代码
 */

/**
 * And that's it! That's all the different pieces of a compiler.
 * 就是这样了，这就是编译器的所有不同部分。
 *
 * Now that isn’t to say every compiler looks exactly like I described here.
 * Compilers serve many different purposes, and they might need more steps than
 * I have detailed.
 * 现在不是说每个编译器都像我描述的这样。编译器服务于不同的目的，有时候它们可能比我
 * 上面描述的需要更多的步骤。
 *
 * But now you should have a general high-level idea of what most compilers look
 * like.
 * 但是现在你应该对大多数编译器的外观有一个高级概念。
 *
 * Now that I’ve explained all of this, you’re all good to go write your own
 * compilers right?
 * 既然我已经解释了所有这些，你就可以编写你自己的编译器了，对吗？
 *
 * Just kidding, that's what I'm here to help with :P
 * 开个玩笑，这是我在这里提供帮助的地方
 *
 * So let's begin...
 * 所以，我们开始把...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 *                                    分析器
 * ============================================================================
 */

/**
 * We're gonna start off with our first phase of parsing, lexical analysis, with
 * the tokenizer.
 * 我们用这个分词器(tokenizer)开我们解析的第一步——词法分析
 *
 * We're just going to take our string of code and break it down into an array
 * of tokens.
 * 我们拿到传进来的字符串的代码，然后把它分解成一个token数组
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// We start by accepting an input string of code, and we're gonna set up two
// things...
// 我们从接收一个字符串代码的输入开始，我们要设置好两件事
function tokenizer(input) {

  // A `current` variable for tracking our position in the code like a cursor.
  // 一个 'current' 标记来追踪我们当前代码的位置, 类似于游标的作用
  let current = 0;

  // And a `tokens` array for pushing our tokens to.
  // 一个 'tokens' 的数组来存放我们的token
  let tokens = [];

  // We start by creating a `while` loop where we are setting up our `current`
  // variable to be incremented as much as we want `inside` the loop.
  // 我们首先创建一个`while`循环，我们将`current`变量设置为在循环内部增加。
  //
  // We do this because we may want to increment `current` many times within a
  // single loop because our tokens can be any length.
  // 我们这么做是因为我们可能想要在一个单循环体中多次递增 `current'，因为我们的tokens的长度是任意的
  while (current < input.length) {

    // We're also going to store the `current` character in the `input`.
    // 我们也要把输入参数中 `当前` 的字符存起来
    let char = input[current];

    // The first thing we want to check for is an open parenthesis. This will
    // later be used for `CallExpression` but for now we only care about the
    // character.
    // 我们要做的第一件事就是检查开括号.这在后面`CallExpression`的时候会用到，但是目前我们
    // 只关心这个字符。
    //
    // We check to see if we have an open parenthesis:
    // 我们检查这个当前字符是不是开括号
    if (char === '(') {

      // If we do, we push a new token with the type `paren` and set the value
      // to an open parenthesis.
      // 如果是的话，我们就往tokens中push一个token，它的类型是 'paren'，值是 '('
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // Then we increment `current`
      // 递归 current 游标
      current++;

      // And we `continue` onto the next cycle of the loop.
      // 使用 continue 跳转到下一次的循环
      continue;
    }

    // Next we're going to check for a closing parenthesis. We do the same exact
    // thing as before: Check for a closing parenthesis, add a new token,
    // increment `current`, and `continue`.
    // 接下来我们要检查闭括号。我们跟之前的操作一致：检查闭括号，匹配的话就往tokens中添加这个token
    // 递增 `current` 游标，然后跳转到下一次循环
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // Moving on, we're now going to check for whitespace. This is interesting
    // because we care that whitespace exists to separate characters, but it
    // isn't actually important for us to store as a token. We would only throw
    // it out later.
    // 我们继续，现在我们要检查空白.这有点意思，因为我们希望存在这样的空格来让我们分离字符，
    // 但是这个还不至于让我们用一个token来存储它。我们在后面只会抛弃它。
    //
    // So here we're just going to test for existence and if it does exist we're
    // going to just `continue` on.
    // 所以这里我们只是检查它是否存在，如果存在的话我们只做两件事: 递增游标、跳转到下个循环，
    // 不做任何其他的逻辑处理
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // The next type of token is a number. This is different than what we have
    // seen before because a number could be any number of characters and we
    // want to capture the entire sequence of characters as one token.
    // 下一个token的类型是number。这跟我们之前看到的不同，因为number可以是任意数量的字符，我们希望
    // 可以捕获整个字符序列作为一个token
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //       只有两个分开的token
    //
    // So we start this off when we encounter the first number in a sequence.
    // 所以我们当我们遇到序列的第一个数字的时候，开始
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // We're going to create a `value` string that we are going to push
      // characters to.
      // 我们创建一个 `value` 的字符串变量用来存放我们的字符
      let value = '';

      // Then we're going to loop through each character in the sequence until
      // we encounter a character that is not a number, pushing each character
      // that is a number to our `value` and incrementing `current` as we go.
      // 接着我们循环序列中的每个字符直到我们计算的字符不是number的为止，把每一个是number类型的字符
      // 推入到我们的 value 中然后递增游标继续
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // After that we push our `number` token to the `tokens` array.
      // 之后我们把得到的 number token 添加到 tokens 的数组中
      tokens.push({ type: 'number', value });

      // And we continue on.
      // 继续
      continue;
    }

    // We'll also add support for strings in our language which will be any
    // text surrounded by double quotes (").
    // 我们还要添加对我们语言中的字符串的支持，即被双引号（“）包围的文本。
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens 字符串token
    //
    // We'll start by checking for the opening quote:
    // 我们从检查一个开引号开始
    if (char === '"') {
      // Keep a `value` variable for building up our string token.
      // 用一个value变量来建立我们的string值
      let value = '';

      // We'll skip the opening double quote in our token.
      // 我们将跳过token中的开头双引号。
      // 因为这个是直接 ++current 的，所以 current 这个位置的字符串，也就是这个双引号，会被跳过
      char = input[++current];

      // Then we'll iterate through each character until we reach another
      // double quote.
      // 然后我们遍历每个字符直到我们找到另一个双引号
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // Skip the closing double quote.
      // 跳过闭双引号
      char = input[++current];

      // And add our `string` token to the `tokens` array.
      // 把我们的string token添加到tokens数组中
      tokens.push({ type: 'string', value });

      continue;
    }

    // The last type of token will be a `name` token. This is a sequence of
    // letters instead of numbers, that are the names of functions in our lisp
    // syntax.
    // token的最后一种类型是 `name` 类型。这是一系列字母而不是数字，它们是我们的lisp语法中的函数名称。
    //
    //   (add 2 4)
    //    ^^^
    //    Name token 名称token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // Again we're just going to loop through all the letters pushing them to
      // a value.
      // 同上，我们只是遍历所有的字母然后把他们一起推入到同一个值中去
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // And pushing that value as a token with the type `name` and continuing.
      // 然后把这个value作为一个token推入到tokens数组中，它的类型是`name`，然后继续
      tokens.push({ type: 'name', value });

      continue;
    }

    // Finally if we have not matched a character by now, we're going to throw
    // an error and completely exit.
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // Then at the end of our `tokenizer` we simply return the tokens array.
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 *                                   解析器
 * ============================================================================
 */

/**
 * For our parser we're going to take our array of tokens and turn it into an
 * AST.
 * 我们的解析会把token数组转化成AST。
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// Okay, so we define a `parser` function that accepts our array of `tokens`.
// 好的，我们定义一个 `parser` 函数，它接收一个 token 数组
function parser(tokens) {

  // Again we keep a `current` variable that we will use as a cursor.
  // 同样的，我们使用 current 变量，当作一个游标来用
  let current = 0;

  // But this time we're going to use recursion instead of a `while` loop. So we
  // define a `walk` function.
  // 但是这次我们会使用递归而不是while循环来做，所以我们先定义一个 walk 函数
  function walk() {

    // Inside the walk function we start by grabbing the `current` token.
    // walk 函数中我们先拿到 `当前的` token
    let token = tokens[current];

    // We're going to split each type of token off into a different code path,
    // starting off with `number` tokens.
    // 我们要把每个类型的token分离成不同的代码路径，从数字token开始
    //
    // We test to see if we have a `number` token.
    // 我们来看看是否有数字的token
    if (token.type === 'number') {

      // If we have one, we'll increment `current`.
      // 如果有的话，递增 current
      current++;

      // And we'll return a new AST node called `NumberLiteral` and setting its
      // value to the value of our token.
      // 然后返回一个新的AST，它的类型是`NumberLiteral`，它的值我们token的value
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // If we have a string we will do the same as number and create a
    // `StringLiteral` node.
    // string 与 number 一样，不过类型是 `StringLiteral`
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // Next we're going to look for CallExpressions. We start this off when we
    // encounter an open parenthesis.
    // 下一步我们要找 CallExpressions。 我们先从找开括号开始
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // We'll increment `current` to skip the parenthesis since we don't care
      // about it in our AST.
      // 我们直接增加 current 的值来跳过括号，因为我们在AST不需要管它
      token = tokens[++current];

      // We create a base node with the type `CallExpression`, and we're going
      // to set the name as the current token's value since the next token after
      // the open parenthesis is the name of the function.
      // 我们创建一个类型是 `CallExpression` 的基础节点，接着我们要把这个节点的名称设置为当前token的值
      // 因为开括号的下一个token是函数名
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // We increment `current` *again* to skip the name token.
      // 再次递增 current 的值来跳过名称token
      token = tokens[++current];

      // And now we want to loop through each token that will be the `params` of
      // our `CallExpression` until we encounter a closing parenthesis.
      // 现在我们要循环每一个token，它们将会成为 `CallExpression` 类型的节点的params，
      // 直到我们访问到闭合括号为止
      //
      // Now this is where recursion comes in. Instead of trying to parse a
      // potentially infinitely nested set of nodes we're going to rely on
      // recursion to resolve things.
      // 现在这就是递归的地方。我们打算用递归来解决问题，而不是尝试着去解析一个可能会无限循环的嵌套节点。
      //
      // To explain this, let's take our Lisp code. You can see that the
      // parameters of the `add` are a number and a nested `CallExpression` that
      // includes its own numbers.
      // 我们以Lisp代码距举例。你可以看到 `add` 的参数是一个数字和
      // 一个嵌套的 `CallExpression`，它包含自己的数字参数
      // 
      //   (add 2 (subtract 4 2))
      //
      // You'll also notice that in our tokens array we have multiple closing
      // parenthesis.
      // 你可以发现在我们的token数组中我们有很多闭合括号
      // 
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis 闭合括号
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis 闭合括号
      //   ]
      //
      // We're going to rely on the nested `walk` function to increment our
      // `current` variable past any nested `CallExpression`.
      // 
      // So we create a `while` loop that will continue until it encounters a
      // token with a `type` of `'paren'` and a `value` of a closing
      // parenthesis.
      // 所以我们创建一个 while 循环，它会一直循环，直到遇到一个类型是 paren 并且值是 闭合括号的时候停止
      while (
        (token.type !== 'paren') || // token不是括号类型
        (token.type === 'paren' && token.value !== ')') // token是括号类型但是不是闭合括号
      ) {
        // we'll call the `walk` function which will return a `node` and we'll
        // push it into our `node.params`.
        // 我们将调用 walk 函数，它会返回一个节点，我们将这个节点推入 node.params 中
        node.params.push(walk());
        token = tokens[current];
      }

      // Finally we will increment `current` one last time to skip the closing
      // parenthesis.
      // 最终我们最后一次递增 current 来跳过闭合括号
      current++;

      // And return the node.
      // 返回节点
      return node;
    }

    // Again, if we haven't recognized the token type by now we're going to
    // throw an error.
    // 同样的，如果我们没有识别这个token的类型，我们会抛出一个错误
    throw new TypeError(token.type);
  }

  // Now, we're going to create our AST which will have a root which is a
  // `Program` node.
  // 现在，我们要创建我们的AST，它是一个 'Program' 节点，是一个根节点
  let ast = {
    type: 'Program',
    body: [],
  };

  // And we're going to kickstart our `walk` function, pushing nodes to our
  // `ast.body` array.
  // 现在我们要开始调用 walk 函数，把节点一个个的推入到我们的 ast.body 中
  //
  // The reason we are doing this inside a loop is because our program can have
  // `CallExpression` after one another instead of being nested.
  // 我们在一个循环中这么做的原因是，我们的程序可以在 `CallExpression` 后又有一个 `CallExpression`，
  // 而不是嵌套的 CallExpression
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // At the end of our parser we'll return the AST.
  // 在解析器的最后我们返回AST
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 *                                   遍历器
 * ============================================================================
 */

/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 * 现在我们有了AST，我们想用一个访问器访问不同的节点。当我们遇到一个匹配的类型的
 * 时候，我们要能够调用访问器的方法。
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// So we define a traverser function which accepts an AST and a
// visitor. Inside we're going to define two functions...
// 所以我们定义一个遍历器函数，它接收一个AST和一个访问器。在这内部我们会定义两个函数...
function traverser(ast, visitor) {

  // A `traverseArray` function that will allow us to iterate over an array and
  // call the next function that we will define: `traverseNode`.
  // 一个是 traverseArray, 它允许我们遍历一个数组，然后调用另一个方法：traverseNode
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` will accept a `node` and its `parent` node. So that it can
  // pass both to our visitor methods.
  // traverseNode 会接收一个 node 和 这个node的父节点 作为参数，
  // 所以它可以把这两个都传给访问器
  function traverseNode(node, parent) {

    // We start by testing for the existence of a method on the visitor with a
    // matching `type`.
    // 我们先从用一个类型匹配来检查这个访问器是否存在对应的方法开始
    let methods = visitor[node.type];

    // If there is an `enter` method for this node type we'll call it with the
    // `node` and its `parent`.
    // 如果有这个对象有 enter 方法，我们将把node和parent作为参数传入来调用这个enter方法
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // Next we are going to split things up by the current node type.
    // 接下来，我们将按当前节点类型拆分。
    switch (node.type) {

      // We'll start with our top level `Program`. Since Program nodes have a
      // property named body that has an array of nodes, we will call
      // `traverseArray` to traverse down into them.
      // 我们从最顶层的 Program 开始。因为 Program 节点有一个叫body的属性，它的值是一个节点数组
      // 所以我们要调用 traverseArray 来遍历它们
      //
      // (Remember that `traverseArray` will in turn call `traverseNode` so  we
      // are causing the tree to be traversed recursively)
      // 注意，traverseArray 反过来也会调用 traverseNode，所以我们这里是让这个树被递归遍历。
      case 'Program':
        traverseArray(node.body, node);
        break;

      // Next we do the same with `CallExpression` and traverse their `params`.
      // 接着我们对 CallExpression 进行相同的操作，遍历它们的 params
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // In the cases of `NumberLiteral` and `StringLiteral` we don't have any
      // child nodes to visit, so we'll just break.
      // 在 NumberLiteral 和 StringLiteral 这两个类型中，我们没有子节点要访问，所以这里就直接break掉
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // And again, if we haven't recognized the node type then we'll throw an
      // error.
      // 同样的，对于未能识别的节点，将会抛出错误
      default:
        throw new TypeError(node.type);
    }

    // If there is an `exit` method for this node type we'll call it with the
    // `node` and its `parent`.
    // 如果对于这个节点有 exit 方法，那就调用它，并且传入node和parent。
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // Finally we kickstart the traverser by calling `traverseNode` with our ast
  // with no `parent` because the top level of the AST doesn't have a parent.
  // 最后我们调用traverseNode，传入AST ，这里的parent是null，因为顶层的AST没有父节点
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 *                                    转换器
 * ============================================================================
 */

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 * 接下来要介绍的是转换器。我们的转换器会接收我们构造的AST，然后在加上一个访问器一起，
 * 把它传给我们的遍历器，它会创建一个新的AST。
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// So we have our transformer function which will accept the lisp ast.
// 所以我们有一个转换的函数，它将接收lisp的ast作为参数。
function transformer(ast) {

  // We'll create a `newAst` which like our previous AST will have a program
  // node.
  // 我们要创建一个新的 ast: `newAst`, 它和之前的AST类似，都有一个 program 节点
  let newAst = {
    type: 'Program',
    body: [],
  };

  // Next I'm going to cheat a little and create a bit of a hack. We're going to
  // use a property named `context` on our parent nodes that we're going to push
  // nodes to their parent's `context`. Normally you would have a better
  // abstraction than this, but for our purposes this keeps things simple.
  // 接下来我要使用一点 "作弊" 的手段来做一些hack。我们将在父节点上使用名为`context`的属性，
  // 我们将把节点推入到父节点的`context`。
  // 通常你可能会有比这更好的抽象手段，但是在我们的例子中我们尽量保持简单。
  //
  // Just take note that the context is a reference *from* the old ast *to* the
  // new ast.
  // 注意这个context只是老的AST到新的AST的一个引用，
  ast._context = newAst.body;

  // We'll start by calling the traverser function with our ast and a visitor.
  // 从调用traverser开始
  traverser(ast, {

    // The first visitor method accepts any `NumberLiteral`
    // 第一个访问器方法接收任何的 NumberLiteral
    NumberLiteral: {
      // We'll visit them on enter.
      // 我们会在enter中访问它们
      enter(node, parent) {
        // We'll create a new node also named `NumberLiteral` that we will push to
        // the parent context.
        // 我们将创建一个节点，给它也命名为 NumberLiteral，然后把它推入到父节点的context中
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // Next we have `StringLiteral`
    // 对 StringLiteral 做相同操作
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // Next up, `CallExpression`.
    // 接着到 CallExpression
    CallExpression: {
      enter(node, parent) {

        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        // 我们创建一个新的 CallExpression 节点，它有一个内置的callee对象，
        // 这个对象类型是Identifier
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        // 接下来我们要在原始的CallExpression节点上定义一个新的context，它将引用 expression 的参数
        // 以便我们可以推入参数
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        // 接着我们来判断父节点是不是CallExpression，如果不是的话...
        if (parent.type !== 'CallExpression') {

          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          // 我们要用 ExpressionStatement 包装我们的 CallExpression。
          // 这么做是因为js中顶级的 CallExpression 实际上只是语句
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        // 最后我们推入我们（可能被包装过的） CallExpression到 父节点的 context 上
        parent._context.push(expression);
      },
    }
  });

  // At the end of our transformer function we'll return the new ast that we
  // just created.
  // 在转换函数的最后，我们会返回刚刚创建的新的ast。
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 *                                 代码生成器
 * ============================================================================
 */

/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 * 
 * 现在已经到了我们到最后一步啦——代码生成器。
 * 我们的代码生成器将以递归方式调用自身，将树中的每个节点打印成一个巨大的字符串。
 */

function codeGenerator(node) {

  // We'll break things down by the `type` of the `node`.
  // 按照节点的类型来分解
  switch (node.type) {

    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the code generator and join them with a newline.
    // 如果有 Program 节点，我们会遍历body中的每个节点，对每个节点调用codeGenerator,
    // 然后使用一个新行来连接它们
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // For `ExpressionStatement` we'll call the code generator on the nested
    // expression and we'll add a semicolon...
    // 对于 ExpressionStatement 我们将会在它嵌套的表达式上调用codeGenerator方法，并且会加一个分号
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way) 因为我们希望代码以*正确*的形式展示
      );

    // For `CallExpression` we will print the `callee`, add an open
    // parenthesis, we'll map through each node in the `arguments` array and run
    // them through the code generator, joining them with a comma, and then
    // we'll add a closing parenthesis.
    // 对于 CallExpression，我们将会打印出 callee，一个开括号，然后遍历
    // arguments 里面的参数，调用code generator 方法，把它们用逗号连接，最后再加上一个闭合括号
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // For `Identifier` we'll just return the `node`'s name.
    // 对于标识符我们直接返回节点的名称
    case 'Identifier':
      return node.name;

    // For `NumberLiteral` we'll just return the `node`'s value.
    // 对于 NumberLiteral 我们直接返回节点的值
    case 'NumberLiteral':
      return node.value;

    // For `StringLiteral` we'll add quotations around the `node`'s value.
    // 对于 StringLiteral 我们返回用双引号包裹的节点的值
    case 'StringLiteral':
      return '"' + node.value + '"';

    // And if we haven't recognized the node, we'll throw an error.
    // 对于未识别的节点，抛出错误
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 *                                    编译器
 * ============================================================================
 */

/**
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 * 终于！！！我们创建出了我们的 `compiler` 函数。这里我们将整个流程串联起来。
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 * 
 *   1. 输入 => 分词器 => tokens
 *   2. tokens => 解析器 => 抽象语法树
 *   3. 抽象语法树 => 转换器 => 新的抽象语法树
 *   4. 新的抽象语法树 => 代码生成器 => 输出
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // and simply return the output!
  // 简单的返回输出值
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!你做到啦!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
// 这里将每个方法导出
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
