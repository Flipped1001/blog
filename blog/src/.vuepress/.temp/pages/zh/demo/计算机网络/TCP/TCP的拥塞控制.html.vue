<template><div><!-- more -->
<h2 id="拥塞控制" tabindex="-1"><a class="header-anchor" href="#拥塞控制"><span>拥塞控制：</span></a></h2>
<p><strong>避免「发送方」的数据填满整个网络</strong>，为了在「发送方」调节所要发送数据的量，定义了一个叫做「<strong>拥塞窗口</strong>」的概念。
$$
什么是拥塞窗口，和发送窗口有什么关系？又是怎么知道当前网络出现了拥塞？拥塞控制有哪些？
$$
<strong>拥塞窗口 cwnd</strong>是发送方维护的一个的状态变量，它会根据<strong>网络的拥塞程度动态变化的</strong>。发送窗口的值是swnd = min(cwnd, rwnd)，</p>
<p>只要发生超时重传就会认为网络出现了拥塞</p>
<h3 id="慢启动" tabindex="-1"><a class="header-anchor" href="#慢启动"><span>慢启动</span></a></h3>
<p>TCP在刚建立的时候，会一点一点提高发送数据包的数量，<strong>当发送方每收到一个 ACK，拥塞窗口 cwnd 的大小就会加 1。</strong></p>
<p>发包个数呈指数增长</p>
<p>有一个叫慢启动门限 <code v-pre>ssthresh</code> （slow start threshold）状态变量。</p>
<ul>
<li>当 <code v-pre>cwnd</code> &lt; <code v-pre>ssthresh</code> 时，使用慢启动算法。</li>
<li>当 <code v-pre>cwnd</code> &gt;= <code v-pre>ssthresh</code> 时，就会使用「拥塞避免算法」。</li>
</ul>
<h3 id="拥塞避免" tabindex="-1"><a class="header-anchor" href="#拥塞避免"><span>拥塞避免</span></a></h3>
<p>**每当收到一个 ACK 时，cwnd 增加 1/cwnd。**从指数增长变成线性增长</p>
<p>当触发了重传机制，也就进入了「拥塞发生算法」。</p>
<h3 id="拥塞发生" tabindex="-1"><a class="header-anchor" href="#拥塞发生"><span>拥塞发生</span></a></h3>
<p>当发生了「超时重传」，则就会使用拥塞发生算法。</p>
<p>这个时候，ssthresh 和 cwnd 的值会发生变化：</p>
<ul>
<li><code v-pre>ssthresh</code> 设为 <code v-pre>cwnd/2</code>，</li>
<li><code v-pre>cwnd</code> 重置为 <code v-pre>1</code> （是恢复为 cwnd 初始化值，我这里假定 cwnd 初始化值</li>
</ul>
<p>当发生「快速重传」的时候，TCP 认为这种情况不严重，因为大部分没丢，只丢了一小部分，则 <code v-pre>ssthresh</code> 和 <code v-pre>cwnd</code> 变化如下：</p>
<ul>
<li><code v-pre>cwnd = cwnd/2</code> ，也就是设置为原来的一半;</li>
<li><code v-pre>ssthresh = cwnd</code>;</li>
<li>进入快速恢复算法</li>
</ul>
<h3 id="快速恢复" tabindex="-1"><a class="header-anchor" href="#快速恢复"><span>快速恢复</span></a></h3>
<p>进入快速恢复算法如下：</p>
<ul>
<li>
<p>拥塞窗口 <code v-pre>cwnd = ssthresh + 3</code> （ 3 的意思是确认有 3 个数据包被收到了）；</p>
</li>
<li>
<p>重传丢失的数据包；</p>
</li>
<li>
<p>如果再收到重复的 ACK，那么 cwnd 增加 1；目的是尽快将丢失的数据包发送给目标</p>
</li>
<li>
<p>如果收到新数据的 ACK 后，把 cwnd 设置为第一步中的 ssthresh 的值，原因是该 ACK 确认了新的数据，说明从 duplicated ACK 时的数据都已收到，该恢复过程已经结束，可以回到恢复之前的状态了，也即再次进入拥塞避免状态；</p>
</li>
</ul>
</div></template>


