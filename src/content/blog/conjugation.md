---
author: "25920"
pubDatetime: 2023-10-20T17:22:00Z
title: Conjugate in different forms
postSlug: complex-quanternion-hermitian-conjugate
featured: true
draft: false
tags:
  - conjugate
  - maths
description: how many type of conjugates are there for division algebras.
---

## Table of contents

## Conjugation

### Complex Conjugate

```code
 y (im)
  |        z=x+iy
  |  r/|
  |  / |
  | /  |  
__|/φ__|x________ R
O |\φ  |
  | \  |   
  | r\ |   z̄=x-iy
  |   \|
```

C => Complex Number

C conjugate => ∗ (i=>-i)

### Quaternion Conjugate

H (î,Ĵ,k̂=>-î,-Ĵ,-k̂)

### Hermitian Transpose

C Matrix (A+iB)<br/>
[<br/>
  2+3i<span style="padding-right:15px;"></span>i<span style="padding-right:15px;"></span>6-4i<br/>
  7<span style="padding-right:15px;"></span>2-3i<span style="padding-right:15px;"></span>-i<br/>
]

C conj(C Matrix)<br/>
[<br/>
  2-3i<span style="padding-right:15px;"></span>-i<span style="padding-right:15px;"></span>6+4i<br/>
  7<span style="padding-right:15px;"></span>2+3i<span style="padding-right:15px;"></span>i<br/>
]

H conjugate transpose<br/>
[<br/>
  2-3i<span style="padding-right:15px;"></span>7<br/>
  -i<span style="padding-right:15px;"></span>2+3i<br/>
  6+4i<span style="padding-right:15px;"></span>i<br/>
]

C(Matrix)*C(conjugate) => ERROR (Dimension NOT Matched)
C(Matrix)*H(transpose) => OKAY (Dimension Matched)<br/>
C_Matrix (M) ----------------> Conjugate Transpose (M<sup>H</sup>)<br/>
if M<sup>H</sup> = M => (Hermitian Matrix)