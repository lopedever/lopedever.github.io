import React from 'react';
import 'primer-markdown/build/build.css';

const meta = {
  title: '12306 SMS to Cal',
  version: 'v2.6'
}

export default class Shortcuts extends React.Component {
  constructor(props) {
    super(props);
    
    document.title = meta.title;
  }

  render() {
    return <div className="markdown-body">
      <h1>{meta.title}</h1>
      <blockquote>版本：{meta.version}</blockquote>
      <h2>使用方法</h2>
      <ol>
        <li>复制 12306 短信</li>
        <li>在通知中心或这里运行捷径</li>
        <li>输入目的车站</li>
        <li>乘车信息将自动添加到系统日历</li>
      </ol>
      <h2>注意事项</h2>
      <ul>
        <li>使用本捷径需连接网络；</li>
        <li>在新的接口做好之前，目的地请手动输入；</li>
        <li>支持在售火车票行程，其他时间一般不会成功。</li>
      </ul>
      <h2>注意事项</h2>
      <ul>
        <li>使用本捷径需连接网络；</li>
        <li>在新的接口做好之前，目的地请手动输入；</li>
        <li>支持在售火车票行程，其他时间一般不会成功。</li>
      </ul>
    </div>
  }
}