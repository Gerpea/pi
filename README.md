# Find PI to nth digit

**Calculates PI using [Chudnovsky series](https://en.wikipedia.org/wiki/Chudnovsky_algorithm)**

## Table of Contents

1. [Run](#run)
2. [Options](#options)
3. [Examples](#examples)

## Run

```bash
npm install
```

```bash
node index.js [options]
```

or

```bash
npm run start -- [options]
```

### Options

- **-d**, **--digits**

    <pre>[<em><b>required</b></em>] Number of digits to calculate</pre>

- **-o**, **--out**

    <pre>[<em><b>optional</b></em>] Path to save calculated pi
    <em>if not specified the calculated</em> <b>PI</b> <em>will be output in console</em></pre>

### Examples

```bash
$ node index.js -d 100
3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170680
Execution time (hr): 0s 8.00646ms
```
