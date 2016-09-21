# webpack配置
参考来源：
http://www.ruanyifeng.com/blog/2016/01/babel.html

* 1.进入文件夹后运行
```
npm init
```
生成package.json文件


* 2.babel使用
Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。

Babel的配置文件是.babelrc，存放在项目的根目录下。使用Babel的第一步，就是配置这个文件。

presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
```
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```
然后，将这些规则加入.babelrc。
```
 {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }
 ```
 以下所有Babel工具和模块的使用，都必须先写好.babelrc。

 * 二、命令行转码babel-cli

 安装命令如下
 ```
  npm install --global babel-cli
 ```

 基本用法如下
 ```
 # 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```
上面代码是在全局环境下，进行Babel转码，现在将babel-cli安装在项目之中
```
$ npm install --save-dev babel-cli
```
许多工具需要Babel进行前置转码，这里举两个例子：ESLint和Mocha。


