import React from 'react';
import 'primer-markdown/build/build.css';

const meta = {
  title: '12306 SMS to Cal',
  version: 'v2.6',
}

const A = ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

export default class Shortcuts extends React.Component {
  constructor(props) {
    super(props);

    document.title = meta.title;
  }

  render() {
    return <div className="markdown-body" style={{padding: 16}}>
      <h1>{meta.title}</h1>
      <blockquote>版本：{meta.version} <A href="https://www.icloud.com/shortcuts/a91b6cb2f5d5482c9776dbeb41ab12dc">GET</A></blockquote>

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

      <h2>隐私声明</h2>
      <p>捷径会向本站，即 <A href="https://api.wangjian.io">api.wangjian.io</A> 上传短信中的<strong>日期</strong>、<strong>车次</strong>、<strong>出发站</strong>和手动输入的<strong>到达站</strong>，用来获取出发时间、到达时间和历时。</p>
      <p>其他信息操作均在捷径 App 内完成，大家可放心使用。</p>

      <h2>更新日志</h2>

      <h3>v2.6<small> - 20180919 <A href="https://www.icloud.com/shortcuts/a91b6cb2f5d5482c9776dbeb41ab12dc">GET</A></small></h3>
      <p>对不复制短信运行和将短信粘贴到目的车站输入框的情况做了限制。</p>

      <h3>v2.5<small> - 20180919 <A href="https://www.icloud.com/shortcuts/b9001e8898a34b5f86d0128eabf1602a">GET</A></small></h3>
      <p>使用新版捷径(Shortcuts)制作，如遇到不兼容问题，请先更新 app；</p>
      <p>增加大量提示，方便排错，提高成功率。</p>
      <p>记得使用前先复制短信；</p>
      <p>选择车站功能即将回归。</p>

      <h3>v2.4<small> - 20180916 <A href="https://workflow.is/workflows/355dfce33b5f4876a709b1990e0e2661">GET</A></small></h3>
      <p>移除失效的第三方 API，暂时使用手动输入方式。</p>

      <blockquote>


        <h4>- - - - - 以下版本已失效 - - - - -</h4>

        <h3>v2.3<small> - 20171124 <A href="https://workflow.is/workflows/9854ff939a9442879d7430d773ebe3c0">GET</A></small></h3>
        <p>优化了正则表达式，可用性更高；</p>
        <p>增加了自动检查更新功能：默认开启，也可在 flow 内自行关闭。</p>

        <h3>v2.2<small> - 20171119 <A href="https://workflow.is/workflows/31c9c915152042bbb104702b4d18a60c">GET</A></small></h3>
        <p>删除了多余的 Quick Look 动作；</p>
        <p>检票口再次可用；</p>
        <p>下次更新应该会加个检查更新功能。</p>

        <h3>v2.1<small> - 20171114 <A href="https://workflow.is/workflows/d9a7b5547c224aa6bd64198e330c58ff">GET</A></small></h3>
        <p>最近 12306 好勤劳，短信一改再改，这回又多了个逗号...</p>

        <h3>v2.0<small> - 20171023 <A href="https://workflow.is/workflows/c705dbe4e45c4d42a645487effeb3d39">GET</A></small></h3>
        <p>现在列车时间直接从 12306.cn 查询，时间不再出错；</p>
        <p>新增支持短信中的检票口信息；</p>
        <p>现在仅支持在售车票行程（即还未发车），历史短信无效。</p>

        <h3>v1.4<small> - 20170515 <A href="https://workflow.is/workflows/d0b54ab4a71f4cb2bb476c4afe2c20e1">GET</A></small></h3>
        <p>更新变量名，方便大家辨识结果来源并根据需要修改；</p>
        <p>增加验证机制，若短信中的发车时间与 API 查询结果不符：发车时间以短信为准，到站时间使用 API 数据计算。</p>

        <h3>v1.3<small> - 20170504 <A href="https://workflow.is/workflows/43c23c8df41c49a881b548bc35c7b318">GET</A></small></h3>
        <p>修复了在始发站出发不能正确确定时间的 bug。</p>

        <h3>v1.2<small> - 20170407 <A href="https://workflow.is/workflows/c50626367c8e4d649f5978338a432e15">GET</A></small></h3>
        <p>感谢 <A href="https://twitter.com/ysjiang4869">@ysjiang4869</A> 介绍的接口，现在只需要选择目的地即可完成操作（需使用网络）；</p>
        <p>现支持在通知中心直接运行，但如果可选车站列表大于 16 个，在通知中心会显示不全，届时请进入应用运行。</p>

        <h3>v1.1<small> - 20170408 <A href="https://workflow.is/workflows/b5818e1f1b2b4f10a88d0445f961221e">GET</A></small></h3>
        <p>修复 bug，新增支持无座票。至此已支持所有类型短信。</p>

        <h3>v1.0<small> - 20170407 <A href="https://workflow.is/workflows/9c581dd83da74c33bbfe17fa937bfbc7">GET</A></small></h3>
        <p>初始版本。</p>

      </blockquote>

      <h2>联系方式</h2>
      <p>email: <a href="mailto:contact@wangjian.io">contact@wangjian.io</a></p>
      <p>twitter: <A href="https://twitter.com/lopedever">@lopedever</A></p>

    </div>
  }
}