<template><div><!-- more -->
<h1 id="冯诺依曼模型" tabindex="-1"><a class="header-anchor" href="#冯诺依曼模型"><span>冯诺依曼模型</span></a></h1>
<p>运算器，存储器，控制器，输入设备，输出设备</p>
<figure><img src="@source/zh/demo/计算机操作系统/2024-05-29-21-47-14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="内存" tabindex="-1"><a class="header-anchor" href="#内存"><span>内存：</span></a></h3>
<p>我们的程序和数据都是存储在内存，存储的区域是线性的。内存的地址是从 0 开始编号的，然后自增排列，最后一个地址为内存总字节数 - 1。</p>
<p>在计算机数据存储中，存储数据的基本单位是<strong>字节（*byte*）</strong>，1 字节等于 8 位（8 bit）。每一个字节都对应一个内存地址。</p>
<h3 id="中央处理器" tabindex="-1"><a class="header-anchor" href="#中央处理器"><span>中央处理器：</span></a></h3>
<p>中央处理器也就是我们常说的 CPU，32 位和 64 位 CPU 最主要区别在于一次能计算多少字节数据：</p>
<ul>
<li>32 位 CPU 一次可以计算 4 个字节；</li>
<li>64 位 CPU 一次可以计算 8 个字节；</li>
</ul>
<p>这里的 32 位和 64 位，通常称为 CPU 的位宽，代表的是 CPU 一次可以计算（运算）的数据量。</p>
<p>之所以 CPU 要这样设计，是为了能计算更大的数值，如果是 8 位的 CPU，那么一次只能计算 1 个字节 <code v-pre>0~255</code> 范围内的数值，这样就无法一次完成计算 <code v-pre>10000 * 500</code> ，于是为了能一次计算大数的运算，CPU 需要支持多个 byte 一起计算，所以 CPU 位宽越大，可以计算的数值就越大，比如说 32 位 CPU 能计算的最大整数是 <code v-pre>4294967295</code>。</p>
<p>CPU 内部还有一些组件，常见的有<strong>寄存器、控制单元和逻辑运算单元</strong>等。其中，控制单元负责控制 CPU 工作，逻辑运算单元负责计算，而寄存器可以分为多种类，每种寄存器的功能又不尽相同。</p>
<p>CPU 中的寄存器主要作用是存储计算时的数据</p>
<p>常见的寄存器种类：</p>
<ul>
<li><em>通用寄存器</em>，用来存放需要进行运算的数据，比如需要进行加和运算的两个数据。</li>
<li><em>程序计数器</em>，用来存储 CPU 要执行下一条指令「所在的内存地址」，注意不是存储了下一条要执行的指令，此时指令还在内存中，程序计数器只是存储了下一条指令「的地址」。</li>
<li><em>指令寄存器</em>，用来存放当前正在执行的指令，也就是指令本身，指令被执行完成之前，指令都存储在这里。</li>
</ul>
<h3 id="总线" tabindex="-1"><a class="header-anchor" href="#总线"><span>总线：</span></a></h3>
<p>总线是用于 CPU 和内存以及其他设备之间的通信，总线可分为 3 种：</p>
<ul>
<li><em>地址总线</em>，用于指定 CPU 将要操作的内存地址；</li>
<li><em>数据总线</em>，用于读写内存的数据；</li>
<li><em>控制总线</em>，用于发送和接收信号，比如中断、设备复位等信号，CPU 收到信号后自然进行响应，这时也需要控制总线；</li>
</ul>
<p>当 CPU 要读写内存数据的时候，一般需要通过下面这三个总线：</p>
<ul>
<li>首先要通过「地址总线」来指定内存的地址；</li>
<li>然后通过「控制总线」控制是读或写命令；</li>
<li>最后通过「数据总线」来传输数据；</li>
</ul>
<h3 id="输入、输出设备" tabindex="-1"><a class="header-anchor" href="#输入、输出设备"><span>输入、输出设备</span></a></h3>
<p>输入设备向计算机输入数据，计算机经过计算后，把数据输出给输出设备。期间，如果输入设备是键盘，按下按键时是需要和 CPU 进行交互的，这时就需要用到控制总线了。</p>
<h3 id="存储器的层次结构" tabindex="-1"><a class="header-anchor" href="#存储器的层次结构"><span>存储器的层次结构</span></a></h3>
<figure><img src="@source/zh/demo/计算机操作系统/2024-05-29-21-47-48.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>每个存储器只和相邻的一层存储器设备打交道，并且存储设备为了追求更快的速度，所需的材料成本必然也是更高，也正因为成本太高，所以 CPU 内部的寄存器、L1\L2\L3 Cache 只好用较小的容量，相反内存、硬盘则可用更大的容量，这就我们今天所说的存储器层次结构</strong>。</p>
<figure><img src="@source/zh/demo/计算机操作系统/2024-05-29-21-48-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


