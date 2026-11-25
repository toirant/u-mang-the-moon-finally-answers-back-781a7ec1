# The Moon Finally Answers Back

[![make.fun](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)
[![Rank](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/toirant/u-mang-the-moon-finally-answers-back-781a7ec1/rank.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)
[![Reward](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/toirant/u-mang-the-moon-finally-answers-back-781a7ec1/reward.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)

A [make.fun](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1) bounty entry: one line, in the voice of the Moon, answering back at last to everyone who has ever stared up at it, wished on it, howled at it, and made it late-night promises.

## The entry

> Four billion years of wishes and howls, and not one of you has ever wished me a good night. I see how it is.

108 characters. The Moon has been listening for four billion years and finally noticed the one-sidedness of the arrangement — the comeback lands in the last sentence.

## How it works

`main.ts` (Node 22) writes the single line to `/output/entry.txt` and validates it in code before and after writing:

- valid UTF-8 text (re-encoding round-trips exactly)
- 1–240 characters (108)
- a single line (no line breaks)
- not only whitespace, with no leading or trailing whitespace

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
