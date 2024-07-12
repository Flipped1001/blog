<template><div><!-- more -->
<h2 id="tcp的重传机制" tabindex="-1"><a class="header-anchor" href="#tcp的重传机制"><span>TCP的重传机制</span></a></h2>
<h3 id="_1-超时重传" tabindex="-1"><a class="header-anchor" href="#_1-超时重传"><span>1.超时重传</span></a></h3>
<p>在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 <code v-pre>ACK</code> 确认应答报文，就会重发该数据</p>
<blockquote>
<p>超时时间应该设置为多少呢？</p>
<p><code v-pre>RTT</code>（Round-Trip Time 往返时延）<strong>数据发送时刻到接收到确认的时刻的差值</strong></p>
<p>RTO超时重传时间：</p>
<ul>
<li>RTO较长，重发很慢，没有效率</li>
<li>RTO较短，导致没有丢包就会重传，导致更多的超时</li>
</ul>
</blockquote>
<p>ROT应该较大于RTT</p>
<p>**每当遇到一次超时重传的时候，都会将下一次超时时间间隔设为先前值的两倍。两次超时，就说明网络环境差，不宜频繁反复发送。**超时重传的周期可能时间过长</p>
<h3 id="_2-快速重传" tabindex="-1"><a class="header-anchor" href="#_2-快速重传"><span>2.快速重传</span></a></h3>
<p>针对收到三次相同的报文，就会在定时器过期之前，重传丢失的报文</p>
<p>但是他有一个问题<strong>重传的时候，是重传一个，还是重传所有的问题。</strong></p>
<h3 id="_3-sack方法" tabindex="-1"><a class="header-anchor" href="#_3-sack方法"><span>3.SACK方法</span></a></h3>
<p><code v-pre>SACK</code>（ Selective Acknowledgment），选择性确认</p>
<p><strong>可以将已收到的数据的信息发送给「发送方」</strong>，这样发送方就可以知道哪些数据收到了，哪些数据没收到，知道了这些信息，就可以<strong>只重传丢失的数据</strong>。</p>
<p>需要两方都支持SACK</p>
<h3 id="_4-duplicate-sack" tabindex="-1"><a class="header-anchor" href="#_4-duplicate-sack"><span>4.Duplicate SACK</span></a></h3>
<p><strong>使用了 SACK 来告诉「发送方」有哪些数据被重复接收了。</strong></p>
<ol>
<li>可以让「发送方」知道，是发出去的包丢了，还是接收方回应的 ACK 包丢了;</li>
<li>可以知道是不是「发送方」的数据包被网络延迟了;</li>
<li>可以知道网络中是不是把「发送方」的数据包给复制了;</li>
</ol>
</div></template>


