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



安装webpack
```
$ npm install webpack -g
$ npm install webpack --save-dev
```


安装react
```
$ npm install react --save-dev
```

安装glup
```
 npm install --save-dev gulp-webpack
```

安装less配置

```
 npm install --save-dev gulp-webpack
```


Webpack和React结合的另一个强大的地方就是，在修改了组件源码之后，不刷新页面就能把修改同步到页面上。这里需要用到两个库 webpack-dev-server 和 react-hot-loader 。

首先需要安装这两个库， npm install --save-dev webpack-dev-server react-hot-loader

http-sever
http-server 是一个简单的零配置命令行HTTP服务器, 基于 nodeJs.

如果你不想重复的写 nodeJs 的 web-server.js, 则可以使用这个.

安装 (全局安装加 -g) : 

 npm install http-server 
 

Windows 下使用:

在站点目录下开启命令行输入

 http-server
　　

访问: http://localhost:8080 or http://127.0.0.1:8080 

 

使用于package.json

 "scripts": {
     "start": "http-server -a 0.0.0.0 -p 8000",
 }
 

参数 :

复制代码
-p 端口号 (默认 8080)

-a IP 地址 (默认 0.0.0.0)

-d 显示目录列表 (默认 'True')

-i 显示 autoIndex (默认 'True')

-e or --ext 如果没有提供默认的文件扩展名(默认 'html')

-s or --silent 禁止日志信息输出

--cors 启用 CORS via the Access-Control-Allow-Origin header

-o 在开始服务后打开浏览器
-c 为 cache-control max-age header 设置Cache time(秒) , e.g. -c10 for 10 seconds (defaults to '3600'). 禁用 caching, 则使用 -c-1.
-U 或 --utc 使用UTC time 格式化log消息

-P or --proxy Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com

-S or --ssl 启用 https

-C or --cert ssl cert 文件路径 (default: cert.pem)

-K or --key Path to ssl key file (default: key.pem).

-r or --robots Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')

-h or --help 打印以上列表并退出 

