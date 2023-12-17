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

M = 
[<br/>
  <span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>1-i<br/>
  <span style="padding-right:15px;"></span>1+i<span style="padding-right:15px;"></span>3<br/>
]

M∗ = 
[
  <br/>
  <span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>1+i<br/>
  <span style="padding-right:15px;"></span>1-i<span style="padding-right:15px;"></span>3<br/>
]

M<sup>H</sup> or M<sup>+</sup> =
[
  <br/>
  <span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>1-i<br/>
  <span style="padding-right:15px;"></span>1+i<span style="padding-right:15px;"></span>3<br/>
] Also a Hermitian Matrix

## Difference

### Orthogonal (R)

To constitute an orthogonal feature
- columns => orthonormal basis<br/>
A<sup>T</sup> = A<sup>-1</sup> (T=Transpose)

M = [
  <br/>
  <span style="padding-right:15px;"></span>-2<span style="padding-right:15px;"></span>1<span style="padding-right:15px;"></span>2<br/>
  <span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>1<br/>
  <span style="padding-right:15px;"></span>1<span style="padding-right:15px;"></span>-2<span style="padding-right:15px;"></span>2<br/>
] * 1/3

M<sup>T</sup> = [
  <br/>
  <span style="padding-right:15px;"></span>-2<span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>1<br/>
  <span style="padding-right:15px;"></span>1<span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>-2<br/>
  <span style="padding-right:15px;"></span>2<span style="padding-right:15px;"></span>1<span style="padding-right:15px;"></span>2<br/>
] * 1/3

M<sub>Col1</sub> = [
  <br/>
  <span style="padding-right:15px;"></span>-2<br/>
  <span style="padding-right:15px;"></span>2<br/>
  <span style="padding-right:15px;"></span>1<br/>
] * 1/3

M<sub>Col2</sub> = [
  <br/>
  <span style="padding-right:15px;"></span>1<br/>
  <span style="padding-right:15px;"></span>2<br/>
  <span style="padding-right:15px;"></span>-2<br/>
] * 1/3

M<sub>Col3</sub> = [
  <br/>
  <span style="padding-right:15px;"></span>2<br/>
  <span style="padding-right:15px;"></span>1<br/>
  <span style="padding-right:15px;"></span>2<br/>
] * 1/3

Unit Vector of M<sub>Col1</sub> = Unit Vector of M<sub>Col2</sub> = Unit Vector of M<sub>Col3</sub> = 1;

M<sub>Col1</sub>*M<sub>Col2</sub>=0

M<sub>Col1</sub>*M<sub>Col3</sub>=0

M<sub>Col2</sub>*M<sub>Col3</sub>=0

M => Orthogonal

### Unitary (C)

To constitute an unitary feature
- columns => orthonormal vector<br/>
U<sup>H</sup>*U = I (Identity Matrix)

U = [
  <br/>
  <span style="padding-right:15px;"></span>i/&#8730;2<span style="padding-right:15px;"></span>-1/&#8730;2<br/>
  <span style="padding-right:15px;"></span>1/&#8730;2<span style="padding-right:15px;"></span>-i/&#8730;2<br/>
]

U<sup>H</sup> = [
  <br/>
  <span style="padding-right:15px;"></span>-i/&#8730;2<span style="padding-right:15px;"></span>1/&#8730;2<br/>
  <span style="padding-right:15px;"></span>-1/&#8730;2<span style="padding-right:15px;"></span>i/&#8730;2<br/>
]

U<sup>H</sup>*U = [
  <br/>
  <span style="padding-right:15px;"></span>1<span style="padding-right:15px;"></span>0<br/>
  <span style="padding-right:15px;"></span>0<span style="padding-right:15px;"></span>1<br/>
] = I

So, U is an Unitary Matrix

## Vectors

### Orthogonal Vector

if 2 vectors are orthogonal then they are have a 90 degree gap

Plus

v<sub>1</sub>*v<sub>2</sub>=0

But, both vectors does not have to have length = 1

<span style="width:30%;background:black;height:5px"></span>

A set of vectors: S {v<sub>1</sub>,...,v<sub>n</sub>}

if Sum<sub>n=1</sub><sup>k=n</sup> v<sub>n</sub>*v<sub>k</sub> == 0:

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

f = 1/&#8730;(21)*f<br/>

[
  <br/>
  <span style="padding-right:15px;"></span>4/&#8730;(21)<br/>
  <span style="padding-right:15px;"></span>2/&#8730;(21)<br/>
  <span style="padding-right:15px;"></span>-1/&#8730;(21)<br/>
]

f = &#8730;(16/21+4/21+1/21) = &#8730;(21/21) = 1

same for t

As t and f have unit vectors as properties && dot product of vectors c*f = 0.

So, the set Y is orthonormal