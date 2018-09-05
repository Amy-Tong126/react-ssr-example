import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { StaticRouter} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.js';

function handleRender(req, res) {
    // 把 Hello 组件渲染成 HTML 字符串
    // const html = ReactDOMServer.renderToString(<App/>);
    const context = {};

    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
        <App/>
        </StaticRouter>
    )

    // 加载 index.html 的内容
    fs.readFile('./public/index.html', 'utf8', function (err, data) {
        if (err) throw err;

        // 把渲染后的 React HTML 插入到 div 中
        const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

        // 把响应传回给客户端
        res.send(document);
    });
}

const app = express();
// 服务器使用 static 中间件构建 build 路径
app.use('/build', express.static(path.join(__dirname, 'build')));

// 使用我们的 handleRender 中间件处理服务端请求
app.get('*', handleRender);

// 启动服务器
app.listen(3001);
