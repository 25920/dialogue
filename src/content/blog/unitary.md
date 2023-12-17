---
author: "25920"
pubDatetime: 2023-10-19T16:58:53Z
title: Unitary Orthogonal Orthonormal
postSlug: orthonoal-unitary-orthonormal
featured: true
draft: false
tags:
  - unitary
  - orthogonal
  - orthonormal
  - maths
description: matrix with different properties
---

## Table of contents

## Preliminary

### Complex Matrix => Complex Conjugate => Conjugate Transpose

![MComplexMatrix](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/a.png)

![MComplexConjugateMatrix](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/b.png)

![MHermitianMatrix](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/c.png)

## Difference

### Orthogonal (R)

To constitute an orthogonal feature

- columns => orthonormal basis<br/>
  A<sup>T</sup> = A<sup>-1</sup> (T=Transpose)

![MComplexMatrix2](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/d.png)

![MComplexMatrix2Transpose](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/e.png)

![MComplexMatrix2Col1](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/f.png)

![MComplexMatrix2Col2](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/g.png)

![MComplexMatrix2Col3](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/h.png)

![MComplexMatrix2Col123](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/i.png)

![MComplexMatrix2Col123uv](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/j.png)

![MComplexMatrix2Col12](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/k.png)

![MComplexMatrix2Col13](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/l.png)

![MComplexMatrix2Col23](https://bafybeidur7ae2dzmpdepyga3fmjbmklkiabred2hafax2r2cvjw4u5vrjm.ipfs.nftstorage.link/m.png)

OR

![IM](https://bafybeiggyebibpbw3noa6frzj2gejdik2zhqvtju2cqu6ijdyebzunvpd4.ipfs.nftstorage.link/a.png)

![I](https://bafybeiggyebibpbw3noa6frzj2gejdik2zhqvtju2cqu6ijdyebzunvpd4.ipfs.nftstorage.link/b.png)

if M<sup>T</sup>M=I

Either way, M => Orthogonal

### Unitary (C)

To constitute an unitary feature

- columns => orthonormal vector<br/>
  U<sup>H</sup>\*U = I (Identity Matrix)

![UCM](https://bafybeicc7z6vjecofprxhjjbrvjilocalvzcscr247n6vwae472kyqd5ee.ipfs.nftstorage.link/a.png)

![UCMH](https://bafybeicc7z6vjecofprxhjjbrvjilocalvzcscr247n6vwae472kyqd5ee.ipfs.nftstorage.link/b.png)

if U<sup>H</sup>\*U = I

U is an Unitary Matrix

![UCMHI](https://bafybeigbdd5g57flo7moqnypyz3ik75zfchj7n44ake6c6vepx6bsl35tq.ipfs.nftstorage.link/a.png)

So U is indeed an Unitary Matrix

## Vectors

### Orthogonal Vector

if 2 vectors are orthogonal then they are have a 90 degree gap

Plus

v<sub>1</sub>\*v<sub>2</sub>=0

But, both vectors does not have to have length = 1

![dotproduct](https://bafybeigbdd5g57flo7moqnypyz3ik75zfchj7n44ake6c6vepx6bsl35tq.ipfs.nftstorage.link/b.png)

![dotproduct](https://bafybeigbdd5g57flo7moqnypyz3ik75zfchj7n44ake6c6vepx6bsl35tq.ipfs.nftstorage.link/f.png)

<div style="text-align:center">=</div>

Option 1

![dotproduct](https://bafybeigbdd5g57flo7moqnypyz3ik75zfchj7n44ake6c6vepx6bsl35tq.ipfs.nftstorage.link/c.png)

<div style="text-align:center">where</div>

![dotproduct](https://bafybeigbdd5g57flo7moqnypyz3ik75zfchj7n44ake6c6vepx6bsl35tq.ipfs.nftstorage.link/d.png)

AND

![dotproduct](https://bafybeigbdd5g57flo7moqnypyz3ik75zfchj7n44ake6c6vepx6bsl35tq.ipfs.nftstorage.link/e.png)

OR Option 2

![dotproduct](https://bafybeigbdd5g57flo7moqnypyz3ik75zfchj7n44ake6c6vepx6bsl35tq.ipfs.nftstorage.link/g.png)

<span style="width:30%;background:black;height:5px"></span>

A set of vectors: S {v<sub>1</sub>,...,v<sub>n</sub>}

if Sum<sub>n=1</sub><sup>k=n</sup> v<sub>n</sub>\*v<sub>k</sub> == 0:

set S of vectors is mutually orthogonal as all pair is 0.

### Orthonormal Vector

Check if the set of vectors Y is orthonormal.

Y {f,t}

f = [
<br/>
<span style="padding-right:15px;"></span>4<br/>
<span style="padding-right:15px;"></span>2<br/>
<span style="padding-right:15px;"></span>1<br/>
]

t = [
<br/>
<span style="padding-right:15px;"></span>1<br/>
<span style="padding-right:15px;"></span>-3<br/>
<span style="padding-right:15px;"></span>-2<br/>
]

|v| = &#8730;Summation(v<sub>n</sub>)<sup>2</sup>

|f| = &#8730;21

|t| = &#8730;14

check unit vector

&#8730;(Summation<sub>n=1</sub><sup>n</sup>((v<sub>n</sub>/|v|)<sup>2</sup>))

f = 1/&#8730;(21)\*f<br/>

[
<br/>
<span style="padding-right:15px;"></span>4/&#8730;(21)<br/>
<span style="padding-right:15px;"></span>2/&#8730;(21)<br/>
<span style="padding-right:15px;"></span>-1/&#8730;(21)<br/>
]

f = &#8730;(16/21+4/21+1/21) = &#8730;(21/21) = 1

same for t

As t and f have unit vectors as properties && dot product of vectors c\*f = 0.

So, the set Y is orthonormal
