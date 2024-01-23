---
author: "25920"
pubDatetime: 2024-01-21T16:00:00Z
title: Graph Nodes On Hermitian Matrix
postSlug: graph-hermitian
featured: true
draft: false
tags:
  - maths
  - graph theory
  - hermitian matrix
description: graph representation on hermitian matrix
---

## Table of contents

## Preliminary

### Hermitian Matrix and Its Graph Nodes

refer to [here](https://25920-dialogue.netlify.app/posts/complex-quanternion-hermitian-conjugate#hermitian-transpose) to have a basic of Hermitian Matrix

![HermitianMatrixNByN](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/a.png)

<div style="text-align:center">Here is the representation of its values when N = 3:</div>

![MatrixIndexesByRowAndColumn](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/b.png)

<div style="text-align:center">We can use graph theory's node to notate each values with the following set:</div>

![HermitianMatrixHraphNodeSet](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/c.png)

<div style="text-align:center">Like this, from 1 to 9 (N<sup>2</sup>)</div>

![HermitianMatrixHraphNodeSet](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/d.png)

<div style="text-align:center">To inspect the number of pairs of conjugation in H:</div>

![HermitianMatrixHraphNodeSet](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/e.png)

## Forming a pair or stay retracted

### Calculate the gap between one node and another in a Hermitian Matrix: g<sub>xy<sub>

![gxyequation](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/f.png)

<div style="text-align:center">where v equals to the node and r equals to the row where v resides</div>

<div style="text-align:center">set nodes above the diagonal as Xs and vice versa as Ys.</div>

<div style="text-align:center">when v is from the upper triangular area, g<sub>xy</sub> will be greater than 0. Vice versa, g<sub>xy</sub> will be less than 0</div>

### Form a pair

![gxyequation](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/i.png)

<div style="text-align:center">since node v<sub>1</sub> crosses the diagonal to form a pair with node v<sub>2</sub>.</div>

<div style="text-align:center">And g<sub>xy</sub>!=0 making node v<sub>1</sub> connected with its value conjugation's node.</div>

![gxyequation](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/j.png)

#### Examples of pairing

![conditionxtoy](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/a.png)

![equationxtoy](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/b.png)

<div style="text-align:center">If N = 2 and v = 2:</div>

![equationxtoyexample](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/c.png)

<div style="text-align:center"><strong>Correct!</strong></div>

![xtoynodes](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/d.png)

<div style="text-align:center">Node 2 is connected with Node 3.</div>

<hr/>

![conditionytox](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/e.png)

![equationytox](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/f.png)

<div style="text-align:center">If N = 3 and v = 8:</div>

![equationytoxexample](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/g.png)

<div style="text-align:center"><strong>Correct!</strong></div>

![ytoxnodes](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/h.png)

<div style="text-align:center">Node 6 is connected with Node 8.</div>

### Stay Retracted

![gxyequation](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/g.png)

<div style="text-align:center">since node v unables to cross the diagonal to form a pair.</div>

<div style="text-align:center">And g<sub>xy</sub>=0 making node v standing still.</div>

![gxyequation](https://bafybeiajk3y33ds3ydjtsszlwie3745yiv74nt6fa2aloxrzwwytk3lkcm.ipfs.nftstorage.link/h.png)

#### Examples of retracting

![conditionxtoy](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/i.png)

<div style="text-align:center">If N = 3 and v = 5:</div>

![equationxtoy](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/j.png)

## Compute Conjugation Node Destination Without Looking

![conditionxtoy](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/k.png)

![conditionxtoy](https://bafybeihoicenrez5lctpunivo2taajjl3rq4euqlky7bmroqun2eofrueq.ipfs.nftstorage.link/l.png)

<div style="text-align:center">All you need is v and N, simple enough.</div>
